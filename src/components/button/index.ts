export function InitButtonEl() {
    class ButtonComponent extends HTMLElement {
        constructor() {
            super();
            this.render();
        }

        render() {
            const shadow = this.attachShadow({ mode: 'open' });
            const button = document.createElement("button");
            const style = document.createElement("style");
            button.className = "button";

            style.innerHTML = `
                .button{
                    font-size: 45px;
                    color: #D8FCFC;
                    width: 100%;
                    height: 87px;
                    background-color: #006CFC;
                    border: 10px solid #001997;
                    border-radius: 10px;
                    font-family: "Odibee Sans", cursive;
                }
            `
            button.textContent = this.textContent;
            shadow.appendChild(button);
            shadow.appendChild(style);

        }
    }
    customElements.define("button-comp", ButtonComponent);

}