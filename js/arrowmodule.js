function ArrowModule(map)
{
   // Use the given location to draw an arrow pointing to that spot
   this.drawRedArrow = function(location)
       {
           // Initialize the polygon locations
           var points = new Array(8);
           points[0] = location;
           points[1] = new Microsoft.Maps.Location(location.latitude+10, location.longitude);
           points[2] = new Microsoft.Maps.Location(location.latitude+5, location.longitude-5);
           points[3] = new Microsoft.Maps.Location(location.latitude+30, location.longitude-25);
           points[4] = new Microsoft.Maps.Location(location.latitude+25,
location.longitude-30);
           points[5] = new Microsoft.Maps.Location(location.latitude+5,
location.longitude-5);
           points[6] = new Microsoft.Maps.Location(location.latitude, location.longitude-10);
           points[7] = location;

           // Create the arrow
           var red = new Microsoft.Maps.Color(200, 200, 0, 0);
           var arrow = new Microsoft.Maps.Polygon(points, {strokeColor:red, fillColor:red});

           map.entities.push(arrow);
              
       }
 
}
Microsoft.Maps.moduleLoaded('ArrowModule');