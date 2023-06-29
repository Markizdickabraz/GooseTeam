import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { createPortal } from 'react-dom';
// import { Rating } from 'react-simple-star-rating';
import { Modal } from '../../TaskModal/Modal';
import FeedbackForm from './FeedbackForm/FeedbackForm';
import FeedbackList from './FeedbackList/FeedbackList';

const AddFeedbackModal = ({ close, isOpened }) => {
    const [reviews, setReviews] = useState('');
    const [onModal, setOnModal] = useState(isOpened);

    const fetchData = async () => {
    const response = await axios.get(`https://goosetrack-backend-2lsp.onrender.com/api/reviews`);
    setReviews(response.data.data);
    };
    
    useEffect(() => {
    fetchData();
    }, []);
    
    return createPortal(
        <Modal close={close} >
            <FeedbackForm
                    fetchData={fetchData}
                    setOnModal={setOnModal}
                    close={close}/>
            <FeedbackList
                    fetchData={fetchData}
                    setReviewsList={reviews}
                    setOnModal={setOnModal}
                    onModal={onModal}
                    close={close}/>
        </Modal>,
        document.body
    )  
};

export default AddFeedbackModal;



