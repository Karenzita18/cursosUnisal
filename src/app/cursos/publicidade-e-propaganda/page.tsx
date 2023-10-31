import FeedPerfil from "@/components/common/AudioVisual/FeedPerfil";
import FeedCurso from "@/components/common/publicidade-e-propaganda/FeedCurso";
import FeedGrade from "@/components/common/publicidade-e-propaganda/FeedGrade";
import FeedVideo from "@/components/common/publicidade-e-propaganda/FeedVideo";
import HeroCommon from "@/components/common/publicidade-e-propaganda/HeroCommon";


export default function Page() {
  return (
    <main className="mt-20">
      <HeroCommon
        title="Publicidade e Propaganda"
        desc="Unisal 2023"
      />
      <FeedCurso/>
      <FeedPerfil/>
      <FeedGrade/>
      <FeedVideo/>
    </main>
  );
}

export const metadata = {
  title:
    "Publicidade e Propaganda | Unisal",
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
