"use client";

import { useInView } from "react-intersection-observer";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const FeedServices = () => {
  const { ref, inView, entry } = useInView();
  let [isOpen, setIsOpen] = useState(false);
  const [modalContet, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalSlug, setModalSlug] = useState("");
  const [modalIcon, setModalIcon] = useState<React.ReactElement>();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleModal = (
    title: string,
    desc: string,
    slug: string,
  ) => {
    openModal();
    setModalTitle(title);
    setModalContent(desc);
    setModalSlug(slug);
  };

  return (
    <section ref={ref} className="relative overflow-hidden" >
      <div className="row relative">
        <div className="container">
          <div className="mb-5">
            <p
              className={`sectionSubTitle text-center ${
                inView && "animate-fade-down animate-delay-300"
              }`}
            >
              Curso
            </p>
            <h1
              className={`text-3xl sm:text-4xl font-bold text-brand-100 !leading-9 text-center  ${
                inView && "animate-fade-down "
              }`}
            >
              Conheça nossos curso
            </h1>
          </div>
          <div className="grid max-w-xs mx-auto sm:max-w-full sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5">
            {services.map((item) => (
              <div
                onClick={() =>
                  handleModal(item.title, item.desc, item.slug)
                }
                key={item.title}
                className={`max-w-xs bg-brand-150/5 backdrop-blur-sm py-5 px-5 flex flex-col justify-between shadow-md group hover:scale-[101%] transition duration-300 hover:-translate-y-1 border-b-4 border-brand-150 gap-y-3 hover:bg-brand-150 hover:border-white rounded-tl-[1.8rem] rounded-tr-sm rounded-br-[1.8rem] rounded-bl-sm cursor-pointer ${
                  inView &&
                  "animate-fade animate-duration-500 animate-delay-100"
                }`}
              >
                <div className="">
                  <h2
                    dangerouslySetInnerHTML={{ __html: item.title }}
                    className={`font-bold text-xl text-brand-150 group-hover:text-white mt-2`}
                  ></h2>
                  <p className="text-justify group-hover:text-white  ">
                    {item.excerpt}{" "}
                  </p>
                </div>
                <button
                  onClick={() =>
                    handleModal(item.title, item.desc, item.slug)
                  }
                  className="text-brand-150 font-bold group-hover:text-white group text-start tracking-wider text-sm"
                >
                  Ler Mais{" "}
                  <span className="inline-block -mb-[2px] group-hover:translate-x-2 transition duration-700">
                    <FaAngleRight />
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-white/90 backdrop-blur-sm py-5 sm:py-8 px-5 flex flex-col justify-between shadow-md duration-300 border-b-4 border-brand-150 gap-y-2 rounded-tl-[1.8rem] rounded-tr-sm rounded-br-[1.8rem] rounded-bl-sm transition-all">
                  <Dialog.Title
                    as="h3"
                    className="font-bold text-2xl text-center text-brand-150 group-hover:text-white"
                    dangerouslySetInnerHTML={{ __html: modalTitle }}
                  />
                  <div className="">
                    <p className="text-justify mt-3 group-hover:text-white">
                      {modalContet}
                    </p>
                  </div>

                  <div className="relative">
                    <div
                      className={`absolute right-0 w-24 opacity-10 ml-auto text-brand-150 group-hover:text-white z-0 -bottom-5 sm:-bottom-8`}
                    >
                      {modalIcon}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};

export default FeedServices;
const services = [
  {
    title: "Publicidade e Propaganda",
    slug: "carga-lotacao",
    desc: "Curso bacharelado de Comunicação Social com habilitação em Publicidade e Propaganda tem como foco formar profissionais estrategistas e participantes dos objetivos intitucionais, empresariais e mercadológicos.",
    excerpt: "Curso bacharelado de Comunicação Social com habilitação em Publicidade e Propaganda...",
    size: "h-14 w-14",
  },
  {
    title: "AudioVisual e Multimídia",
    slug: "audiovisual",
    desc:  "Curso superior de Tecnologia em Produção Audiovisual e Multimídia foi elaborado para lhe propor uma visão ampla e objetiva das mais novas atualizações do mundo digital e da comunicação no audiovisual.",
    excerpt:  "Curso superior de Tecnologia em Produção Audiovisual e Multimídia foi elaborado para lhe propor uma visão ampla e objetiva...",
    size: "h-14 w-14",
  },
  {
    title: "Design Gráfico",
    slug: "crossdocking",
    desc: "O curso de Design Gráfico é uma formação que capacita os estudantes a criarem projetos de comunicação visual impactantes e funcionais. O curso possui uma grade curricular ampla, incluindo fundamentos teóricos e práticos.",
    excerpt:  "O curso de Design Gráfico é uma formação que capacita os estudantes a criarem projetos de comunicação visual impactantes e funcionais.....",
    size: "h-14 w-14",
  },
];