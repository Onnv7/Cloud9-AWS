import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";
import { saveFileObj } from "../utils/saveFile.js";
import { getUrlImageObj } from "../utils/getUrlImage.js";
import { generateCode } from "../utils/generatePassword.js";
import { sendEmail } from "../utils/sendEmail.js";
import { v4 as uuidv4 } from 'uuid';
import AWS from "aws-sdk"
let awsConfig = {
  "region": "us-east-1"
}

AWS.config.update(awsConfig)

let docClient = new AWS.DynamoDB.DocumentClient();
export const sendCodeVerify = async (req, res, next) => {
  try {
    const id = uuidv4();
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const address = "%Phường Phúc Xá%Quận Ba Đình%Thành Phố Hà Nội"
    const image = req.body.img;
    const input = {
      "address": address,
      ...req.body,
      "password": hash,
      "id": id,
      "imgPath": "/assets/images/default-user.png"
    }
    var params = {
      TableName: "users",
      Item: input
    }
    docClient.put(params, function (err, data) {
      if (err) {
        console.log("ERROR", JSON.stringify(err, null, 2));
      }
      else {
        res.status(200).json("Created")
      }
    })
  } catch (error) {
    next(error);
  }
};

// create a new user
export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const image = req.body.img;

    const newUser = new User({
      ...req.body,
      password: hash,
    });
    await saveFileObj(newUser, image);
    await newUser.save();
    res.status(200).send("User has been created.");
  } catch (err) {
    next(err);
  }
}

// login to set token
export const login = async (req, res, next) => {
  try {
    var user;
    var params = {
      TableName: "users",
      FilterExpression: "#email= :email",

      ExpressionAttributeNames: {
        "#email": "email"
      },
      ExpressionAttributeValues: {
        ":email": req.body.email
      },

    }
    await docClient.scan(params, function (err, data) {
      if (err) {
        console.log("ERROR", JSON.stringify(err, null, 2));
      }
      else {
        user = data.Items[0]
        if (!user) return next(createError(404, "User not found!"));


        // compare password in mongoose vs frontend
        const isPasswordCorrect = bcrypt.compare(
          req.body.password,
          user.password
        );
        if (!isPasswordCorrect) {
          res.status(200).json({
            status: "Wrong password or email!",
            success: false
          });
          return;
        }
        //return next(createError(400, "Wrong password or email!"));

        // create a new token for backend
        const token = jwt.sign(
          { id: user._id, isAdmin: user.isAdmin },
          process.env.JWT
        );
        const { password, img, ...otherDetails } = user;
        // set cookie token for backend
        let imgPath;
        if (user.img === undefined)
          imgPath = user.avatar;
        else
          imgPath = getUrlImageObj(img);
        //res.cookie("access_token")
        res
          .cookie("access_token", token)
          .status(200)
          .json({ ...otherDetails, imgPath: imgPath });
      }
    })
  } catch (err) {
    next(err);
  }
}




