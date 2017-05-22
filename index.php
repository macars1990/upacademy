<!DOCTYPE html>
<html>
<head>
	<title>TinderBooks</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=0.5">
	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="book1.css">
</head>

<body>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">TinderBook</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a id="resultados" href="#resultados">EndPage</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav>

	<div class="header container-fluid link">
		<h1><a href="file:///Users/alunomanha/Desktop/MiguelSerraninho/aula8/tinderbooks1.html">TinderBook<a></h1>	
	</div>
	
		<div id="bookContainer" class="row">
		<!-- <div class="book col-sm-4 col-sm-offset-4 active">
			<img class="center-block image">
			<h1></h1>
			<p class="price"></p>
			<p class="description"></p>
			<button class="alignleft dislike" type="button";">Não Gosto</button>
			<button class="alignright like" type="button";">Gosto</button>
			<div class="fixfloat"></div>
			<br>
			<a class="alignleft google" target="_blank">Google</a>
			<a class="alignright bertrand" target="_blank">Bertrand</a>

			<br>
			<a class="alignleft amazon" target="_blank">Amazon</a>
			<a class="alignright fnac" target="_blank">Fnac Portugal</a>
		</div>

		<div class="book col-sm-4 col-sm-offset-4">
			<img src="" class="center-block image">
			<h1></h1>
			<p class="price"></p>
			<p class="description"></p>
			<button class="alignleft dislike" type="button";">Não Gosto</button>
			<button class="alignright like" type="button";">Gosto</button>
			<div class="fixfloat"></div>
			<br>
			<a class="alignleft google" target="_blank">Google</a>
			<a class="alignright bertrand" target="_blank">Bertrand</a>

			<br>
			<a class="alignleft amazon" target="_blank">Amazon</a>
			<a class="alignright fnac" target="_blank">Fnac Portugal</a>
		</div>

		<div class="book col-sm-4 col-sm-offset-4">
			<img src="acidade.jpg" class="center-block image">
			<h1></h1>
			<p class="price"></p>
			<p class="description"></p>
			<button class="alignleft dislike" type="button";">Não Gosto</button>
			<button class="alignright like" type="button";">Gosto</button>
			<div class="fixfloat"></div>
			<br>
			<a class="alignleft google" target="_blank">Google</a>
			<a class="alignright bertrand" target="_blank">Bertrand</a>

			<br>
			<a class="alignleft amazon" target="_blank">Amazon</a>
			<a class="alignright fnac" target="_blank">Fnac Portugal</a>
		</div> -->
		</div>

		<div class="row"> 
		
		<div class="buttons col-sm-4 col-sm-offset-4">
			<br>
			<button data-opinion="dislike" id="dislike" class="alignleft" type="button";">Não Gosto</button>
			<button data-opinion="like" id="like" class="alignright" type="button";">Gosto</button>
			<br>
			<br>
			<button id="gotoresults" class="center" type="button";>Resultados Finais</button>
		</div>
		</div>

	<div id="endPage" class="col-sm-4 col-sm-offset-4">
			<h1 style="text-align:center;">Resultados <br>
			<button class="results" type="button";>R</button>
			</h1>
			<p id="resultslike"></p>
			<p id="resultsdislike"></p>
			<div style="margin: auto; text-align: center">
			<button id="restartButton" type="button">FirstBook</button>
			<button id="consultDb" type="button">Consultar Database</button>
			</div>
	</div>

	<div class="clearfix"></div>



	<footer class="container-fluid">
		<br>
		<p style="text-align: center; color: blue;" id="date"></p>
		<p style="text-align: center; color: blue;">Elaborado por: MiguelAlb.</p>	
	</footer>
			

	<script type="text/javascript" src="jquery-3.2.1.js">

	</script>

	<script type="text/javascript" src="like1.js">

	</script>

</body>
</html>