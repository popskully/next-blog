import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Format from "../layout/format";

//components
import Section1 from "../components/section1";
import Section2 from "../components/section2";
import Section3 from "../components/section3";
import Section4 from "../components/section4";

const Home: NextPage = () => {
  return (
    <Format>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
    </Format>
  );
};

export default Home;
