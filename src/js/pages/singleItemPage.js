import singleItem from "./../singleItem/singleItemContoller";

export default function (state) {
  document.querySelector("#app").innerHTML = "";

  singleItem(state);
}
