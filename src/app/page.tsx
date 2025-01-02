import HeroSection from "./components/HeroSection";
import RecentBlogPost from "./components/RecentBlog";
export default function Home() {
  return (
    <div className="bg-purple-100 min-h-screen">
      <HeroSection/>
      <RecentBlogPost/>
    </div>
  );
}
