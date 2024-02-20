import { HeroParallax } from "@/components/ui/hero-parallax";
import { LampDemo } from "@/components/ui/lamp";

export default function Home() {

  const productData = [
    {
      title: "UI",
      link: "https://www.google.com/",
      thumbnail: "/assets/img1.jpg"
    },
    {
      title: "UI",
      link: "https://www.google.com/",
      thumbnail: "/assets/img1.jpg"
    },
    {
      title: "UI",
      link: "https://www.google.com/",
      thumbnail: "/assets/img1.jpg"
    },
    {
      title: "UI",
      link: "https://www.google.com/",
      thumbnail: "/assets/img1.jpg"
    },
    {
      title: "UI",
      link: "https://www.google.com/",
      thumbnail: "/assets/img1.jpg"
    },
    {
      title: "UI",
      link: "https://www.google.com/",
      thumbnail: "/assets/img1.jpg"
    },
    {
      title: "UI",
      link: "https://www.google.com/",
      thumbnail: "/assets/img1.jpg"
    }
  ]

  return (
    <main>
      {/* <HeroParallax products={productData} /> */}

      <LampDemo />
    </main>
  );
}
