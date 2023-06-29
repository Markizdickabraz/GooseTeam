import React, { useState } from 'react';
import axios from 'axios';
import { Rating } from 'react-simple-star-rating';

import FeedbackEdit from '../FeedbackEdit/FeedbackEdit';

import Icons from '../../../../images/svg/sprite.svg';

const FeedbackList = ({fetchData, setReviewsList, onModal, setOnModal}) => {
    const [updateReview, setUpdateReview] = useState('');
    const [isOpened, setIsOpened] = useState(false);

    const deleteReview = async (item) => {
    await axios.delete(`https://goosetrack-backend-2lsp.onrender.com/api/reviews/${item._id}`).then(() => {
      fetchData();
    });
    };

    const forUpdateRaview = (item) => {
    setUpdateReview(item);
    };

    const handleToggleModal = () => {
    setIsOpened(!isOpened);
    };
    
    return (
      <div>
        
        {setReviewsList && setReviewsList.map((item, index) => {
              return (
                <div key={index}> 
                <div>
                <button
                    type="button"
                    onClick={() => {
                      forUpdateRaview(item);
                      handleToggleModal();
                    }}>
                    <svg width="16" height="16"><use href={`${Icons}#pencil`}/></svg>
                </button>
                <button type="button" onClick={() => deleteReview(item)}>
                    <svg width="16" height="16"><use href={`${Icons}#trash`}/></svg>
                </button>
            </div>

            <div>
                {/* <p>{item.owner.name}</p> */}

            <Rating
              initialValue={item.rating}
              iconsCount={5}
              transition={true}
              size={24}
            />
                <p>{item.comment}</p>
            </div>
            </div>

              )
            }
          )}

        {isOpened && (
        <FeedbackEdit
          toFetch={fetchData}
          updateItem={updateReview}
          onCloseModal={handleToggleModal}
          isOpened={isOpened}
          onModal={onModal}
          setOnModal={setOnModal}
        />
      )}
        </div>
    )
};

export default FeedbackList;
