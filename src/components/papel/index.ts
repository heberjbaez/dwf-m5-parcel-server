export function initPapelEl() {
    class PapelComp extends HTMLElement {
        constructor() {
            super();
            this.render();

        }
        render() {
            const papel = require("url:../../../src/img/papel.svg")
            const variant = this.getAttribute("variant") || "small"
            const shadow = this.attachShadow({ mode: 'open' });
            const div = document.createElement("div");
            const style = document.createElement("style");

            div.innerHTML = `
                <img variant="big" class="papel" src="${papel}"> 
            `
            style.innerHTML = `
                .big{
                    width: 122px;
                    height: 236px;
                }
                .small{
                    width: 67px;
                    height: 128px;
                }
                .papel{
                    width:100%;
                }
            `
            const elegido = div.querySelector(".papel");
            elegido.addEventListener("click", (r) => {
                const evento = new CustomEvent("change", {
                    detail:
                    {
                        myPlay: "papel"
                    }
                })
                this.dispatchEvent(evento);
            })

            div.className = variant;
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    }

    customElements.define("papel-comp", PapelComp);
}
