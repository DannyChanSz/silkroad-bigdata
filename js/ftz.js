jQuery.noConflict();
var jqFunction = {};
(function($) {
    var map = {};

    $(function() {

        GetMap();



    });







    function GetMap() {

        const KEY = 'AjDr-JiVSN0Laqaw-j6Jkdml_aaguQNVUKoQfWbFCrdx3_0EmyO-0F5Kd5AvtMlX';
        // Initialize the map
        map = new Microsoft.Maps.Map(document.getElementById("mapDiv"), {
            credentials: KEY,
            center: new Microsoft.Maps.Location(22.656, 58.262),
            mapTypeId: Microsoft.Maps.MapTypeId.road,
            zoom: 4,
            showDashboard: false
        });


        var loc1 = new Microsoft.Maps.Location(27.914715, 112.573611);
        var pushpinOptions = {
            icon: '/images/spot4.png',
            width: 60,
            height: 60,
            anchor: new Microsoft.Maps.Point(30, 30)
        };

        // Add a pin to the map
        var pin = new Microsoft.Maps.Pushpin(loc1, pushpinOptions);

        var loc2 = new Microsoft.Maps.Location(11.845908, 42.550631);
        var pin2 = new Microsoft.Maps.Pushpin(loc2, pushpinOptions);

        var loc3 = new Microsoft.Maps.Location(49.859921, 7.370561);
        var pin3 = new Microsoft.Maps.Pushpin(loc3, pushpinOptions);

        map.entities.push(pin);
        map.entities.push(pin2);
        map.entities.push(pin3);







    }


    
})(jQuery);
