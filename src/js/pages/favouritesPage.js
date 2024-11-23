import favouritesCards from './../favouritesCards/favouritesCardsController';

export default function () {
	document.querySelector('#app').innerHTML = '';
	favouritesCards(state);
}
