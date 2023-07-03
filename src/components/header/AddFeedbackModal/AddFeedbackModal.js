import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { createPortal } from 'react-dom';
import { Modal } from '../../TaskModal/Modal';
import FeedbackForm from './FeedbackForm/FeedbackForm';
import FeedbackList from './FeedbackList/FeedbackList';

const AddFeedbackModal = ({ close, isOpened }) => {

  const [reviews, setReviews] = useState({});
  const [onModal, setOnModal] = useState(isOpened);
  const [isLoading, setIsloading] = useState(false);

  const fetchData = async () => {
    const response = await axios.get(
      `https://goosetrack-backend-2lsp.onrender.com/api/reviews/id`
    );

    if (response.data.length === 1) {
      setReviews(response.data[0]);
    }
  };
  useEffect(() => {
    fetchData();
    setTimeout(() => {
      setIsloading(true);
    }, 700);
  }, []);

  return createPortal(
    isLoading && (
      <Modal close={close}>
        {Object.entries(reviews).length === 0 && (
          <FeedbackForm
            fetchData={fetchData}
            setOnModal={setOnModal}
            close={close}
          />
        )}

        {!(Object.entries(reviews).length === 0) && (
          <FeedbackList
            fetchData={fetchData}
            setReviewsList={reviews}
            setOnModal={setOnModal}
            onModal={onModal}
            close={close}
          />
        )}
      </Modal>
    ),
    document.body
  );
};

export default AddFeedbackModal;
