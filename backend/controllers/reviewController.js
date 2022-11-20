import Review from "../models/reviewModel.js";
import { getUrlImageObj } from "../utils/getUrlImage.js";

// select all reviews by product id
export const selectAllReviewByProductId = async (req, res, next) => {
    try {
        const review = await Review.find(
            { product: req.params.id }
        )
            .populate({
                path: "user",
                select: "name img"
            })
        let rs = [];
        let i = 0;
        for (i; i < review.length; i++) {
            const { user, ...others } = review[i]._doc;
            //console.log("🚀 ~ file: reviewController.js ~ line 16 ~ selectAllReviewByProductId ~ user", user)
            const imgPath = getUrlImageObj(user.img);
            const result = { ...others, name: user.name, imgPath: imgPath };
            rs.push(result)
        }
        //console.log("🚀 ~ file: reviewController.js ~ line 10 ~ selectAllReviewByProductId ~ review", review)

        res.status(200).json(rs);
    } catch (error) {
        next(error);
    }
}

// delete a review
export const deleteReview = async (req, res, next) => {
    try {
        const result = await Review.findByIdAndDelete(
            { _id: req.params.id }
        )
        res.status(200).json("Review has been deleted");
    } catch (error) {
        next(error);
    }
}

// update review
export const updateReview = async (req, res, next) => {
    try {
        const result = await Review.findByIdAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

// create a new review
export const createReview = async (req, res, next) => {
    try {
        const review = new Review(req.body);
        await review.save();
        res.status(200).json("Review has been created.")
    } catch (error) {
        next(error);
    }
}