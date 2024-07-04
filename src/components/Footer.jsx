import React from "react";

const Footer = () => {
  return (
    <div className="text-white ">
      <div className="w-1/2 h-[2px] bg-red-600 mx-auto mt-4"></div>

      <div className="flex flex-col mb-4 justify-center items-center py-12">
        <h1 className="text-red-600 text-3xl font-bold">About me</h1>
        <p className="font-medium">I'm Fatih, an aspiring web developer.</p>
        <p className="w-1/3 text-center py-2">
          This site is built with ReactJS and TailwindCSS on the front-end,
          Django in the back-end, uses a reccomendation machine learning
          algorithm developed with Sci-Kit Learn.
        </p>
        <div className="grid grid-cols-3 gap-6">
          <a
            href="https://github.com/fatihmatik"
            className="hover:-translate-y-1 transition ease-in-out 200ms"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/tezcanfatih"
            className="hover:-translate-y-1 transition ease-in-out 200ms"
          >
            LinkedIn
          </a>
          <a
            href="https://www.kaggle.com/fatihmatic"
            className="hover:-translate-y-1 transition ease-in-out 200ms"
          >
            Kaggle
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
