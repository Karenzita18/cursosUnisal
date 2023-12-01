"use client";

import { useInView } from "react-intersection-observer";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import DownloadButton from "./DownloadButton";

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
              className={`font-bold text-designgrafico-200 text-center ${
                inView && "animate-fade-down animate-delay-300"
              }`}
            >
              Curso
            </p>
            <h1
              className={`text-3xl sm:text-4xl font-bold text-designgrafico-300 !leading-9 text-center  ${
                inView && "animate-fade-down "
              }`}
            >
              Conheça nossos curso
            </h1>
          </div>
          <div className="grid max-w-xs mx-auto sm:max-w-full sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-5">
            {services.map((item) => (
              <div
                onClick={() =>
                  handleModal(item.title, item.desc, item.slug)
                }
                key={item.title}
                className={`max-w-xs bg-brand-150/5 backdrop-blur-sm py-5 px-5 flex flex-col justify-between shadow-md group hover:scale-[101%] transition duration-300 hover:-translate-y-1 border-b-4 border-designgrafico-300 gap-y-3 hover:bg-designgrafico-300/50 hover:border-white rounded-tl-[1.8rem] rounded-tr-sm rounded-br-[1.8rem] rounded-bl-sm cursor-pointer ${
                  inView &&
                  "animate-fade animate-duration-500 animate-delay-100"
                }`}
              >
                <div className="">
                  <h2
                    dangerouslySetInnerHTML={{ __html: item.title }}
                    className={`font-bold text-xl text-designgrafico-300 group-hover:text-white mt-2`}
                  ></h2>
                  <p className="text-justify group-hover:text-white  ">
                    {item.excerpt}{" "}
                  </p>
                </div>
                <button
                  onClick={() =>
                    handleModal(item.title, item.desc, item.slug)
                  }
                  className="text-designgrafico-300 font-bold group-hover:text-white group text-start tracking-wider text-sm"
                >
                </button>
              </div>
            ))}
          </div>
          <DownloadButton/>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-white/90 backdrop-blur-sm py-5 sm:py-8 px-5 flex flex-col justify-between shadow-md duration-300 border-b-4 border-designgrafico-300 gap-y-2 rounded-tl-[1.8rem] rounded-tr-sm rounded-br-[1.8rem] rounded-bl-sm transition-all">
                  <Dialog.Title
                    as="h3"
                    className="font-bold text-2xl text-center text-designgrafico-300 group-hover:text-white"
                    dangerouslySetInnerHTML={{ __html: modalTitle }}
                  />
                  <div className="">
                    <p className="text-justify mt-3 group-hover:text-white">
                      {modalContet}
                    </p>
                  </div>

                  <div className="relative">
                    <div
                      className={`absolute right-0 w-24 opacity-10 ml-auto text-designgrafico-300 group-hover:text-white z-0 -bottom-5 sm:-bottom-8`}
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
    title: "Módulo 01 - Fundamentos teóricos e práticos",
    slug: "carga-fracionada",
    desc: "Fundamentos teóricos e práticos, Projeto Integrador/Projeto de Vida I e Projeto Integrador - Extensão I",
    excerpt: "Fundamentos teóricos e práticos, Projeto Integrador/Projeto de Vida I...",
    size: "h-14 w-14",
  },
  {
    title: "Módulo 02 - Cultura Imagética",
    slug: "carga-lotacao",
    desc: "Cultura Imagética na Publicidade e Propaganda, Projeto Integrador/Projeto de Vida II, Projeto Integrador - Extensão II e Trilhas eletivas",
    excerpt: "Cultura Imagética na Publicidade e Propaganda, Projeto Integrador/Projeto de Vida II...",
    size: "h-14 w-14",
  },
  {
    title: "Módulo 03 - Design gráfico",
    slug: "crossdocking",
    desc: "Funcionalidade e linguagens em design, Projeto Integrador/Projeto de Vida III, Projeto Integrador - Extensão III e Estágio Supervisionado",
    excerpt: "Funcionalidade e linguagens em design..",
    size: "h-14 w-14",
  },
  {
    title: "Módulo 04 - Inovação e Projetos empreendedores em Design",
    slug: "carga-produtos-quimicos",
    desc: "Design, prototipagem e novas tecnologias, Projeto Integrador/Projeto de Vida IV, Projeto Integrador - Extensão IV, Trilhas eletivas e Estágio Supervisionado.",
    excerpt: "Design, prototipagem e novas tecnologias, Projeto Integrador/Projeto de Vida IV...",
    size: "h-[3.6rem] w-[4.9rem] ",
  },
];