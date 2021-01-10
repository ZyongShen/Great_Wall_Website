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

    getOptions() {
        return `
            <ul class="nav nav-tabs mb-7" id="ex1" role="tablist">
                <li class="nav-item" role="presentation">
                    <a
                        class="nav-link active"
                        id="ex1-tab-1"
                        data-mdb-toggle="tab"
                        href="#ex1-tabs-1"
                        role="tab"
                        aria-controls="ex1-tabs-1"
                        aria-selected="true"
                        >Tab 1</a
                    >
                </li>
                <li class="nav-item" role="presentation">
                    <a
                        class="nav-link"
                        id="ex1-tab-2"
                        data-mdb-toggle="tab"
                        href="#ex1-tabs-2"
                        role="tab"
                        aria-controls="ex1-tabs-2"
                        aria-selected="false"
                        >Tab 2</a
                    >
                </li>
                <li class="nav-item" role="presentation">
                    <a
                        class="nav-link"
                        id="ex1-tab-3"
                        data-mdb-toggle="tab"
                        href="#ex1-tabs-3"
                        role="tab"
                        aria-controls="ex1-tabs-3"
                        aria-selected="false"
                        >Tab 3</a
                    >
                </li>
                <li class="nav-item" role="presentation">
                    <a
                        class="nav-link"
                        id="ex1-tab-3"
                        data-mdb-toggle="tab"
                        href="#ex1-tabs-3"
                        role="tab"
                        aria-controls="ex1-tabs-3"
                        aria-selected="false"
                        >Tab 3</a
                    >
                </li>
                <li class="nav-item" role="presentation">
                    <a
                        class="nav-link"
                        id="ex1-tab-3"
                        data-mdb-toggle="tab"
                        href="#ex1-tabs-3"
                        role="tab"
                        aria-controls="ex1-tabs-3"
                        aria-selected="false"
                        >Tab 3</a
                    >
                </li>
                <li class="nav-item" role="presentation">
                    <a
                        class="nav-link"
                        id="ex1-tab-3"
                        data-mdb-toggle="tab"
                        href="#ex1-tabs-3"
                        role="tab"
                        aria-controls="ex1-tabs-3"
                        aria-selected="false"
                        >Tab 3</a
                    >
                </li>
                <li class="nav-item" role="presentation">
                    <a
                        class="nav-link"
                        id="ex1-tab-3"
                        data-mdb-toggle="tab"
                        href="#ex1-tabs-3"
                        role="tab"
                        aria-controls="ex1-tabs-3"
                        aria-selected="false"
                        >Tab 3</a
                    >
                </li>
            </ul>
        `;
    }
}