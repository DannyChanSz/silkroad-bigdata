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
            icon: '/images/spot3.png',
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

        drawLine(loc1, loc2, new Microsoft.Maps.Color(200, 0, 160, 233),'Y(TC=30)');
        drawLine(loc2, loc3, new Microsoft.Maps.Color(200, 0, 160, 233),'Z(TC=50)');
        drawLine(loc1, loc3, new Microsoft.Maps.Color(200, 233, 50, 50),'X(TC=100)');





    }


    function drawLine(fromLoc, toLoc, color,text) {
        // find the middle location  betwin fromLoc to toLoc
        var midLoc = { "latitude": (fromLoc.latitude + toLoc.latitude) / 2, "longitude": (fromLoc.longitude + toLoc.longitude) / 2 };

        var infoboxOptions = { width: 200, height: 100, showCloseButton: true, zIndex: 0, offset: new Microsoft.Maps.Point(20, 5), showPointer: true };
        var defInfobox = new Microsoft.Maps.Infobox(midLoc, infoboxOptions);
        defInfobox.setHtmlContent('<div class="tip-panel">' + text + '</div>');
        map.entities.push(defInfobox);


        var option = { strokeColor: color, strokeThickness: 5, strokeDashArray: "5 0" }

        // Create a polyline
        var lineVertices = new Array(fromLoc, toLoc);
        var line = new Microsoft.Maps.Polyline(lineVertices, option);

        // Add the polyline to the map
        map.entities.push(line);
    }

})(jQuery);
