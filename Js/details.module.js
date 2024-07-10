import { DisplayData } from "./ui.module.js";
export class Detaills {
  constructor(gameId) {
    this.gameDetails(gameId);
  }
  async gameDetails(gameId) {
    $("#home").hide(0);
    $("#detalis").show(0);
    $(".section-title").show(0);
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "dce11eba9dmsh4e8f1ae5af44daep123dd6jsncc6a6ddaeced",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`,
      options
    );
    const responseDetails = await api.json();
    let displayData = new DisplayData(responseDetails);
    displayData.displayDetails(responseDetails);
  }
}
