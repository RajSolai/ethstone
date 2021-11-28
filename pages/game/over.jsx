import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { connect, sendReward } from "../../services/web3util";

export default function GameOverPage({ score }) {
  useEffect(() => {
    if (score >= 7) {
      const provider = window.ethereum;
      if (typeof provider != "undefined") {
        provider.request({ method: "eth_requestAccounts" }).then((acc) => {
          const sender = acc[0];
          connect(provider, sender);
          sendReward();
        });
      } else {
        Swal.fire(
          "No Wallets Found",
          "Hey It seems you haven't installed Metamask extension",
          "warning"
        );
      }
    }
  }, []);

  return (
    <div className="flex mt-10 flex-col p-1 justify-center items-center">
      <h1 className="font-bold text-6xl">Game Over</h1> <br />
      <p>You need to score minimum 7/10 You scored {score}/10</p>
      <>
        {score >= 7 ? (
          <>
            <p>Congrats You Won, You will be awarded with 0.1 ETH </p> <br />
            <p>Now you will be asked for a transaction fee in metamask.</p>{" "}
            <br />
            <p>
              <em>
                Please Note, The ETH Sent is just Ropster Test ETH <br /> and
                contains no real value.
              </em>
            </p>
          </>
        ) : (
          <p>Better luck next time :)</p>
        )}{" "}
      </>
      <button
        onClick={() => {
          window.location.reload();
        }}
        className="pl-8 pr-8 pt-2 pb-2 mt-10 bg-purple-500 shadow-md font-bold text-white rounded-lg"
      >
        Retry
      </button>
    </div>
  );
}
