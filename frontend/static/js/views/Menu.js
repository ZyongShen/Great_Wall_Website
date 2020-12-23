import AbstractView from "./AbstractView.js";

export default class Menu extends AbstractView {
    constructor() {
        super();
        this.setTitle("Menu");
    }


    async getHtml() {
        return `
            <h1> Menu View </h1>
        `;
    }
}