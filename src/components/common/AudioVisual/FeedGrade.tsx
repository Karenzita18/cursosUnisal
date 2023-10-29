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
          <div className="grid max-w-xs mx-auto sm:max-w-full sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-5">
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
          <div
            className={`hover:-translate-y-2 transition duration-500 mt-5 ${
              inView && "animate-fade-up animate-delay-200 animate-duration-500"
            } flex items-center justify-center`}
          >
            <Link
              href="/"
              className="border border-brand-100 text-brand-100 px-5 py-2 font-semibold hover:bg-brand-100 rounded-full hover:text-white transition duration-500 mx-auto text-center"
            >
              Saiba Mais
            </Link>
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
    title: "Módulo 01",
    slug: "carga-fracionada",
    desc: "Teória e Estética a comunicação, Discurso Verbal e Não Verdal, Redação Publicitária e em Design Gráfico, Relações entre Arte e comunicação e Formação Geral",
    excerpt: "Fundamentos teóricos e práticos (Módulo comum a Publicidade e Propaganda e Produção Audiovisual e Multimídia).",
    size: "h-14 w-14",
  },
  {
    title: "Módulo 02",
    slug: "carga-lotacao",
    desc: "Liguagem de Rádio, TV, Internet e Cinema. Leitura e Produção de texto e Matemática, Inteligência Artificial e Machine Learning e Conforme trilhas institucionais - Eletiva",
    excerpt: "Linguagens e Técnicas Audiovisuais",
    size: "h-14 w-14",
  },
  {
    title: "Módulo 03",
    slug: "crossdocking",
    desc: "Marketing, Empreendedorismo e Gestão, Estratégiais de Gestçao e Inteligência de Mercado, Logística Reversa e Sustentabilidade. Empreendedorismo. Psicologia Organizacional, Responsabilidade Social e Corporativa, Direito Ambiental, Conforme Regulamento Institucional e Específico do Curso.",
    excerpt: "Marketing, Gestão e Análises Mercadológicas (Módulo Comum e Publicidade e Propaganda)",
    size: "h-14 w-14",
  },
  {
    title: "Módulo 04",
    slug: "carga-produtos-quimicos",
    desc: "WebDesign, Experiência do Usuário, Produção Audiovisual para internet e Mobile, Realidade Virtual e Aumentada, Logística Reversa e Sustentabilidade, Empreendedorismo, Psicologia Organizacional, Responsabilidade Social e Corporativa, Direito Ambiental, Coforme trilhas institucionais - Eletiva, Conforme Regulamento Institucional e Específico do Curso.",
    excerpt: "Linguagens Multimídia e Inovação Tecnológica",
    size: "h-[3.6rem] w-[4.9rem] ",
  },
];