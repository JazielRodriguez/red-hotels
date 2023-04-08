import type { NextPage } from "next";
import Cover from "../components/Cover";
import Header from "../components/Header";
const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Cover />
    </div>
  );
};

export default Home;
