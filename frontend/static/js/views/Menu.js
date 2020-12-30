import AbstractView from "./AbstractView.js";

export default class Menu extends AbstractView {
    constructor() {
        super();
        this.setTitle("Menu");
    }

    foodNav() {
        return `
            <div class = "container">
                <div class = "row">
                    <div class = "col">
                        <ul class = "nav nav-pills flex-column">
                            <li class = "nav-item">
                                <a class = "nav-link" href = "#">Specialities</a>
                            </li>
                            <li class = "nav-item">
                                <a class = "nav-link" href = "#">Apetizer</a>
                            </li>
                            <li class = "nav-item">
                                <a class = "nav-link" href = "#">Soup</a>
                            </li>
                            <li class = "nav-item">
                                <a class = "nav-link" href = "#">Fried Rice</a>
                            </li>
                            <li class = "nav-item">
                                <a class = "nav-link" href = "#">Grilled</a>
                            </li>
                            <li class = "nav-item">
                                <a class = "nav-link" href = "#">Chow Mein/Chop Suey</a>
                            </li>
                            <li class = "nav-item">
                                <a class = "nav-link" href = "#">Lo Mein</a>
                            </li>
                            <li class = "nav-item">
                                <a class = "nav-link" href = "#">Mei Fun/Chow Fun</a>
                            </li>
                            <li class = "nav-item">
                                <a class = "nav-link" href = "#">Egg Foo Young</a>
                            </li>
                            <li class = "nav-item">
                                <a class = "nav-link" href = "#">Pork</a>
                            </li>
                            <li class = "nav-item">
                                <a class = "nav-link" href = "#">Special Diet Dishes</a>
                            </li>
                            <li class = "nav-item">
                                <a class = "nav-link" href = "#">Chicken</a>
                            </li>
                            <li class = "nav-item">
                                <a class = "nav-link" href = "#">Beef</a>
                            </li>
                            <li class = "nav-item">
                                <a class = "nav-link" href = "#">Seafood</a>
                            </li>
                            <li class = "nav-item">
                                <a class = "nav-link" href = "#">Bean Curd</a>
                            </li>
                            <li class = "nav-item">
                                <a class = "nav-link" href = "#">Vegetable</a>
                            </li>
                            <li class = "nav-item">
                                <a class = "nav-link" href = "#">House Special</a>
                            </li>
                            <li class = "nav-item">
                                <a class = "nav-link" href = "#">House Special</a>
                            </li>
                            <li class = "nav-item">
                                <a class = "nav-link" href = "#">Healthy Delight Entree's</a>
                            </li>
                            <li class = "nav-item">
                                <a class = "nav-link" href = "#">Dinner Specials</a>
                            </li>
                            <li class = "nav-item">
                                <a class = "nav-link" href = "#">American Dish  Specials</a>
                            </li>
                            <li class = "nav-item">
                                <a class = "nav-link" href = "#">Thai Food</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }
    

    async getHtml() {
        var vertNav = this.foodNav();
        return vertNav;
    }
}