import Filter from "./filterModel";
import * as view from "./filterView";

export default async function (state) {
  if (!state.filter) state.filter = new Filter();

  await state.filter.getParams();

  view.render(state.filter.params);

  await state.filter.getResults();
  state.results = state.filter.result;

  view.changeButtonText(state.filter.result.length);

  const form = document.querySelector("#filter-form");

  form.addEventListener("change", async function (e) {
    e.preventDefault();
    state.filter.query = view.getInput();
    await state.filter.getResults();
    state.results = state.filter.result;
    view.changeButtonText(state.filter.result.length);
  });

  form.addEventListener("reset", async function () {
    state.filter.query = "";
    await state.filter.getResults();
    state.results = state.filter.result;
    view.changeButtonText(state.filter.result.length);
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("SUBMIT!!!!!");
    state.emitter.emit("event:render-listing", {});
  });
}
