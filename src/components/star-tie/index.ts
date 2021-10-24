export function initStarTieEl() {
    class StarTie extends HTMLElement {
        constructor() {
            super();
            this.render();

        }
        render() {
            const tie = require("url:../../../src/img/perdiste.svg");
            const shadow = this.attachShadow({ mode: 'open' });
            const div = document.createElement("div");
            const style = document.createElement("style");

            div.innerHTML =
                `
                <div class="star-container">
                    <img class="star-img" src=${tie}> 
                    <h3 class="star-text">Empate</h3>
                </div>
            `
            style.innerHTML =
                `
                .star-container{
                    text-align:center;
                }
                .star-text{
                    margin:0px;
                    font-weight:400;
                    font-size: 55px;
                    font-family:Odibee Sans;
                    color:hsla(0, 0%, 100%, 1);
                    position: relative;
                    bottom:168px;
                }
            `

            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    }

    customElements.define("star-tie-comp", StarTie);
}
