import React from "react";
import MessagesLoader from "../components/hoc/messagesLoader";
import MessagesList from "../components/page/messagesList";

const Messages = () => {
  return (
    <>
      <MessagesLoader>
        <MessagesList />
      </MessagesLoader>
    </>
  );
};

export default Messages;
