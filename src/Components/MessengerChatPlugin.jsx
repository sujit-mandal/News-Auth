import MessengerCustomerChat from "react-messenger-customer-chat";

const MessengerChatPlugin = ({ appId, pageId }) => {
  return <MessengerCustomerChat pageId={pageId} appId={appId} />;
};

export default MessengerChatPlugin;
