import { contractAbi, contractAddress } from "./web3details";
import Web3 from "web3";
import Swal from "sweetalert2";

let gameRewardSystem = null;
let sender = null;

export const connect = (provider, _sender) => {
  const web3 = new Web3(provider);
  sender = _sender;
  gameRewardSystem = new web3.eth.Contract(contractAbi, contractAddress);
  console.log("Connected to Web3 provider");
};

export const sendReward = () => {
  gameRewardSystem.methods
    .sendReward(sender)
    .send({ from: sender }, (err, res) => {
      if (err) {
        console.error(err);
        Swal.fire("Oops, Error occurred 🥺", err, "error");
        console.log("Oops, Error occurred 🥺");
      } else {
        console.log(res);
        Swal.fire(
          "Transaction Completed",
          "The Transaction for 0.1ETH has completed successfully Please wait for some time to reflect in your wallet !",
          "success"
        );
        console.log("Money sent to you !");
      }
    });
};
