import { useEffect, useRef } from "react";

function MessengerChat() {
  const MessengerRef = useRef();

  useEffect(() => {
    // Set attributes for Messenger Chat
    MessengerRef.current.setAttribute("page_id", "101261925336664");
    MessengerRef.current.setAttribute("attribution", "biz_inbox");

    // Initialize the Facebook SDK when it is ready
    window.fbAsyncInit = function () {
      if (window.FB) {
        window.FB.init({
          appId: "1196263888185302",
          xfbml: true,
          version: "v17.0",
        });
      }
    };

    // Dynamically load Facebook SDK script
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");

    // Clean up script if needed
    return () => {
      const fbRoot = document.getElementById("fb-root");
      const fbScript = document.getElementById("facebook-jssdk");
      if (fbRoot) fbRoot.remove();
      if (fbScript) fbScript.remove();
    };
  }, []);

  return (
    <div>
      <div id="fb-root"></div>
      <div
        ref={MessengerRef}
        id="fb-customer-chat"
        className="fb-customerchat"
      ></div>
    </div>
  );
}

export default MessengerChat;
