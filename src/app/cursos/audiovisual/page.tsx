import FeedCurso from "@/components/common/AudioVisual/FeedCurso";
import FeedFaq from "@/components/common/AudioVisual/FeedFaq";
import FeedPerfil from "@/components/common/AudioVisual/FeedPerfil";
import FeedValores from "@/components/common/AudioVisual/FeedValores";
import FeedVideo from "@/components/common/AudioVisual/FeedVideo";
import HeroCommon from "@/components/common/AudioVisual/HeroCommon";
import FeedGrade from "@/components/common/AudioVisual/FeedGrade";


export default function Page() {
  return (
    <main className="mt-20">
      <HeroCommon
        title="Audiovisual"
        desc="Unisal 2023"
      />
      <FeedCurso/>
      <FeedPerfil/>
      <FeedGrade/>
      <FeedValores/>
      <FeedFaq/>
      <FeedVideo/>
    </main>
  );
}

export const metadata = {
  title:
    "AudioVisual | Unisal",
  description: "",
  keywords: [
    "Transportadora Sanjefer",
    "Guarulhos frete",
    "Serviço de crossdocking",
    "Carga fracionada",
    "Carga lotação",
    "Carga de produtos químicos",
    "Transporte de produtos químicos",
    "Logística de frete",
    "Soluções logísticas em Guarulhos",
    "Distribuição de carga",
    "Transporte de mercadorias",
    "Serviço de transporte especializado",
    "Armazenagem e distribuição",
    "Logística eficiente em Guarulhos",
    "Transporte de cargas diversas",
    "Logística integrada",
    "Transporte seguro de produtos químicos",
    "Agilidade no transporte de cargas",
    "Pontualidade na entrega",
    "Equipe de profissionais qualificados",
  ],
  alternates: {
    canonical: "sanjefer.com",
    languages: {
      "pt-BR": "/pt-BR",
    },
  },
  // openGraph: {
  // 	images: [
  // 		{
  // 			url: "",
  // 			width: 2048,
  // 			height: 449,
  // 		},
  // 	],
  // },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/img/favicon.png",
    shortcut: "/img/favicon.png",
    apple: "/img/favicon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/img/favicon.png",
    },
  },
};
