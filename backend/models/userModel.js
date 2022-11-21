import mongoose, { mongo } from "mongoose";
// TODO check unique and required
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User must have a name"],
      trim: true,
      maxLength: [40, "A user name must have less or equal than 40 characters"],
      minLength: [5, "A user name must have more or equal than 5 characters"],
    },
    img: {
      coverImage: {
        type: Buffer,
        default: ""
        //required: true
      },
      coverImageType: {
        type: String,
        default: ""
        //required: true
      },
    },
    avatar: {
      type: String,
    },
    phoneNumber: {
      type: String,
      //required: [true, "User must have a phone number"],
      //unique: true,
    },
    address: [String],
    // username: {
    //   type: String,
    //   required: true,
    //   minLength: [6, "A user name must have more or equal than 6 characters"],
    //   unique: true,
    // },
    email: {
      type: String,
      //required: [true, "User must have a email"],
      //unique: true,
    },
    password: {
      type: String,
      //required: [true, "User must have a password"],
      minLength: [
        6,
        "A user password must have more or equal than 6 characters",
      ],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
  },
  { timestamps: true }
);
userSchema.virtual('coverImagePath').get(function () {
  let rs;
  if (this.img.coverImage != null && this.img.coverImageType != null) {
    rs = `data:${this.img.coverImageType};charset=utf-8;base64,${this.img.coverImage.toString('base64')}`
  }
  return rs;
})
export default mongoose.model("User", userSchema);
