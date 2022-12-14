import Checkout from "../models/checkoutModel.js";
import { v4 as uuidv4 } from 'uuid';
let awsConfig = {
  "region": "us-east-1"
}

AWS.config.update(awsConfig)

let docClient = new AWS.DynamoDB.DocumentClient();
export const selectAllCheckouts = async (req, res, next) => {
  try {
    const checkouts = await Checkout.find({});
    res.status(200).json(checkouts);
  } catch (err) {
    next(err);
  }
};

export const selectCheckout = async (req, res, next) => {
  try {
    const checkout = await Checkout.findById(req.params.id);
    res.status(200).json(checkout);
  } catch (error) {
    next(error);
  }
};

// delete a checkout
export const deleteCheckout = async (req, res, next) => {
  try {
    const result = await Checkout.findOneAndDelete({ _id: req.params.id });
    res.status(200).json("A checkout has been deleted");
  } catch (error) {
    next(error);
  }
};

// update checkout
export const updateCheckout = async (req, res, next) => {
  try {
    const result = await Checkout.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json("A checkout has been updated");
  } catch (error) {
    next(error);
  }
};

// select checkout by user id
export const selectAllCheckoutByUserId = async (req, res, next) => {
  try {
    const checkouts = await Checkout.find({ user: req.params.userId });
    res.status(200).json(checkouts);
  } catch (error) {
    next(error);
  }
};

// create a new checkout
export const createCheckout = async (req, res, next) => {
  try {
    const input = {
      "id": uuidv4(),
      ...req.body
    }
    var params = {
      TableName: "checkouts",
      Item: input
    }
    docClient.put(params, function (err, data) {
      if (err) {
        console.log("ERROR", JSON.stringify(err, null, 2));
      }
      else {
        res.status(200).json("Created")
        //console.log("CREATE")
      }
    })
    // const body = { ...req.body };
    // const checkout = new Checkout(body);
    // await checkout.save();
    // res.status(200).json("Checkout has been created.");
  } catch (error) {
    next(error);
  }
};

// group by date, sum monney

export const revenue = async (req, res, next) => {
  try {
    const now = new Date();
    const start = new Date()
    let startDate = new Date(req.params.startDate);
    let endDate = new Date(req.params.endDate);
    const checkout = await Checkout.aggregate([
      {
        $match:
        {
          $and: [
            { createdAt: { $gt: startDate } },
            { createdAt: { $lt: endDate } }
          ]

        }
      },
      {
        $group: {
          _id: { $dateToString: { format: "%d-%m-%Y", date: "$createdAt" } },

          total: {
            $sum: "$totalCost"
          }
        }
      },
      { $sort: { _id: 1 } }

    ]);
    res.status(200).json(checkout);
  } catch (error) {
    next(error);
  }
}

const getDateObject = (date) => {
  return {
    day: date.split('-'),
    month: date.split('-'),
    year: date.split('-')
  }
}