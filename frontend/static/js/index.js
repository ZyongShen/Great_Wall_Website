import Menu from "./views/Menu.js";
import About from "./views/About.js";



function navigateTo(url) {
    history.pushState(null, null, url);
    router();
}

// Find if it is menu or about
function pageFinder(item) {
    if (location.pathname.indexOf(item) > -1) {
        return true;
    } else {
        return false;
    }
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
            isMatch: pageFinder(route.path)//location.pathname === route.path Checks the path we are currently on
        };
    });


    let match = potential.find(potential => potential.isMatch); // Find where isMatch is true

    // Default is set to menu page
    if (!match) {
        // Go back to the default
        match = {
            route: routes[1],
            isMatch: true
        };
    }

    const view = new match.route.view(); // instance of view at matched route


    // Decide what to call based on url
    if (view instanceof About) {
        document.querySelector("#app").innerHTML = await view.getHtml(); // Set the html items upon page load
        document.querySelector("#myAbout").className = "nav-link active";
        document.querySelector("#myMenu").className = "nav-link";
        document.title = "About"
    } else if (view instanceof Menu) {
        // Pass the pathname and find which html to show
        document.querySelector("#app").innerHTML = await view.getHtml(location.pathname);
        // Change the active tab
        view.activeHelper(location.pathname);
        document.querySelector("#myMenu").className = "nav-link active";
        document.querySelector("#myAbout").className = "nav-link";
        document.title = "Menu"
    }


    

    console.log(match.route.view); // Log the page load

};

// back and forward arrows
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault(); // Prevent from refreshing the page
            navigateTo(e.target.href); // Follow the href found on the element
            
        }
    })

    router(); // Sets the initial page items

    // Sets up the map on the about page
    var about = new About();
    about.makeMap();
});

