'use client';

import { useState, useEffect } from "react";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

type Review = {
  id: string;
  username: string;
  rating: number;
  comment: string;
};

const Reviews= () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [username, setUsername] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [editReviewId, setEditReviewId] = useState<string | null>(null);

  useEffect(() => {
    // Load reviews from localStorage on initial render
    const savedReviews = localStorage.getItem("reviews");
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, []);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !comment) {
      alert("Username and comment are required!");
      return;
    }

    const newReview: Review = {
      id: Date.now().toString(),
      username,
      rating,
      comment,
    };

    // If editing, update review
    if (editReviewId) {
      const updatedReviews = reviews.map((review) =>
        review.id === editReviewId ? newReview : review
      );
      setReviews(updatedReviews);
      localStorage.setItem("reviews", JSON.stringify(updatedReviews));
      setEditReviewId(null); // Reset edit mode
    } else {
      // Add new review
      const updatedReviews = [...reviews, newReview];
      setReviews(updatedReviews);
      localStorage.setItem("reviews", JSON.stringify(updatedReviews));
    }

    // Reset form
    setUsername("");
    setRating(0);
    setComment("");
  };

  const handleDeleteReview = (id: string) => {
    const updatedReviews = reviews.filter((review) => review.id !== id);
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
  };

  const handleEditReview = (review: Review) => {
    setEditReviewId(review.id);
    setUsername(review.username);
    setRating(review.rating);
    setComment(review.comment);
  };

  return (
    <div className="container mx-auto p-4 bg-blue-50 shadow-lg mt-5 mb-auto rounded-lg">
      <h1 className="text-3xl font-semibold text-gray-800 flex justify-center">Reviews</h1>

      {/* Product details here */}
      <div className="mt-6">
        {/* <h2 className="text-xl font-semibold text-gray-700">Reviews</h2> */}

        <div className="mt-6 space-y-6 mx-2 sm:mx-12 md:mx-16 xl:mx-60 ">
          {/* Add/Edit Review Form */}
          <form onSubmit={handleAddReview} className="bg-white p-6 rounded shadow-md">
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-semibold text-gray-700">
                Username
              </label>
              <input
                id="username"
                type="text"
                className="w-full mt-2 p-2 border rounded-md"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="rating" className="block text-sm font-semibold text-gray-700">
                Rating (1-5)
              </label>
              <input
                id="rating"
                type="number"
                min={1}
                max={5}
                className="w-full mt-2 p-2 border rounded-md"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="comment" className="block text-sm font-semibold text-gray-700">
                Comment
              </label>
              <textarea
                id="comment"
                className="w-full mt-2 p-2 border rounded-md"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your review"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              {editReviewId ? "Update Review" : "Add Review"}
            </button>
          </form>

          {/* Display Reviews */}
          {reviews.length === 0 ? (
            <p className="text-gray-500 text-center">No reviews yet.</p>
          ) : (
            reviews.map((review) => (
              <div key={review.id} className="bg-white p-4 rounded shadow-md">
                <div className="flex justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">{review.username}</h3>
                  <div>
                    <button
                      onClick={() => handleEditReview(review)}
                      className="text-blue-500 mr-3"
                    >
                      <FaPen size={24}/>
                    </button>
                    <button
                      onClick={() => handleDeleteReview(review.id)}
                      className="text-red-500"
                    >
                     <MdDelete size={24}/>
                    </button>
                  </div>
                </div>
                <div className="flex items-center mt-2 mb-3">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={index < review.rating ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5 text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p>{review.comment}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
