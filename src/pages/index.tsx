import { Inter } from "next/font/google";
import Header from "./components/header";
import Banner from "./components/banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
    </div>
  );
}
