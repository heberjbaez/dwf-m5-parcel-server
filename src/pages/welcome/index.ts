export function initWelcomePage(params) {
   const backgroundImg = require("url:../../../src/img/fondo.svg");
   const div = document.createElement("div");

   div.innerHTML = `
    <section class= "section">
      <div class="title-container">
         <text-comp class="title" variant="title">Piedra Papel ó Tijera</text-comp>
      </div>
      <div class="button-container">
         <button-comp class="button">Comenzar</button-comp>
      </div>
      <div class = "hands-container">
         <tijera-comp variant="small" class="hands"></tijera-comp>
         <piedra-comp variant="small" class="hands" ></piedra-comp>
         <papel-comp variant = "small" class="hands" ></papel-comp>
      </div>
    </section>
    `

   const style = document.createElement("style");
   style.innerHTML = `
        *{
           box-sizing: border-box;
           margin:0px;
        }

        .section{
         background-image: url("${backgroundImg}");
         padding:0 26px 0 26px;
         height: 100vh;
         display:flex;
         flex-direction:column;
         justify-content:space-between;
        }

        .title-container{
           min-width:284px;
           height: 204px;
           text-align:center;
        }

        .title{
           padding:0px;
           font-family: "Odibee Sans", cursive;
           letter-spacing: 4px
        }

       .button-container{
          display:flex;
          justify-content:center;
       }

       .button{
         width:336px;
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

        .hands{
           width:56px;
           height: 128px;
        }
    `
   div.appendChild(style);

   div.querySelector(".button").addEventListener("click", () => {
      params.goTo("/instructions");
   })
   return div;

}