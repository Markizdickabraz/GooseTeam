import React, { useState } from 'react';
import axios from 'axios';
import { Rating } from 'react-simple-star-rating';

import Icons from '../../../../images/svg/sprite.svg';

import { BtnSvgWrapper, EditWrapper, BtnPencil, BtnPencilIcon, BtnTrash, BtnTrashIcon, BtnWrapper, BtnEdit, BtnEditText, BtnCancel, BtnCancelText, CommentTextList } from './FeedbackList.styled';

import { RatingText, Label } from '../FeedbackForm/FeedbackForm.styled';

const FeedbackList = ({  fetchData,  setReviewsList,  onModal,  setOnModal,  close,}) => { 
  //const [updateReview, setUpdateReview] = useState('');
  
  const [isOpened, setIsOpened] = useState(false);
  const [isVisibleEdit, setIsisVisibleEdit] = useState(false);
  const [newComment, setNewComment] = useState(setReviewsList.comment);

  const deleteReview = async item => {
    await axios
      .delete(
        `https://goosetrack-backend-2lsp.onrender.com/api/reviews/${item._id}`
      )
      .then(() => {
        fetchData();
      });
  };

  // const forUpdateRaview = item => {
  //   setNewComment(item);
  // };

  const handleToggleModal = () => {
    setIsOpened(!isOpened);
  };

  const editReview = async item => {
    console.log(newComment);
    if (!(newComment === '')) {

      let updateReview = {
        comment: newComment || '',
      };

      await axios.patch(`https://goosetrack-backend-2lsp.onrender.com/api/reviews/${item._id}`, updateReview)
        .then(() => { fetchData(); })
    };
  };

  return (
    <EditWrapper>
      <Rating
        initialValue={setReviewsList.rating}
        iconsCount={5}
        transition={true}
        size={24}
      />

      <BtnSvgWrapper>
        <BtnPencil
        type="button"
        onClick={() => {
         // forUpdateRaview(setReviewsList);
          handleToggleModal();
          setIsisVisibleEdit(!isVisibleEdit);
        }}>
        <BtnPencilIcon width="16" height="16">
          <use href={`${Icons}#pencil`} />
        </BtnPencilIcon>
      </BtnPencil>

      <BtnTrash
        type="button"
        onClick={() => {
          deleteReview(setReviewsList);
          close();
        }}>
        <BtnTrashIcon width="16" height="16">
          <use href={`${Icons}#trash`} />
        </BtnTrashIcon>
      </BtnTrash>
      </BtnSvgWrapper>
      
      <Label>
        <RatingText>Review</RatingText>
        <CommentTextList
          placeholder="Enter text"
          value={newComment}
          name=""
          id="feedback-text"
          cols="30"
          rows="10"
          onChange={event => {
            setNewComment(event.target.value);
          }}></CommentTextList>
      </Label>

      {isVisibleEdit && (
        <BtnWrapper>
          <BtnEdit type="submit" onClick={() => {editReview(setReviewsList)}}>
            <BtnEditText>Edit</BtnEditText>
          </BtnEdit>
          <BtnCancel type="button" onClick={close}>
            <BtnCancelText>Cancel</BtnCancelText>
          </BtnCancel>
        </BtnWrapper>
      )}

    </EditWrapper>
  );
};

export default FeedbackList;
