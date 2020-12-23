import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("About");
    }

    async getHtml() {
        return `
            <div class = "container">
                <div class = "row">
                    <div class = "col">
                        <h1 class = "gwname" id = "myName">Great Wall</h1>
                        <h6>685 Silas Deane Hwy.</h6>
                        <h6>(860) 257-9933</h6>
                    </div>

                </div>
            </div>
            <hr>
            <div class = "container">
                <div class = "row">
                    <div class = "col">
                        <div id = "map"></div>
                    </div>

                    <div class = "col">
                        <h2 class = "hours">Hours</h2>
                        <h6>Sunday: 11:30 AM - 10:00 PM</h6>
                        <h6>Monday - Thursday: 10:30 AM - 10:30 PM</h6>
                        <h6>Friday - Saturday: 10:30 AM - 11:00 PM</h6>
                    </div>
                </div>
            </div>
        `;
    }


}