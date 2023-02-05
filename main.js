//import data from './data.json' assert {type: 'json'};
fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    
    let dailytBtn = document.querySelector("#daily");
    let weeklyBtn = document.querySelector("#weekly");
    let monthlyBtn = document.querySelector("#monthly");
    let seconsSection = document.querySelector('.second-section');
    
    dailytBtn.addEventListener('click', ()=> {
        data.forEach(element => {
            
            console.log(element)
            seconsSection.innerHTML +=`<div class="card">
            <div class="card__background">
              <img class="card__image" src="./images/icon-work.svg" alt="Work" />
            </div>
            <div class="card__details">
              <div class="card__activity">
                <p class="card__title">Work</p>
                <img
                  class="card_dots"
                  src="./images/icon-ellipsis.svg"
                  alt="Three dots"
                />
              </div>
              <div class="card__time">
                <p class="card__hour">5hrs</p>
                <p class="card__previous">Previous - 7hrs</p>
              </div>
            </div>
          </div>`;         });
    });//cierre listener
  });//cierre fetch
