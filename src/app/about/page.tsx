import About from "./_components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: " I'm Frank. I've been working in web development for over 4 years, doing both the frontend and the backend. But what really gets me excited is making websites and apps that are easy for everyone to use and look good too!",
};

const AboutPage = () => {
  return (
    <About />
  )
}

export default AboutPage;