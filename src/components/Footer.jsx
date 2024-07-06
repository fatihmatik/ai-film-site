import React from "react";
import reactsvg from "../assets/images/react.svg";
import gradiosvg from "../assets/images/gradio.svg";
import tailwindsvg from "../assets/images/tailwind.svg";
import hfsvg from "../assets/images/hf.svg";
const Footer = () => {
  return (
    <div className="text-white">
      <div className="flex flex-col mb-4 justify-center items-center py-12">
        <h1 className="text-red-600 text-3xl font-bold">About me</h1>
        <p className="font-medium">I'm Fatih, an aspiring web developer.</p>
        <p className="w-1/3 text-center py-2">
          This site is built with ReactJS and TailwindCSS on the front-end, and
          uses a recommendation machine learning model developed with Sci-Kit
          Learn, deployed on the HuggingFace platform via the Gradio App.
        </p>
        <div className="grid grid-cols-3 gap-6">
          <a
            href="https://github.com/fatihmatik"
            className="hover:-translate-y-1 transition ease-in-out 200ms text-red-600"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/tezcanfatih"
            className="hover:-translate-y-1 transition ease-in-out 200ms text-red-600"
          >
            LinkedIn
          </a>
          <a
            href="https://www.kaggle.com/fatihmatic"
            className="hover:-translate-y-1 transition ease-in-out 200ms text-red-600"
          >
            Kaggle
          </a>
        </div>
        <div className="flex justify-between gap-12 pt-4">
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:-translate-y-1 transition ease-in-out 200ms"
          >
            <img src={reactsvg} alt="React Logo" className="w-12 h-12" />
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:-translate-y-1 transition ease-in-out 200ms"
          >
            <img src={tailwindsvg} alt="tailwindsvg" className="w-12 h-12" />
          </a>
          <a
            href="https://www.gradio.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:-translate-y-1 transition ease-in-out 200ms"
          >
            <img src={gradiosvg} alt="gradiosvg" className="w-12 h-12" />
          </a>
          <a
            href="https://huggingface.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:-translate-y-1 transition ease-in-out 200ms"
          >
            <img src={hfsvg} alt="hfsvg" className="w-12 h-12" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
