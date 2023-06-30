import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { createPortal } from 'react-dom';
import { Modal } from 'components/TaskModal/Modal';
import FeedbackForm from './FeedbackForm/FeedbackForm';
import FeedbackList from './FeedbackList/FeedbackList';

const AddFeedbackModal = ({ close, isOpened }) => {
  const [reviews, setReviews] = useState([]);

  const fetchData = async () => {
    const response = await axios.get('api/reviews');
    setReviews(response.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isOpened
    ? createPortal(
        <Modal close={close}>
          <FeedbackForm fetchData={fetchData} />
          <FeedbackList reviews={reviews} fetchData={fetchData} />
        </Modal>,
        document.body
      )
    : null;
};

export default AddFeedbackModal;



