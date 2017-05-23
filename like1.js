
// var book1 = {name:"Os Maias", price:"15 euros", description:"Os Maias é uma das obras mais conhecidas do escritor português Eça de Queiroz. O livro foi publicado no Porto em 1888. A obra ocupa-se da história de uma família (Maia) ao longo de três gerações, centrando-se depois na última com a história de amor entre Carlos da Maia e Maria Eduarda.", image: "osmaias.jpeg", href1:"http://www.google.com", href2:"https://www.bertrand.pt/", href3:"https://www.amazon.com/", href4:"http://www.fnac.pt/"};

// var book2 = {name:"O Crime do Padre Amaro", price:"16 euros", description:"O Crime do Padre Amaro é uma das obras do escritor português Eça de Queirós mais difundidas por todo o mundo. Trata-se de uma obra polêmica, que causou protestos da Igreja Católica, ao ser publicada em 1875, em Portugal. Esta obra é mais um documento humano e social do país e da sua época escrito com a maestria de Eça de Queirós. É também a primeira realização artística do realismo português.", image: "crime.jpg", href1:"http://www.google.com", href2:"https://www.bertrand.pt/", href3:"https://www.amazon.com/", href4:"http://www.fnac.pt/"};

// var book3 = {name:"A Cidade E As Serras", price:"17 euros", description:"A Cidade e as Serras é um romance de Eça de Queirós, publicado em 1901, pertencente à última fase do escritor, onde se afasta do realismo e abandona a crítica pesada que fazia à sociedade portuguesa da época. O próprio título já indica sobre o enredo. Nesse livro, Queirós faz uma comparação entre a vida módica e agitada de Paris e a vida tranquila e pacata na cidade serrana de Tormes.", image: "acidade.jpg", href1:"http://www.google.com", href2:"https://www.bertrand.pt/", href3:"https://www.amazon.com/", href4:"http://www.fnac.pt/"};

// var library = new Array(book1, book2, book3); 

// function loadbooks(){

// 	$allBooks = $(".book");
// 	jQuery.each(library, function(index, value){
// 		$book = $allBooks.eq(index);
// 		$("h1", $book).text(value.name);
// 		$(".price", $book).text(value.price);
// 		$(".description", $book).text(value.description);
// 		$(".image", $book).attr("src", value.image);
// 		$(".google", $book).attr("href", value.href1);
// 		$(".bertrand", $book).attr("href", value.href2);
// 		$(".amazon", $book).attr("href", value.href3);
// 		$(".fnac", $book).attr("href", value.href4);

// 	});
// }

// loadbooks();

var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
db.transaction(function (tx) {
	tx.executeSql('CREATE TABLE IF NOT EXISTS books (id unique, opinion)');
 });


var APIKey = "AIzaSyC58lzBBAG5VWEGSRCXRpLWkasXTkvESzM";
var UserID = "101835032051663434460";
var ShelfID = "1001";


function LoadDataWithHTML (book){
	
	var HTMLtoInsert =
	`<div class="book col-sm-4 col-sm-offset-4">
	<input type="hidden" class="hiddenFieldId"></input>
	<img class="center-block image">
	<h1></h1>
	<p class="price"></p>
	<p class="description"></p>
	<div class="fixfloat"></div>
	<br>
	<a class="alignleft google" target="_blank">Google</a>
	<a class="alignright bertrand" target="_blank">Bertrand</a>

	<br>
	<a class="alignleft amazon" target="_blank">Amazon</a>
	<a class="alignright fnac" target="_blank">Fnac Portugal</a>
	</div>`;

	
	$("#bookContainer").append(HTMLtoInsert);
	$bookHTML = $(".book").eq(-1);

	$("h1", $bookHTML).text(book.volumeInfo.title);
	if (book.saleInfo.saleability == "NOT_FOR_SALE"){
		$(".price", $bookHTML).text("Não está para venda neste momento.")
	}
	else {$(".price", $bookHTML).text(book.saleInfo.listPrice.amount)};

	
	$(".description", $bookHTML).text(book.volumeInfo.description);
	$(".image", $bookHTML).attr("src", book.volumeInfo.imageLinks.thumbnail);

	$('.hiddenFieldId',$bookHTML).text(book.id);



		// $allBooks = $(".book");

		// $book = $allBooks.eq(index);
		// $("h1", $book).text(value.name);
		// $(".price", $book).text(value.price);
		// $(".description", $book).text(value.description);
		// $(".image", $book).attr("src", value.image);
		// $(".google", $book).attr("href", value.href1);
		// $(".bertrand", $book).attr("href", value.href2);
		// $(".amazon", $book).attr("href", value.href3);
		// $(".fnac", $book).attr("href", value.href4);



	}

	function LoadDataWithHTML1 (paginafinal){
	
	var HTMLtoInsert1 = 
			`<div class="paginafinal">
			<h1 style="text-align:center;">Resultados <br>
			<button class="results" type="button";>R</button>
			</h1>
			<p id="resultslike"></p>
			<p id="resultsdislike"></p>
			<div style="margin: auto; text-align: center">
			<button id="restartButton" type="button">FirstBook</button>
			<button id="consultDb" type="button">Consultar Database</button>
			<p class="titulolivro"></p>
			<p></p>
			<p></p>
			</div>
		</div>`;

	$("#endPage").append(HTMLtoInsert1);
	$bookHTML1 = $(".paginafinal");

	$(".titulolivro", $bookHTML1).text(book.volumeInfo.title);
	
	// if (book.saleInfo.saleability == "NOT_FOR_SALE"){
	// 	$(".price", $bookHTML).text("Não está para venda neste momento.")
	// }
	// else {$(".price", $bookHTML).text(book.saleInfo.listPrice.amount)};

	
	// $(".description", $bookHTML).text(book.volumeInfo.description);
	// $(".image", $bookHTML).attr("src", book.volumeInfo.imageLinks.thumbnail);

	// $('.hiddenFieldId',$bookHTML).text(book.id);

	}

 	



	// var APIKey = "AIzaSyC58lzBBAG5VWEGSRCXRpLWkasXTkvESzM";
	// var UserID = "101835032051663434460";
	// var ShelfID = "1001";

	$.ajax({
		url:"https://www.googleapis.com/books/v1/users/" + UserID + "/bookshelves/" + ShelfID + "/volumes?key=" + APIKey,

	}).done(function(data){
		$.each(data.items,function(index, item){
			console.log(item);
			var book = item;
			LoadDataWithHTML(book);
			if(!($(".book").eq(0).hasClass("active"))){
				$(".book").eq(0).addClass("active");
			}
		});
	}); 


	var inAnimation = false;

	$("#like, #dislike").click(function(){
		if (inAnimation==false){
			
			inAnimation=true;
			$allBooks = $(".book");
		
		$book = $(".book.active");
		$next = $book.next(".book");

		if( $allBooks.index($book) == $allBooks.length-1){
			$next = $allBooks.eq(0);
			$("#bookContainer, #like, #dislike, #gotoresults, .buttons").hide();
			$("#endPage").show();
		}

		$id = $('.hiddenFieldId',$book).text();
		$opinion = $(this).attr('data-opinion');

		db.transaction(function (tx) {
			tx.executeSql('INSERT INTO books(id, opinion) VALUES(?,?)', [$id, $opinion]);
			});

		$book.fadeOut(300,function(){

			$book.removeClass("active");

			$next.fadeIn(300, function(){
				$next.addClass("active");
				inAnimation = false;
			})
		})
		};

	});

	$('#consultDb').click(function(){
	db.transaction(function (tx) {
		tx.executeSql('SELECT * FROM books', [], function (tx, results) {
	   		$.each(results.rows,function(index,item){
				console.log(item);
			});
		}, null);
	});
});

	$("#restartButton").click(function(){
		$("#endPage").hide();
		$("#bookContainer,#like, #dislike, #gotoresults").show();
	});

	// $book1 = $(".book").eq(0);
	// $("h1", $book1).text(book1.name);
	// $(".price", $book1).text(book1.price);
	// $(".description", $book1).text(book1.description);
	// $(".image", $book1).attr("src", book1.image);
	// $(".google", $book1).attr("href", book1.href1);
	// $(".bertrand", $book1).attr("href", book1.href2);
	// $(".amazon", $book1).attr("href", book1.href3);
	// $(".fnac", $book1).attr("href", book1.href4);

	// $book2 = $(".book").eq(1);
	// $("h1", $book2).text(book2.name);
	// $(".price", $book2).text(book2.price);
	// $(".description", $book2).text(book2.description);
	// $(".image", $book2).attr("src", book2.image);
	// $(".google", $book2).attr("href", book2.href1);
	// $(".bertrand", $book2).attr("href", book2.href2);
	// $(".amazon", $book2).attr("href", book2.href3);
	// $(".fnac", $book2).attr("href", book2.href4);

	// $book3 = $(".book").eq(2);
	// $("h1", $book3).text(book3.name);
	// $(".price", $book3).text(book3.price);
	// $(".description", $book3).text(book3.description);
	// $(".image", $book3).attr("src", book3.image);
	// $(".google", $book3).attr("href", book3.href1);
	// $(".bertrand", $book3).attr("href", book3.href2);
	// $(".amazon", $book3).attr("href", book3.href3);
	// $(".fnac", $book3).attr("href", book3.href4);

// $book1(0).html($("h1", "$(".book").eq(0)"));




// var count = 0;

// if ($("button.like").click(function(){
// 	count++;
// 	console.log(count);
// }));

var countlike = 0;
var countdislike = 0;

$("#like").click(function(){
	countlike++;
});

$("#dislike").click(function(){
	countdislike++;
});

$("#endPage button.results").click(function(){
	$("#resultslike").text("Gostos: " + countlike);
	$("#resultsdislike").text("Não Gostos: " + countdislike);
});

$("#date").text(Date());


$("#restartButton").click(function(){
	$("#endPage").hide();
	$("#bookContainer, .buttons").show();
	countlike = 0;
	countdislike = 0;
});

$("#gotoresults").click(function(){
		$("#endPage").show();
		$("#bookContainer, #like, #dislike, #gotoresults, .buttons").hide();
	});


// var APIKey = "AIzaSyC58lzBBAG5VWEGSRCXRpLWkasXTkvESzM";
// var UserID = "101835032051663434460";
// var ShelfID = "1001";

// $.ajax({
// 	url:"https://www.googleapis.com/books/v1/users/" + UserID + "/bookshelves/" + ShelfID + "/volumes?key=" + APIKey,

// }).done(function(data){
// 	console.log(data);
// 	$.each(data.items),function(index, item){
// 		var book = ;
// 		LoadDataWithHTML(book);
// 	}
// }); 



