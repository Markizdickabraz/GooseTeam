import React, { useState } from 'react';
import axios from 'axios';
import { Rating } from 'react-simple-star-rating';
import {
  Form,
  RatingText,
  Label,
  CommentText,
  BtnSave,
  BtnSaveText,
  BtnCancel,
  BtnCancelText,
  BtnWrapper,
} from './FeedbackForm.styled';

const FeedbackForm = ({ close, fetchData, setOnModal }) => {
  const [newComment, setNewComment] = useState('');
  const [newRate, setNewRate] = useState(0);
 
  const onStarClickClick = nextValue => {
    changeRate(nextValue);
  };

  const changeRate = value => {
    setNewRate(value);
  };

  const addReview = async () => {
    let newReview = {
      rating: newRate || 0,
      comment: newComment || '',
    };
    await axios
      .post(
        `https://goosetrack-backend-2lsp.onrender.com/api/reviews/`,
        newReview
      )
      .then(() => {
        fetchData();
      });
  };

  const sendReview = event => {
    event.preventDefault();
    if (!(newComment === '') && !(newRate === 0)) {
      addReview();
      //setIsVisible(false);
    } else {
      //setIsVisible(true);
    }
    close();
  };

  const handleSubmit = () => {
    setOnModal(false);

    setTimeout(() => {
      close();
    }, 300);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <RatingText>Rating</RatingText>
        <Rating
          onClick={e => onStarClickClick(e)}
          initialValue={newRate}
          iconsCount={5}
          transition={true}
          size={24}
        />

        <Label>
          <RatingText>Review</RatingText>
          <CommentText
            placeholder="Enter text"
            value={newComment}
            name=""
            id="feedback-text"
            cols="30"
            rows="10"
            onChange={event => {
              setNewComment(event.target.value);
            }}></CommentText>
        </Label>

        <BtnWrapper>
          <BtnSave type="submit" onClick={sendReview}>
            <BtnSaveText>Save</BtnSaveText>
          </BtnSave>
          <BtnCancel type="button" onClick={close}>
            <BtnCancelText>Cancel</BtnCancelText>
          </BtnCancel>
        </BtnWrapper>
      </Form>
    </div>
  );
};

export default FeedbackForm;
