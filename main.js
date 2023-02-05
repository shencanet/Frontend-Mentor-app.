//import data from './data.json' assert {type: 'json'};
fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    let backgroundcolors = [
      
        'hsl(15, 100%, 70%)',
        'hsl(195, 74%, 62%)',
        'hsl(348, 100%, 68%)',
        'hsl(145, 58%, 55%)',
        'hsl(264, 64%, 52%)',
        'hsl(43, 84%, 65%)',
    ]
    let dailyArray = data.map((item) => item.timeframes.daily);
    let weeklyArray = data.map((item) => item.timeframes.weekly);
    let monthlyArray = data.map((item) => item.timeframes.monthly);

    let dailytBtn = document.querySelector("#daily");
    let weeklyBtn = document.querySelector("#weekly");
    let monthlyBtn = document.querySelector("#monthly");

    let seconsSection = document.querySelector(".second-section");
    drawElements(dailyArray);

  

    dailytBtn.addEventListener("click", () => {
      drawElements(dailyArray);
    });

    weeklyBtn.addEventListener("click", () => {
      drawElements(weeklyArray);
    });

    monthlyBtn.addEventListener("click", () => {
      drawElements(monthlyArray);
    });

    function drawElements(array) {
      seconsSection.innerHTML= '';
      array.forEach((element, index) => {
        let title = data[index].title;
        let titlelowercase = title.toLocaleLowerCase();

        if(titlelowercase == 'self care'){
          titlelowercase = 'self-care'
        }
       

        
        seconsSection.innerHTML += `<div class="card">
        <div class="card__background" style= "background-color: ${backgroundcolors[index]}">
          <img class="card__image" src="./images/icon-${titlelowercase}.svg" alt="Work" />
        </div>
        <div class="card__details">
          <div class="card__activity">
            <p class="card__title">${title}</p>
            <img
              class="card_dots"
              src="./images/icon-ellipsis.svg"
              alt="Three dots"
            />
          </div>
          <div class="card__time">
            <p class="card__hour">${element.current}</p>
            <p class="card__previous">Previous ${element.previous}</p>
          </div>
        </div>
      </div>`;
      });
    } //cierre funcion pintado
  }); //cierre fetch
