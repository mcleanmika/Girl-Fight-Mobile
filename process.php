<html>

  <head>
     <title>Geolocation</title>
     <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
     <meta charset="utf-8">
     <link rel="index" type="text/css" href="index.php">
     <link rel="event" type="text/css" href="event.php">
     <link rel="stylesheet" type="text/css" href="stylesheet.css">
     <script src="script.js"></script>

  </head>

  <body>
    <div id="floating-panel">

<?php echo $_GET["name"]; ?><br>
<?php echo $_GET["email"]; ?><br>
<?php echo $_GET["text"]; ?><br>
 
</div>

  <div id="map"></div>

    <script async defer
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBPwqlxUQoOQTibIOj7gisEuoB8xgkIwso&callback=initMap">
    </script>

</body>
</html>