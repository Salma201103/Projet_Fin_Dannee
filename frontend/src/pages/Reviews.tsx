import { useQuery } from "react-query";
import { Link } from "react-router-dom";import * as apiClient from "../api-client";
// import { BsBuilding, BsMap,BsPerson } from "react-icons/bs";
// import { BiHotel, BiMoney}from "react-icons/bi";

import {BiStar,BiUser} from "react-icons/bi";

const Reviews = () => {
  const { data: reviewData } = useQuery(
    "fetchReviews",
    apiClient.fetchReviews,
    {
      onError: () => {},
    }
  );

  if (!reviewData) {
    return (
      <div className="space-y-5 h-[calc(100vh-5rem)] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">No reviews found</h1>
      </div>
      );
  }
  
//   const allReviews = [
//     { 
//       "firstName": "John",
//       "lastName": "Doe",
//       "title": "Great Experience",
//       "description": "This was my first experience with BeyondHorizon, and it definitely wouldn't be my last. The platform exceeded my expectations and opened up a whole new world of possibilities. ",
//       "starRating": 5
//     },
//     { 
//       "firstName": "Jane",
//       "lastName": "Smith",
//       "title": "Impressive ",
//       "description": "BeyondHorizon has provided me with an impressive journey and I look forward to more exciting experiences.",
//       "starRating": 4
//     }
//   ];
  
  
  return (
    <section className="reviews">
    <div className="space-y-5">
      <span className="flex justify-between">
        <h1 className="text-4xl font-bold text-slate-600">Reviews</h1>
        <Link
          to="/add-review"
          className="text-center  h-full p-2 text-[18px]  rounded-full bg-cyan-600 text-white hover:bg-white hover:text-cyan-800 py-2  transition-colors duration-300"
        >
          Add Review
        </Link>
      </span>

      <div className="box-container mb-8    ">
        
            <div>
                <div className="grid grid-cols-1 gap-8">
        
    {reviewData.map((review, index) => (
    <div
      key={index}
      data-testid="review-card"
      className="box"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <BiUser className="text-4xl text-slate-500 mr-2" />
          <h2 className="text-1.5xl font-bold text-slate-700">
            {review.firstName} {review.lastName}
          </h2>
        </div>
        <div className="border border-slate-300 rounded-sm p-3 flex items-center">
          <BiStar className="mr-1" color="orange"/>
          {review.starRating} Star Rating
        </div>
      </div>
      <h3 className="flex font-bold">{review.title}</h3>
      <div className="flex">{review.description}</div>
    </div>
  ))}
</div>
</div>
      
      </div>
    </div>
    </section>
  );
};

export default Reviews;
