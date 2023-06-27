// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { createPortal } from 'react-dom';
// import { Rating } from 'react-simple-star-rating';
// import { Modal } from '../../../TaskModal/utility/Modal';
// import FeedbackForm from './FeedbackForm/FeedbackForm';
// import FeedbackList from './FeedbackList/FeedbackList';

// const AddFeedbackModal = ({ close, isOpened }) => {
//     const [reviews, setReviews] = useState('');
//     const [onModal, setOnModal] = useState(isOpened);

//     const fetchData = async () => {
//     const response = await axios.get(`api/reviews`);
//     setReviews(response.data.data);
//     };
    
//     useEffect(() => {
//     fetchData();
//     }, []);
    
//     return createPortal (
//         <Modal close={close} isOpened={isOpened} onSubmitModal={onModal}>
//             <FeedbackForm
//                     fetchData={fetchData}
//                     setOnModal={setOnModal}
//                     close={close}/>
//             <FeedbackList
//                     fetchData={fetchData}
//                     setReviewsList={reviews}
//                     setOnModal={setOnModal}
//                     onModal={onModal}
//                     close={close}/>
//         </Modal>
//     )  
// };

// export default AddFeedbackModal;



