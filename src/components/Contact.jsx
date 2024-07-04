import React from "react";

const Contact = () => {
  return (
    <div className="text-white p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p>
        Have questions? Want to get in touch? You can contact me by{" "}
        <a
          href="mailto:fatih.tezcan00@gmail.com"
          className="text-red-600 font-semibold"
        >
          fatih.tezcan00@gmail.com
        </a>
      </p>
      <div className="w-full h-[2px] bg-red-600 mx-auto my-4"></div>
      <p>
        Also you can view my: {""}
        <a
          href="https://fatihmatik.github.io/portfoglio-react/"
          className="text-red-600 font-bold"
        >
          Portfolio Site
        </a>
      </p>
    </div>
  );
};

export default Contact;
