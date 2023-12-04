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
        title="Audiovisual e Multimídia"
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
    "AudioVisual e MultiMídia | Unisal",
  description: "",
  keywords: [
    "Audiovisual e Multimídia",

  ],
  alternates: {
    canonical: "cursos-unisal.vercel-app",
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
