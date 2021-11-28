import { useRouter } from "next/router";
import Head from "next/head";

export default function () {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>EthStone - Stone, Paper, Scissors on Blockchain !</title>
      </Head>
      <main className="text-center mt-40">
        <h1 className="text-7xl font-bold m-2 text-white">Eth Stone</h1>
        <button
          onClick={() => router.push("/game")}
          className="pl-8 pr-8 pt-2 pb-2 m-1 bg-purple-500 shadow-md font-bold text-white rounded-lg"
        >
          Start
        </button>
      </main>
    </>
  );
}
