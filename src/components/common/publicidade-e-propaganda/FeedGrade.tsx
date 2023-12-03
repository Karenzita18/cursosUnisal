"use client";

import { useInView } from "react-intersection-observer";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import DownloadPP from "./DownloadPP";




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
              className={`font-bold text-publicidade-200 text-center ${
                inView && "animate-fade-down animate-delay-300"
              }`}
            >
              Curso
            </p>
            <h1
              className={`text-3xl sm:text-4xl font-bold text-publicidade-100 !leading-9 text-center  ${
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
                className={`max-w-xs bg-brand-150/5 backdrop-blur-sm py-5 px-5 flex flex-col justify-between shadow-md group hover:scale-[101%] transition duration-300 hover:-translate-y-1 border-b-4 border-publicidade-100 gap-y-3 hover:bg-publicidade-100/80 hover:border-white rounded-tl-[1.8rem] rounded-tr-sm rounded-br-[1.8rem] rounded-bl-sm cursor-pointer ${
                  inView &&
                  "animate-fade animate-duration-500 animate-delay-100"
                }`}
              >
                <div className="">
                  <h2
                    dangerouslySetInnerHTML={{ __html: item.title }}
                    className={`font-bold text-xl text-publicidade-100 group-hover:text-white mt-2`}
                  ></h2>
                  <p className="text-justify group-hover:text-white  ">
                    {item.excerpt}{" "}
                  </p>
                </div>
                <button
                  onClick={() =>
                    handleModal(item.title, item.desc, item.slug)
                  }
                  className="text-publicidade-100 font-bold group-hover:text-white group text-start tracking-wider text-sm"
                >
                </button>
              </div>
            ))}
          </div>
          <DownloadPP/>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-white/90 backdrop-blur-sm py-5 sm:py-8 px-5 flex flex-col justify-between shadow-md duration-300 border-b-4 border-publicidade-100 gap-y-2 rounded-tl-[1.8rem] rounded-tr-sm rounded-br-[1.8rem] rounded-bl-sm transition-all">
                  <Dialog.Title
                    as="h3"
                    className="font-bold text-2xl text-center text-publicidade-100 group-hover:text-white"
                    dangerouslySetInnerHTML={{ __html: modalTitle }}
                  />
                  <div className="">
                    <p className="text-justify mt-3 group-hover:text-white">
                      {modalContet}
                    </p>
                  </div>

                  <div className="relative">
                    <div
                      className={`absolute right-0 w-24 opacity-10 ml-auto text-publicidade-100 group-hover:text-white z-0 -bottom-5 sm:-bottom-8`}
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
    title: "Módulo 01",
    slug: "carga-fracionada",
    excerpt: "Fundamentos Teóricos e práticos; Teoria e Estética da Comunicação...",
    desc: "Fundamentos Teóricos e práticos; Teoria e Estética da Comunicação; Discurso Verbal e Não Verbal; Redação Publicitária.",
    size: "h-14 w-14",
  },
  {
    title: "Módulo 02",
    slug: "carga-lotacao",
    desc: "Cultura Imaginética na Publicidade e Propaganda; Design Publicitário; Fotografia.",
    excerpt: "Cultura Imaginética na Publicidade e Propaganda...",
    size: "h-14 w-14",
  },
  {
    title: "Módulo 03",
    slug: "crossdocking",
    desc: "Marketing; Gestão e Análises Mercadológicas; Empreendedorismo; Estratégias de Gestão; Inteligência de Mercado; Psicologia Organizacional; Responsabilidade Social e Corporativa.",
    excerpt: "Marketing; Gestão e Análises Mercadológicas... ",
    size: "h-14 w-14",
  },
  {
    title: "Módulo 04",
    slug: "carga-produtos-quimicos",
    desc: "Cultura Audiovisual na Publicidade e Propaganda; Produção Publicitária em Áudio e TV; Criação e Direção de Arte em Publicidade e Propaganda.",
    excerpt: "Cultura Audiovisual na Publicidade e Propaganda; Produção Publicitária em Áudio e TV...",
    size: "h-[3.6rem] w-[4.9rem] ",
  },
];