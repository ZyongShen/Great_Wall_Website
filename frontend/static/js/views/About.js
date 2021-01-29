import AbstractView from './AbstractView.js';

export default class About extends AbstractView {
    constructor() {
        super();
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
                    <div class = "col-md-6">
                    <pre>

                    </pre>
                        <div class = "card shadow-sm bg-white rounded" id = "aboutCard"> 
                            <div class = "card-body">

                                <h1 class = "gwname" id = "myName">Location</h1>
                                <h6 id = "gwInfo">685 Silas Deane Hwy. Wethersfield, CT 06109</h6>
                                <h6 id = "gwInfo">(860) 257-9933</h6>

                                <h2 id = "gwInfo" class = "hours">Hours</h2>
                                <h6 id = "gwInfo">Sunday: 12:00 PM - 10:00 PM</h6>
                                <h6 id = "gwInfo">Monday: 10:30 AM - 10:30 PM</h6>
                                <h6 id = "gwInfo">Tuesday: 5:00 PM - 10:30 PM</h6>
                                <h6 id = "gwInfo">Wednesday: 10:30 AM - 10:30 PM</h6>
                                <h6 id = "gwInfo">Thursday: 10:30 AM - 10:30 PM</h6>
                                <h6 id = "gwInfo">Friday: 10:30 AM - 11:00 PM</h6>
                                <h6 id = "gwInfo">Saturday: 10:30 AM - 11:00 PM</h6>
                            </div>
                        </div>
                        <pre>

                        </pre>
                    </div>

                    <div class = "col-md-6">
                    <pre>
                    </pre>
                        <div id = "map"></div>
                    </div>
                </div>
            </div>
        `;
    }


}