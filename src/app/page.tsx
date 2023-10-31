import FeedCurso from "@/components/common/Feed/FeedCurso";
import FeedFaq from "@/components/common/Feed/FeedFaq";
import FeedGrade from "@/components/common/Feed/FeedGrade";
import FeedVideo from "@/components/common/Feed/FeedVideo";
import HeroHome from "@/components/common/Hero/Home";
import FeedPerfil from "@/components/common/Feed/FeedPerfil";
import FeedValores from "@/components/common/Feed/FeedValores";

export default function Home() {
  return (
    <main>
      <HeroHome />
      <FeedCurso />
      <FeedGrade />
    </main>
  );
}
