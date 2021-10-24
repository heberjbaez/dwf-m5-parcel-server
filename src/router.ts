import { initWelcomePage } from "./pages/welcome";
import { initInstructionsPage } from "./pages/instructions";
import { initGamePage } from "./pages/game";
import { initPageResults } from "./pages/results";
const routes = [
    {
        path: /\/welcome/,
        component: initWelcomePage,
    },
    {
        path: /\/instructions/,
        component: initInstructionsPage,
    },
    {
        path: /\/game/,
        component: initGamePage,
    },
    {
        path: /\/results/,
        component: initPageResults,
    },

];
export function initRouter(container: Element) {
    function goTo(path) {
        history.pushState({}, "", path);
        handleRoute(path);
    }
    function handleRoute(route) {

        for (const r of routes) {
            if (r.path.test(route)) {
                const el = r.component({ goTo: goTo });

                if (container.firstChild) {
                    container.firstChild.remove();
                }
                container.appendChild(el);
            }
        }
    }
    handleRoute(location.pathname.replace("/dwf-m5-parcel-server/", "/welcome"));
    if (location.pathname == "/dwf-m5-parcel-server/") {
        goTo("/welcome");
    }
    window.onpopstate = function () {
        handleRoute(location.pathname);
    }
}

