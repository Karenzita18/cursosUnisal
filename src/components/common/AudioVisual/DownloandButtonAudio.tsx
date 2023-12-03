import React from 'react';
import { useInView } from "react-intersection-observer";

const DownloadButtonAudio = () => {
  const { ref, inView, entry } = useInView();
  const handleDownload = () => {
    const pdfFilePath = '/img/pdf/grade-curricular-audiovisual-e-multimidia.pdf';
    const link = document.createElement('a');
    link.href = pdfFilePath;
    link.download = 'grade-curricular-audiovisual-e-multimidia.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`hover:-translate-y-2 transition duration-500 mt-5 ${
        inView && "animate-fade-up animate-delay-200 animate-duration-500"
      } flex items-center justify-center`}
    >
      <button
        className="border border-audiovisual-300 text-audiovisual-300 px-5 py-2 font-semibold hover:bg-audiovisual-300 rounded-full hover:text-white transition duration-500 mx-auto text-center"
        onClick={handleDownload}
      >
        Baixar PDF
      </button>
    </div>
  );
};

export default DownloadButtonAudio;
