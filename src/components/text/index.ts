export function initTextEl() {
    class TextComponent extends HTMLElement {
        constructor() {
            super();
            this.render();
        }

        render() {
            const variant = this.getAttribute("variant") || "body"
            const shadow = this.attachShadow({ mode: 'open' });
            const div = document.createElement("div");
            const style = document.createElement("style");
            style.innerHTML = `
                .title{
                    font-size: 80px;
                    font-weight: 700;
                    color: #009048; 
                }

                .body{
                    font-size: 40px;
                    font-weight: 600;
                }
            `


            div.className = variant;
            div.textContent = this.textContent;
            shadow.appendChild(div);
            shadow.appendChild(style);
        }

    }
    customElements.define("text-comp", TextComponent);
}