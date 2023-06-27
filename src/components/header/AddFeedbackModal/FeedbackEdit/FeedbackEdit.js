import React, { useEffect, useState } from 'react';
import axios from 'axios';

// import { Rating } from 'react-simple-star-rating';


const FeedbackEdit = ({close, isOpened, toFetch, updateItem, onModal, setOnModal }) => {
    const [updatedItem, setUpdatedItem] = useState('');

    useEffect(() => {
        setUpdatedItem(updateItem);
    }, [updateItem]);

    const onStarClickClick = (nextValue) => {
      changeRate(nextValue);
    };
    
    const changeRate = (value) => {
      let newReview = {
      _id: updatedItem._id,
      comment: updatedItem.comment,
      rating: value,
    };
      setUpdatedItem(newReview);
    };

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
      setUpdatedItem('');
      toFetch();
      close();
    });
    };
    
    return  (
        
            <div>
                <form>
                    <p>Rating</p>
            {/* <Rating
              onClick={e => onStarClickClick(e)}
              initialValue={newRate}
              iconsCount={5}
              transition={true}
              size={24}
            /> */}
                {/* {isVisible && (
                  <p>
                    Rating is a required field
                  </p>
                )} */}
                <label>Review
                    <textarea
                        placeholder='Enter text'
                        value={updatedItem.comment}
                        name=""
                        id="feedback-text"
                        cols="30"
                        rows="10"
                        onChange={event => changeComment(event.target.value)}></textarea>
                    </label>
                    <div>
                        <button type="submit"  onClick={updateReview}>
                           <span>Edit</span>
                        </button>
                        <button type="button" onClick={close}>
                           <span>Cancel</span>
                        </button>
                    </div>
                </form>
            </div>
        
    )
};

export default FeedbackEdit;