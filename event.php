<html>

    <head>

    
        <title>Girl Fight</title> 


        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> 
		
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js">	
		</script>

    <script src="map.js"> </script>

  
        <link rel="shortcut icon" href="media/logo.png" /> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css" /> 
        <link rel="stylesheet" href="stylesheet.css" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet">
    </head>

<body>

	<h1 style="text-align: center">CREATE AN EVENT</h1>

<div class="container">
  <form action="process.php">
    <div class="row">
      <div class="col-75">
        <input type="text" name="name" placeholder="NAME OF EVENT">
      </div>
    </div>

    <br>
    <br>

    <div class="row">
      <div class="col-75">
        <input type="text" name="email" placeholder="LOCATION">
      </div>
    </div>

    <br>
    <br>


    <div class="row">
      <div class="col-75">
        <textarea name="text" rows="5" cols="40" id="text" placeholder="ABOUT THE EVENT" ></textarea>
      </div>
    </div>

    <br>

    <div class="row">
    	 <div class="col-25">
      <input type="submit" value="SUBMIT">
    </div>
   </div>
  </form>
</div>
 


</body>
</html>