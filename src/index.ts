import { initTextEl } from "./components/text";
import { InitButtonEl } from "./components/button";
import { initPiedraEl } from "./components/piedra";
import { initTijeraEl } from "./components/tijera";
import { initPapelEl } from "./components/papel";
import { initScoreEl } from "./components/score";
import { initCounterEl } from "./components/contador";
import { initStarWinEl } from "./components/star-win";
import { initStarLoseEl } from "./components/star-lose"
import { initStarTieEl } from "./components/star-tie"
import { initRouter } from "./router"
import { state } from "./state";

function main() {
    initStarTieEl();
    initStarLoseEl()
    initStarWinEl();
    initCounterEl();
    initPapelEl();
    initTijeraEl();
    initPiedraEl();
    initTextEl();
    initScoreEl()
    InitButtonEl();

    const root = document.querySelector(".root");
    initRouter(root);

    state.init();
}

main();