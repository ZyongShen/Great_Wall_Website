import Menu from "./views/Menu.js";
import About from "./views/About.js";


function navigateTo(url) {
    history.pushState(null, null, url);
    router();
}

async function router() {
    // Views associated with their pathes
    const routes = [
        {path: "/menu", view: Menu},
        {path: "/about", view: About},
    ];

    const potential = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path // Checks the path we are currently on
        };
    });

    let match = potential.find(potential => potential.isMatch);

    // Default is set to menu page
    if (!match) {
        // Go back to the default
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    const view = new match.route.view(); // instance of view at matched route
    
    document.querySelector("#app").innerHTML = await view.getHtml();

    console.log(match.route.view);

};

// back and forward arrows
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault(); // Prevent from refreshing the page
            navigateTo(e.target.href); // Follow the href found on the element
            if (window.location.href.indexOf("about") > -1) {
                location.reload();
            }
        }
    })
    router();
    var about = new About();
    about.makeMap();
});
