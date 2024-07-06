import React from "react";
import reactsvg from "../assets/images/react.svg";
import gradiosvg from "../assets/images/gradio.svg";
import tailwindsvg from "../assets/images/tailwind.svg";
import hfsvg from "../assets/images/hf.svg";

const Footer = () => {
  return (
    <div className="bg-black text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-red-600 text-2xl md:text-3xl font-bold mb-2">
            About Me
          </h1>
          <p className="font-medium mb-4">
            I'm Fatih, an aspiring web developer.
          </p>
          <p className="text-center text-sm md:text-base mx-auto max-w-2xl">
            This site is built with ReactJS and TailwindCSS on the front-end,
            and uses a recommendation machine learning model developed with
            Sci-Kit Learn, deployed on the HuggingFace platform via the Gradio
            App.
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 md:flex-row justify-center md:gap-6 mb-8">
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

        <div className="flex flex-wrap justify-center gap-8">
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:-translate-y-1 transition ease-in-out 200ms"
          >
            <img
              src={reactsvg}
              alt="React Logo"
              className="w-10 h-10 md:w-12 md:h-12"
            />
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:-translate-y-1 transition ease-in-out 200ms"
          >
            <img
              src={tailwindsvg}
              alt="TailwindCSS Logo"
              className="w-10 h-10 md:w-12 md:h-12"
            />
          </a>
          <a
            href="https://www.gradio.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:-translate-y-1 transition ease-in-out 200ms"
          >
            <img
              src={gradiosvg}
              alt="Gradio Logo"
              className="w-10 h-10 md:w-12 md:h-12"
            />
          </a>
          <a
            href="https://huggingface.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:-translate-y-1 transition ease-in-out 200ms"
          >
            <img
              src={hfsvg}
              alt="HuggingFace Logo"
              className="w-10 h-10 md:w-12 md:h-12"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
