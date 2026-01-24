import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // ১. ব্রাউজারের অটো স্ক্রল রিস্টোরেশন পুরোপুরি বন্ধ করা
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // ২. রুট চেঞ্জ হওয়ার সাথে সাথে ইনস্ট্যান্ট টপে যাওয়া
    window.scrollTo(0, 0);

    // ৩. অনেক সময় রেন্ডারিং এর পর ব্রাউজার নিচে নামিয়ে দেয়, তাই ১০০ মিলি-সেকেন্ড পর আবার চেক করা
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant", // "smooth" এর বদলে "instant" ব্যবহার করা হয়েছে
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
