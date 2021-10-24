import { state } from "../../state";

export function initGamePage(params) {
    const backgroundImg = require("url:../../../src/img/fondo.svg");

    const div = document.createElement("div");
    div.innerHTML =
        `
        <section class="section">
            <div class="counter-container">
                <counter-comp class ="counter"></counter-comp>
            </div>
            <div class = "hands-container">
                <tijera-comp variant="big" class="hands"></tijera-comp>
                <piedra-comp variant="big" class="hands" ></piedra-comp>
                <papel-comp variant="big" class="hands" ></papel-comp>
            </div>
        </section>
    `
    const style = document.createElement("style");
    style.innerHTML = `
    *{
        box-sizing: border-box;
        margin:0px;
     }

     .counter-container{
        align-self:center;
        margin-top:50px;
     }

     .section{
        background-image: url("${backgroundImg}");
        height: 100vh;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
       }

     .hands-container{
        display:flex;
        justify-content: space-between;
     }

     @media (min-width: 769px){
        .hands-container{
           justify-content:space-evenly;
           }
        }
    `


    const userMove = div.querySelectorAll(".hands");

    let contador = div.querySelector(".counter");

    let boolean = false;

    userMove.forEach(element => {
        element.addEventListener("change", (e: any) => {

            boolean = true;

            new CustomEvent("change", {
                detail: {
                    myPlay: e.detail.myPlay
                }
            })

            state.setMove(e.detail.myPlay)

            params.goTo("/results");
        })
    })


    contador.addEventListener("change", () => {
        if (boolean == false) {
            params.goTo("/instructions")
        }
    })


    div.appendChild(style);

    return div;
}