import FeedCurso from "@/components/common/design-grafico/FeedCurso";
import FeedGrade from "@/components/common/design-grafico/FeedGrade";
import FeedPerfil from "@/components/common/design-grafico/FeedPerfil";
import FeedVideo from "@/components/common/design-grafico/FeedVideo";
import HeroCommon from "@/components/common/design-grafico/HeroCommon";


export default function Page() {
  return (
    <main className="mt-20">
      <HeroCommon
        title="Design Gráfico"
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
    "Design Gráfico | Unisal",
  description: "",
  keywords: [
    "Design Gráfico",
  ],
  alternates: {
    canonical: "cursos-unisal.vercel.app",
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
