import { Link } from "react-router-dom";
import wa_logo from "../../src/assets/whatsapp.png";
const WhatsappChat = () => {
  return (
    <div>
      <div className="fixed bottom-4 right-5 z-10">
        <Link
          //Paste Page Link Here
          to="https://wa.me/+8801744424480"
          className="flex gap-2 items-center"
        >
          <p className="bg-gray-100 px-2 py-1 rounded-md">
            Need Help? <span className="font-semibold">Chat with us</span>
          </p>
          <img src={wa_logo} alt="Whatsapp logo" className="w-12 h-12" />
        </Link>
      </div>
    </div>
  );
};

export default WhatsappChat;
