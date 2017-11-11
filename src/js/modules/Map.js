class Map {
    constructor () {
        window.initMap = function () {
            var position = {lat: 54.709228, lng: 20.5476554};
            var map =  new google.maps.Map(document.querySelector('.map'), {
                zoom: 16,
                center: position
            });

            var marker = new google.maps.Marker({
                position: position,
                map: map,
                draggable: false,
                animation: google.maps.Animation.BOUNCE
            });
        }
    }
}
export default Map;
