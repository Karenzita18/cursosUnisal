import Image from "next/image";
import Faq from "../Faq";

const FeedFaq = () => {
  return (
    <section id="faq">
      <div className="row relative">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <img
                  src="https://via.placeholder.com/400x400"
                  alt="Foto PP"
                  className="rounded-md shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
            <div className="lg:col-span-3 py-10 md:py-16 px-5 ml:pr-0 lg:pl-10 lg:bg-white">
                {" "}
                <Faq />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedFaq;
