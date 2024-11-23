export default class FavouritesCards {
	constructor(favsList) {
		this.favsList = favsList;
	}

	async getFavs() {
		const ids = this.favsList.toString(); // 1,3,5
		const queryString = `https://jsproject.webcademy.ru/items?ids=${ids}`;
        const result = await fetch(queryString);
        const data = await result.json();
        this.cards = await data;
        console.log("FavouritesCards -> getFavs -> this.cards", this.cards);
    }
}
