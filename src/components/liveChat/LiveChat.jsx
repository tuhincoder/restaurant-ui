import { useEffect } from "react";

const LiveChat = () => {
  useEffect(() => {
    // আপনার Crisp Website ID এখানে বসান
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "YOUR_CRISP_WEBSITE_ID_HERE";

    (function () {
      const d = document;
      const s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();

    // কম্পোনেন্ট আনমাউন্ট হলে চ্যাট উইজেট হাইড করার জন্য (ঐচ্ছিক)
    return () => {
      const script = document.querySelector(
        'script[src="https://client.crisp.chat/l.js"]'
      );
      if (script) script.remove();
    };
  }, []);

  return null; // এটি কোনো UI রেন্ডার করবে না, শুধু স্ক্রিপ্ট লোড করবে
};

export default LiveChat;
