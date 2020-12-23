import Menu from "./views/Menu.js";
import About from "./views/About.js";


function navigateTo(url) {
    history.pushState(null, null, url);
    router();
}

async function router() {
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

async function makeMap() {
    var longLat = [-72.66189, 41.70591]; // [lng, lat]
    window.onload = () => {
        mapboxgl.accessToken = 'pk.eyJ1Ijoic2hpenlvbmciLCJhIjoiY2tqMXE0enAzM2hwczMwbHJmMG55MzFzeiJ9.8A18iJVhv4uE5t_LseCmkQ';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: longLat,
            zoom: 17,
        });

        var marker = new mapboxgl.Marker().setLngLat(longLat).addTo(map);
    }
}

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
    makeMap();
});


