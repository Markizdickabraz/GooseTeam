import React from 'react';
import axios from 'axios';

const FeedbackEdit = ({ close, toFetch, updatedItem }) => {
  const changeComment = (value) => {
    let newReview = {
      _id: updatedItem._id,
      comment: value,
      rating: updatedItem.rating,
    };
    setUpdatedItem(newReview);
  };

  const updateReview = async (event) => {
    event.preventDefault();
    let newReview = {
      comment: updatedItem.comment,
      rating: updatedItem.rating,
    };
    await axios.put(`api/reviews/${updatedItem._id}`, newReview).then(() => {
      setUpdatedItem({});
      toFetch();
      close();
    });
  };

  return (
    <>
      <form>
        <p>Rating</p>
        <label>
          Review
          <textarea
            placeholder="Enter text"
            value={updatedItem.comment}
            name=""
            id="feedback-text"
            cols="30"
            rows="10"
            onChange={(event) => changeComment(event.target.value)}
          ></textarea>
        </label>
        <div>
          <button type="submit" onClick={updateReview}>
            <span>Edit</span>
          </button>
          <button type="button" onClick={close}>
            <span>Cancel</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default FeedbackEdit;
