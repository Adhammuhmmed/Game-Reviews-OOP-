import { Detaills } from "./details.module.js";
import { Home } from "./home.module.js";

export class DisplayData {
  constructor(response) {
    this.displayHome(response);
    this.displayDetails();
    this.close(response);
  }
  displayHome(response) {
    let box = "";
    for (let i = 0; i < response.length; i++) {
      box += `
           <div class="col">
            <div class="card h-100 bg-transparent" role="button"">
               <div class="card-body">
                  <figure class="position-relative">
                     <img class="card-img-top object-fit-cover h-100" src="${response[i].thumbnail}" />
                  </figure>
                  <figcaption>
                     <div class="hstack justify-content-between">
                        <h3 class="h6 small"> ${response[i].title}</h3>
                        <span class="badge text-bg-primary p-2">Free</span>
                     </div>
                     <p class="card-text small text-center text-secondary py-3">
                     ${response[i].short_description}
                     </p>
                  </figcaption>
               </div>
               <footer class="card-footer small hstack justify-content-between py-2">
                  <span class="badge text-bg-secondary py-2">${response[i].genre}</span>
                  <span class="badge text-bg-secondary py-2">${response[i].platform}</span>
               </footer>
            </div>
         </div>
         
        `;
    }
    document.getElementById("gameData").innerHTML = box;

    //  TO KNOW GAME ID TO SHOW DETAILS
    let card = document.querySelectorAll(".card");
    for (let i = 0; i < card.length; i++) {
      card[i].addEventListener("click", () => {
        let gameId = response[i].id;
        let datails = new Detaills(gameId);
        this.displayDetails();
      });
    }
  }
  async displayDetails(responseDetails) {
    let box = ` <div class="col-md-4">
    <figure>
       <img src="${responseDetails.thumbnail}" class="w-100" alt="details image" />
    </figure>
 </div>
 <div class="col-md-8">
       <h1 class ="h3"> Title: ${responseDetails.title}</h1>
       <h6 class ="py-1">Category: <span class="badge text-bg-primary p-2">${responseDetails.title}</span></h6>
       <h6 class ="py-1">Platform: <span class="badge text-bg-primary p-2">${responseDetails.platform}</span></h6>
       <h6 class ="py-1">Status: <span class="badge text-bg-primary p-2">${responseDetails.status}</span></h6>
       <p class ="py-1">${responseDetails.description}</p>
      <a href="${responseDetails.game_url}" class="btn btn-sm btn-outline-warning">Show Game</a>
 </div>
`;
    document.getElementById("detalis").innerHTML = box;
    $('.container #close').show(0)
  }
  close(response) {
    document.getElementById("closeBtn").addEventListener("click", () => {
      $(".details").hide(0);
      $("#home").show(0);

      let home = new Home();
      this.fetchApi(category);
    });
  }
}
