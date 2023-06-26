import React, { useState } from 'react';
import axios from 'axios';
// import { Rating } from 'react-simple-star-rating';

const FeedbackForm = ({fetchData}) => {
    const [newComment, setNewComment] = useState('');
    const [newRate, setNewRate] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const onStarClickClick = (nextValue) => {
    changeRate(nextValue);
    };
    
    const changeRate = (value) => {
    setNewRate(value);
    };
    
    const addReview = async (event) => {
      let newReview = {
        rating: newRate || 0,
        comment: newComment || '',
    };
    await axios.post(`api/reviews`, newReview).then(() => {
      setNewComment('');
      setNewRate(0);
      fetchData();
    });
    };
    
    const sendReview = (event) => {
    event.preventDefault();
    if (!newComment==='' && !newRate===0) {
      addReview();
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    };
    
    const handleSubmit = () => {
    setAnimationModal(false);

    setTimeout(() => {
      onCloseModal();
    }, 300);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
               <p>Rating</p>
            {/* <Rating
              onClick={e => onStarClickClick(e)}
              initialValue={newRate}
              iconsCount={5}
              transition={true}
              size={24}
            /> */}
                {isVisible && (
                  <p>
                    Rating is a required field
                  </p>
                )}
                <label>Review
                    <textarea
                        placeholder='Enter text'
                        value={newComment}
                        name=""
                        id="feedback-text"
                        cols="30"
                        rows="10"
                        onChange={event => {setNewComment(event.target.value)}}></textarea>
                </label>
                {isVisible && (
                   <p>
                     Comment is a required field
                   </p>
                )}
                <button type="submit" onClick={sendReview}>
                   <span>Save</span>
                </button>
            </form>
        </div>

    )
};

export default FeedbackForm;