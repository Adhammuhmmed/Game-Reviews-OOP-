import { DisplayData } from "./ui.module.js";
export class Home {
  constructor() {
    $("#detalis").hide(0);
    this.links = document.querySelectorAll(".nav-link");
    this.Links();
    this.fetchApi("mmorpg");
  }

  Links() {
    let links = this.links;
    // TO KNOW WHAT THE LINK USER CLICK ON
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("click", () => {
        document.querySelector(".menu .active").classList.remove("active");
        links[i].classList.add("active");
        let category = links[i].getAttribute("data-category");
        this.fetchApi(category);
      });
    }
  }

  async fetchApi(category) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "dce11eba9dmsh4e8f1ae5af44daep123dd6jsncc6a6ddaeced",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    $(".loading-screen").show(0);
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );
    $(".loading-screen").hide(0);
    const response = await api.json();
    let display = new DisplayData(response);
  }
}
