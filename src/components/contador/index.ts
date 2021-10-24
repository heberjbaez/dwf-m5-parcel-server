export function initCounterEl() {
    class CounterComp extends HTMLElement {

        constructor() {
            super();
            this.render();

        }
        render() {
            let counter = 3;
            const shadow = this.attachShadow({ mode: 'open' });
            const div = document.createElement("div");
            const style = document.createElement("style");
            style.innerHTML = `
                .counter{
                    width:245px;
                    height:245px;
                    border:23px solid black;
                    border-radius:50%;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    justify-content:center;
                    font-size:100px;
                    margin:0px;
                    font-family: "Odibee Sans", cursive;
                }
            `
            const interval = setInterval(() => {

                div.innerHTML = `
                <div class= "counter">${counter}</div>
            `

                if (counter <= 0) {
                    clearInterval(interval);
                    const COUNTER = new CustomEvent("change", {
                        detail: {
                            number: counter,
                        }
                    });
                    this.dispatchEvent(COUNTER);
                }


                counter--;

            }, 1000);


            shadow.appendChild(div);
            shadow.appendChild(style);

        }


    }
    customElements.define("counter-comp", CounterComp);



}

