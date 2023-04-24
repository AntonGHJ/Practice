import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../utils/loader";
import Message from "./message";
import {
  getMessagesList,
  getMessagesLoadingStatus,
  removeMessage,
} from "../../store/messages";
const MessagesList = () => {
  const messages = useSelector(getMessagesList());
  const messagesLoadingStatus = useSelector(getMessagesLoadingStatus());
  const dispatch = useDispatch();
  return (
    <>
      <div className="carsList">
        <div className="carListHeader">Your messages from contact form</div>
        {messagesLoadingStatus || (!messages && <Loader />)}
        {messages.map((message, _id) => (
          <div key={_id} className="car-info">
            <table className="mb-5">
              <Message id={_id} message={message} />
              <div className="detLink">
                <div>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => dispatch(removeMessage(message._id))}
                  >
                    Delete message
                  </button>
                  <hr />
                </div>
              </div>
            </table>
            <br />
          </div>
        ))}
      </div>
    </>
  );
};

export default MessagesList;
