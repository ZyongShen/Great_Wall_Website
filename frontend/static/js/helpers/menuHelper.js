export default class menuHelper {
    constructor() {

    }

    setActive(myPath) {
        // Find the key word in the url
        var desiredId = "";
        var categories = [
            "specialties",
            "appetizer",
            "soup",
            "friedrice",
            "grilled",
            "meinsuey",
            "lomein",
            "meichow",
            "efg",
            "pork",
            "diet",
            "chicken",
            "beef",
            "seafood",
            "tofu",
            "vegetable",
            "housespecial",
            "healthdelight",
            "dinner",
            "amerdish",
            "thai"
        ];
        for (var i = 0; i < categories.length; i++) {
            if (myPath.indexOf(categories[i]) > -1) {
                desiredId = categories[i];
            }
        }
        if (desiredId == "") {
            desiredId = categories[0];
        }
        // Set the element to active
        var myElement = document.getElementById(desiredId);
        myElement.className = "nav-link active";
        for (var i = 0; i < categories.length; i++) {
            if (categories[i] !== desiredId) {
                myElement = document.getElementById(categories[i]);
                myElement.className = "nav-link";
            }
        }
    }
}