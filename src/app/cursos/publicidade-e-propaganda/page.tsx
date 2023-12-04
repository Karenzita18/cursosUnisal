import FeedPerfil from "@/components/common/publicidade-e-propaganda/FeedPerfil";
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
    "Publicidade e propaganda",
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
