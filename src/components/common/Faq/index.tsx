"use client";

import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const FaqsCard = (props: any) => {
  const answerElRef: any = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;
  const { ref, inView, entry } = useInView();
  const handleOpenAnswer = () => {
    var answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <button
      className="mt-5 overflow-hidden bg-zinc-100 rounded w-full"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer flex items-center justify-between sm:text-lg py-3 px-5 text-brand-100 font-medium text-start">
        {faqsList.q}
        {state ? (
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 sm:h-5 w-4 sm:w-5 text-brand-100 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 12H4"
              />
            </svg>
          </span>
        ) : (
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 sm:h-5 w-4 sm:w-5 text-brand-100 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </span>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300 px-5"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p
            className="text-brand-100/90 tracking-wide text-start faqAnswer"
            dangerouslySetInnerHTML={{ __html: faqsList.a }}
          ></p>
        </div>
      </div>
    </button>
  );
};

const Faq = () => {
  const questions = [
    {
      animate: "100",
      q: "What is Lorem Ipsum? ",
      a: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      animate: "200",
      q: "What is Lorem Ipsum? ",
      a: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      animate: "300",
      q: "What is Lorem Ipsum? ",
      a: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      animate: "500",
      q: "What is Lorem Ipsum? ",
      a: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      animate: "500",
      q: "What is Lorem Ipsum? ",
      a: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  const { ref, inView, entry } = useInView();

  return (
    <div ref={ref}>
      <div className="">
        <h1
          className={`sectionSubTitle ${
            inView && "animate-fade-down animate-delay-100"
          }`}
        >
          FAQ
        </h1>
        <p className={`sectionTitle ${inView && "animate-fade-down"}`}>
          Perguntas Frequentes
        </p>
      </div>
      <div className="  mx-auto">
        {questions.map((item, idx) => (
          <div
            key={idx}
            className={
              inView ? `animate-fade-left animate-duration-${item.animate}` : ""
            }
          >
            <FaqsCard idx={idx} faqsList={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
