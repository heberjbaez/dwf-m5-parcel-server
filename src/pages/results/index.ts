import { state } from "../../state";

export function initPageResults(params) {
    const backgroundImg = require("url:../../../src/img/fondo.svg");

    const div = document.createElement("div");
    const style = document.createElement("style");
    const myPlay = document.createElement("div");
    const computerPlay = document.createElement("div");
    const lastState = state.getState();
    const myState = lastState.currentGame.myPlay;
    const computerState = lastState.currentGame.computerPlay;

    div.innerHTML = `
        <div class = "result-container">
            <div class="my-play"></div>
            <div class="computer-play"></div>
            <section class= "section">
                <div class="star-container">
                    <div class="star-container"></div>
                    <text-comp class="star-text"></text-comp>
                </div>
                <score-comp class="score"></score-comp>
                <div class= "button-container">
                    <button-comp class="button">Volver A Jugar</button-comp>
                </div>
            </section>
        </div>
    `

    style.innerHTML = `
        *{
            box-sizing:border-box;
        }
        body{
            margin:0px;
            padding:0px;
        }
        
        .section{
            background-image:url(${backgroundImg});
            display: none;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            min-width:375px;
            min-height: 667px;
            position: absolute;
            top: 0px;
            bottom: 0px;
            right: 0px;
            left: 0px;
        }
        
        .score{
            font-family: "Odibee Sans";

        }
        
        .button-container{
            padding: 20px;
            min-width: 300px;
        }
        .my-play{
            min-width: 157px;
            min-height: 300px;
            
        }
        .result-container{
            background-image:url(${backgroundImg});
            display:flex;
            flex-direction: column-reverse;
            min-height:100vh;
            justify-content: space-between;
            align-items: center;
        }
        .computer-play{
            transform: rotate(180deg);
        }
        .button{
            width:100%;
        }
        
    `


    if (myState == "piedra") {
        myPlay.innerHTML = `
             <piedra-comp variant= "big" class= "my-play"></piedra-comp>
             `
    }

    if (myState == "papel") {
        myPlay.innerHTML = `
             <papel-comp variant="big" class= "my-play"></papel-comp>
             `
    }

    if (myState == "tijera") {
        myPlay.innerHTML = `
            <tijera-comp variant="big" class="my-play"></tijera-comp>
            `
    }

    if (computerState == "piedra") {
        computerPlay.innerHTML = `
            <piedra-comp variant= "big" class= "computer-play"></piedra-comp>
            `
    }
    if (computerState == "papel") {
        computerPlay.innerHTML = `
            <papel-comp variant= "big" class= "computer-play"></papel-comp>
            `
    }
    if (computerState == "tijera") {
        computerPlay.innerHTML = `
            <tijera-comp variant= "big" class= "computer-play"></tijera-comp>
            `
    }




    const intevarlo = setInterval(() => 2000);
    const sectionEl: any = div.querySelector(".section");
    const starContainerEl = div.querySelector(".star-container");


    setTimeout(() => {
        clearInterval(intevarlo)
        if (state.whoWins(state.getState().currentGame.myPlay, state.getState().currentGame.computerPlay) == "ganaste") {
            sectionEl.style.display = "flex";
            sectionEl.style.background = "#888949E5";
            starContainerEl.innerHTML = `<star-win-comp></star-win-comp>`



        }
        if ((state.whoWins(state.getState().currentGame.myPlay, state.getState().currentGame.computerPlay) == "perdiste")) {
            sectionEl.style.display = "flex";
            sectionEl.style.background = "rgba(137, 73, 73, 0.9)";
            starContainerEl.innerHTML = `<star-lose-comp></star-lose-comp>`


        }
        if ((state.whoWins(state.getState().currentGame.myPlay, state.getState().currentGame.computerPlay) == "empataste")) {
            sectionEl.style.display = "flex";
            sectionEl.style.background = "rgba(137, 73, 73, 0.9)";
            starContainerEl.innerHTML = `<star-tie-comp></star-tie-comp>`
        }
    }, 1000);




    div.querySelector(".computer-play").appendChild(computerPlay);
    div.querySelector(".my-play").appendChild(myPlay);
    div.appendChild(style);

    div.querySelector(".button").addEventListener("click", () => {
        params.goTo("/instructions");
    })
    return div;
}