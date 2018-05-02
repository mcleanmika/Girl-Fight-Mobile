
      
      var map, infoWindow;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -41.293387,  lng: 174.778204},
          zoom: 14,        
                    // This is where you would paste any style found on Snazzy Maps.
              styles: [{"featureType":"water","elementType":"geometry.fill","stylers":
              [{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":
              [{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":
              [{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":
              [{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":
              [{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[
              {"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":
              [{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":
              [{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":
              [{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":
              [{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":
              [{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":
              [{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":
              [{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":
              [{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":
              [{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":
              [{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":
              [{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}]

                
        });
        infoWindow = new google.maps.InfoWindow;


        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('your location');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }


