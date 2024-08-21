import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import Review from "../models/review";
import { ReviewType } from "../shared/types";
import verifyToken from "../middleware/auth";

const router = express.Router();

//Route to create a new review
router.post(
  "/",
  verifyToken,
  [
    //Validation for required fields
    
    body("firstName").notEmpty().withMessage("firstName is required"),
    body("lastName").notEmpty().withMessage("lastName is required"),
    body("title").notEmpty().withMessage("Title is required"),
    body("description").notEmpty().withMessage("Description is required"),
    //body("starRating").isInt({ min: 1, max: 5 }).withMessage("Star rating must be between 1 and 5"),
  ],
  
  async (req: Request, res: Response) => {
    // Check for validation errors
   
   
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("erros is not empty(line 33)");
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Extract review details from request body
      const newReview: ReviewType = {
        ...req.body,
        //userId : req.userId,
        lastUpdated : new Date(),
      };
     
      
     

      // Create a new review document
      const review = new Review(newReview);
      // Save the new review to the database
    //   console.log("saving in db line 56");
      await review.save();
    //   console.log("saved in db line 58");
      // Send a successful response with the created review object
      res.status(201).send(review);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error creating review" });
    }
  }
);
router.get("/",verifyToken, async (req: Request, res: Response) => {
  
  try {
    // Récupérer toutes les Reviewq
    const reviews = await Review.find().sort("-lastUpdated");

     // Send the reviews as response
    res.json(reviews);
    
  } catch (error) {
    // Gérer les erreurs
    console.error("Error fetching reviews:", error);
    res.status(500).json({ message: "Error fetching reviews" });
  }
});


export default router;
