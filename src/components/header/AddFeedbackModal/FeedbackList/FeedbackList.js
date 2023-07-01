import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Rating } from 'react-simple-star-rating';

import Icons from '../../../../images/svg/sprite.svg';

import {
  EditWrapper,
  BtnSvgWrapper,
  BtnPencil,
  BtnPencilIcon,
  BtnTrash,
  BtnTrashIcon,
  BtnWrapper,
  BtnEdit,
  BtnEditText,
  BtnCancel,
  BtnCancelText,
  CommentTextList,
} from './FeedbackList.styled';

import { RatingText, Label } from '../FeedbackForm/FeedbackForm.styled';

const FeedbackList = ({
  fetchData,
  setReviewsList,
  close,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isVisibleEdit, setIsVisibleEdit] = useState(false);
  const [newComment, setNewComment] = useState(setReviewsList.comment);
  const modalRef = useRef(null);

  const deleteReview = async (item) => {
    await axios.delete(
      `https://goosetrack-backend-2lsp.onrender.com/api/reviews/${item._id}`
    );
    fetchData();
  };

  const handleToggleModal = () => {
    setIsOpened(!isOpened);
  };

  const editReview = async (item) => {
    if (newComment !== '') {
      let updateReview = {
        comment: newComment,
      };

      await axios.patch(
        `https://goosetrack-backend-2lsp.onrender.com/api/reviews/${item._id}`,
        updateReview
      );
      fetchData();
      setIsVisibleEdit(false); // Close the edit section after submission
    }
  };

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      close();
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Escape') {
      close();
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  document.addEventListener('keydown', handleKeyPress);

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
    document.removeEventListener('keydown', handleKeyPress);
  };
}, [close]);

return (
    <EditWrapper ref={modalRef}>
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
            handleToggleModal();
            setIsVisibleEdit(!isVisibleEdit);
          }}
        >
          <BtnPencilIcon width="16" height="16">
            <use href={`${Icons}#pencil`} />
          </BtnPencilIcon>
        </BtnPencil>

        <BtnTrash
          type="button"
          onClick={() => {
            deleteReview(setReviewsList);
            close();
          }}
        >
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
          onChange={(event) => {
            setNewComment(event.target.value);
          }}
          readOnly={!isVisibleEdit}
        ></CommentTextList>
      </Label>

      {isVisibleEdit && (
        <BtnWrapper>
          <BtnEdit type="submit" onClick={() => editReview(setReviewsList)}>
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
