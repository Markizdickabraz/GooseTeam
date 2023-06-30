import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../../../redux/authorization/selectors';
import FeedbackEdit from '../FeedbackEdit/FeedbackEdit';
import Icons from '../../../../images/svg/sprite.svg';

const FeedbackList = ({ fetchData, reviewsList }) => {
  const [updateReview, setUpdateReview] = useState('');
  const [isOpened, setIsOpened] = useState(false);
  const { name, avatarURL } = useSelector(selectUser);
  const dispatch = useDispatch();

  const firstLetter = name?.charAt(0).toUpperCase() ?? '';

  const deleteReview = async (item) => {
    await axios.delete(`api/reviews/${item._id}`).then(() => {
      fetchData();
    });
  };

  const forUpdateReview = (item) => {
    setUpdateReview(item);
  };

  const handleToggleModal = () => {
    setIsOpened(!isOpened);
  };

  return (
    <>
      {reviewsList &&
        reviewsList.map((item) => {
          return (
            <div key={item._id}>
              <div>
                <span>{firstLetter}</span>
                <div>
                  <p>{item.comment}</p>
                  <span>{item.rating}</span>
                </div>
              </div>
              <div>
                <button type="button" onClick={() => deleteReview(item)}>
                  <svg>
                    <use href={`${Icons}#icon-trash`}></use>
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    forUpdateReview(item);
                    handleToggleModal();
                  }}
                >
                  <svg>
                    <use href={`${Icons}#icon-edit`}></use>
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      {isOpened && (
        <FeedbackEdit
          close={handleToggleModal}
          toFetch={fetchData}
          updatedItem={updateReview}
        />
      )}
    </>
  );
};

export default FeedbackList;