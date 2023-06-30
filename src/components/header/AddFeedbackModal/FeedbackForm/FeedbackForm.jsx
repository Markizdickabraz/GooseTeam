import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = ({ close, fetchData }) => {
  const [newComment, setNewComment] = useState('');
  const [newRate, setNewRate] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const addReview = async () => {
    let newReview = {
      rating: newRate || 0,
      comment: newComment || '',
    };
    await axios.post('api/reviews/', newReview).then(() => {
      setNewComment('');
      setNewRate(0);
      fetchData();
    });
  };

  const sendReview = (event) => {
    event.preventDefault();
    if (newComment !== '' && newRate !== 0) {
      addReview();
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const handleSubmit = () => {
    close();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>Rating</p>
        {isVisible && <p>Rating is a required field</p>}
        <p>Review</p>
        <label>
          <textarea
            placeholder="Enter text"
            value={newComment}
            name=""
            id="feedback-text"
            cols="30"
            rows="10"
            onChange={(event) => {
              setNewComment(event.target.value);
            }}
          ></textarea>
        </label>
        {isVisible && <p>Comment is a required field</p>}
        <button type="submit" onClick={sendReview}>
          <span>Save</span>
        </button>
      </form>
    </>
  );
};

export default FeedbackForm;
