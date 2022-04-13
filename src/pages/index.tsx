import { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import { SideBar } from '../components/sidebar';
import { Center } from '../components/center';
import { getSession } from 'next-auth/react';
import { Player } from '../components/player';

const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify 2.0</title>
      </Head>

      <main className="flex">
        <SideBar />
        <Center />
      </main>
      <div className="sticky bottom-0">
        <Player />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};

export default Home;
