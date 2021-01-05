import AbstractView from './AbstractView.js';

export default class About extends AbstractView {
    constructor() {
        super();
        this.setTitle("About");
    }

    makeMap() {
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

    async getHtml() {
        return `
            <div class = "container">
                <div class = "row">
                    <div class = "col">
                        <h1 class = "gwname" id = "myName">Great Wall</h1>
                        <h6>685 Silas Deane Hwy.</h6>
                        <h6>(860) 257-9933</h6>
                    </div>

                    <div class = "col">
                        <div>
                            <h2 id = "payments">Accepted Payment Types</h2>
                            <h6>Cash, Credit, Debit</div>
                            <h6>MasterCard, Discovery, VISA, AmericanExress</h6> 
                        </div>
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
                        <h6>Sunday: 12:00 PM - 10:00 PM</h6>
                        <h6>Monday: 10:30 AM - 10:30 PM</h6>
                        <h6>Tuesday: 5:00 PM - 10:30 PM</h6>
                        <h6>Wednesday: 10:30 AM - 10:30 PM</h6>
                        <h6>Thursday: 10:30 AM - 10:30 PM</h6>
                        <h6>Friday: 10:30 AM - 11:00 PM</h6>
                        <h6>Saturday: 10:30 AM - 11:00 PM</h6>
                    </div>
                    
                </div>
            </div>
        `;
    }


}