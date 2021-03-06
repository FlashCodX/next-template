import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

const Home: NextPage = () => {
  const { container } = styles;
  return (
    <div className={container}>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>Content Here</main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  // ...
};

export const getStaticPaths: GetStaticPaths = async () => {
  // ...
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // ...
};
