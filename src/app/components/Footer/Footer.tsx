import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-200 py-12 px-12">
      <p className="text-xl font-bold text-violet-700 text-center">
        Ahead LOGO
      </p>
      <p className="text-xl font-bold text-violet-700 text-center">ahead</p>
      <div className="flex gap-8 items-center justify-center mt-5 font-semibold">
        <div className="">AugustraBe 26,10117 Berlin</div>
        <div className="">hi@ahead-app.com</div>
      </div>
      <div className="flex justify-center">
        <Image
          src="/appleStoreIcon.svg"
          alt="donwload app"
          width={200}
          height={200}
        />
      </div>
      <div className="text-center text-sm text-gray-500">
        &copy; Ahead App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
