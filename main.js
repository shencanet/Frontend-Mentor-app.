//import data from './data.json' assert {type: 'json'};
fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let dailtBtn = document.querySelector("#daily");
    let weeklyBtn = document.querySelector("#weekly");
    let monthlyBtn = document.querySelector("#monthly");
    addEventListener('click', ()=> {
        data.forEach(element => {
            
        });
    });
  });
