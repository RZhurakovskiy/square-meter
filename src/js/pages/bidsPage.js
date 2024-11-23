import bids from "./../bids/bidsController.js";

export default function (state) {
  document.querySelector("#app").innerHTML = "";

  bids(state);
}
