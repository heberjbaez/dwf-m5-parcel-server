import { state } from "../../state";
export function initScoreEl() {
    class ScoreComp extends HTMLElement {
        constructor() {
            super();
            this.render();

        }
        render() {
            const shadow = this.attachShadow({ mode: 'open' });
            const div = document.createElement("div");
            const style = document.createElement("style");
            const score = state.getScore();

            div.innerHTML = `
                <div class="container">
                    <h3 class="title">Score</h3>
                    <text-comp class="text" variant="body">Vos: ${score.myScore}</text-comp>
                    <text-comp class="text" variant="body">Maquina: ${score.computerScore}</text-comp>
                </div> 
            `

            style.innerHTML = `
                .container{
                    background-color:white;
                    display: flex;
                    flex-direction: column;
                    border: solid black 5px;
                    border-radius: 2px;
                    min-width: 250px;
                    min-height: 210px;
                }
                .title{
                    margin:0px;
                    text-align: center;
                    font-weight: 400;
                    font-size: 55px;
                    line-height: 60px;
                }
                .text{
                    text-align: right;
                    padding: 10px;
                }
            `
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    }

    customElements.define("score-comp", ScoreComp);
}