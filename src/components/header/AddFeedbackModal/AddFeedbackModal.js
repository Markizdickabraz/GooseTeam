import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { Rating } from 'react-simple-star-rating';
// import { TaskModal } from '../../../TaskModal/utility/TaskModal';
import FeedbackForm from './FeedbackForm/FeedbackForm';
import FeedbackList from './FeedbackList/FeedbackList';

const AddFeedbackModal = ({ close }) => {
    const [reviews, setReviews] = useState('');
    const [onModal, setOnModal] = useState(isOpened);

    const fetchData = async () => {
    const response = await axios.get(`api/reviews/user`);
    setReviews(response.data.data);
    };
    
    useEffect(() => {
    fetchData();
    }, []);
    
    return (
        <TaskModal close={close}>
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
        </TaskModal>
    )  
};

export default AddFeedbackModal;



