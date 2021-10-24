export function initPiedraEl() {
    class PiedraComp extends HTMLElement {
        constructor() {
            super();
            this.render();

        }
        render() {
            const piedra = require("url:../../../src/img/piedra.svg");
            const variant = this.getAttribute("variant") || "small"
            const shadow = this.attachShadow({ mode: 'open' });
            const div = document.createElement("div");
            const style = document.createElement("style");
            div.innerHTML = `
                <img variant= "big" class="piedra" src="${piedra}"> 
            `
            style.innerHTML = `
                .big{
                    width: 102px;
                    height: 232px;
                }
                .small{
                    width: 56px;
                    height: 126px;
                }
                .piedra{
                    width:100%;
                }
            `

            const elegido = div.querySelector(".piedra");
            elegido.addEventListener("click", (r) => {
                const evento = new CustomEvent("change", {
                    detail:
                    {
                        myPlay: "piedra"
                    }
                })
                this.dispatchEvent(evento);
            })

            div.className = variant;
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    }

    customElements.define("piedra-comp", PiedraComp);
}
