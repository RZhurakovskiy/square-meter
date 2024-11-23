import * as view from "./listingView";

export default function (state) {
  console.log("Component Listing started!");

  view.render();

  state.results.forEach(function (item) {
    view.renderCard(item, state.favourites.isFav(item.id));
  });

  addToFavsListener();

  state.emitter.subscribe("event:render-listing", () => {
    view.clearListingContainer();

    state.results.forEach(function (item) {
      view.renderCard(item, state.favourites.isFav(item.id));
    });

    addToFavsListener();
  });

  function addToFavsListener() {
    Array.from(document.getElementsByClassName("card__like")).forEach(
      (item) => {
        item.addEventListener("click", (e) => {
          e.preventDefault();

          const currentId = e.target.closest(".card").dataset.id;

          state.favourites.toggleFav(currentId);

          view.toggleFavouriteIcon(
            e.target.closest(".card__like"),
            state.favourites.isFav(currentId),
          );
        });
      },
    );
  }
}
