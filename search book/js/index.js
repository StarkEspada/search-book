/*var apiKey = "?AIzaSyDlLIPOoHSSsuMaVuG3IEqJZi5ntTA-OJA";
var link = "https://www.googleapis.com/books/v1/volumes?q=Гарри Поттер и Узник Азкабана"
var link = "www.googleapis.com/books/v1/volumes?q="

var field = $(".field");
console.log(field)

www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes& key = yourAPIKey


$.getJSON(link,function (data) {

console.log(data)
})	*/

/*var proba = "https://www.googleapis.com/books/v1/volumes?q=search+terms"

$.getJSON(proba, function(data){
	console.log(data)
})*/


var link = "https://www.googleapis.com/books/v1/volumes?q="
var j = 0;

var add = document.querySelector(".button-search");
var searchField = document.querySelector(".search-field");
var containerFoundBooks = document.querySelector(".container-found-books");

add.addEventListener('click', search)


	function search(){
		containerFoundBooks.innerHTML = "";
		var inputBook = searchField.value

		var query = link + inputBook
		/*console.log(query)*/


		$.getJSON(query,function (data) {

		/*console.log(data)*/
/*name-book  link-book-score */

			for(var i = 0; i < data["items"].length; i++){
				for(var j = 0; j < data["items"][i]["volumeInfo"].length; j++){
					console.log("hello")
				}
				/*var checkingTheAvailabilityOfImages = data["items"][i]["volumeInfo"]["readingModes"]["image"];*/
				var checkingImageBook = data["items"][i]["volumeInfo"]["imageLinks"];
				var checkingAutors = data["items"][i]["volumeInfo"]["authors"];
				var checkingPublishing = data["items"][i]["volumeInfo"]["publisher"];
				var checkingCategories = data["items"][i]["volumeInfo"]["categories"];
				var datePublished = data["items"][i]["volumeInfo"]["publishedDate"];
				var test = data["items"][i]["volumeInfo"];
				var headerBook = data["items"][i]["volumeInfo"]["title"];
				var moreInfoBook = data["items"][i]["volumeInfo"]["infoLink"];
				var imageStatik = "http://books.google.com/books/content?id=zYw3sYFtz…=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
				console.log(test)
				var box = document.createElement("div")
				var bookImage = document.createElement("div")
				var bookInfo = document.createElement("div")
				var nameBook = document.createElement("div")
				var boxLink = document.createElement("div")
				var bookAutor = document.createElement("div")
				var bookPublishing = document.createElement("div")
				var bookCategories = document.createElement("div")
				var publishedDate = document.createElement("div")
				var linkbook = document.createElement("a")
				var img = document.createElement("img")
				img.style.width = 100 + "%"
				img.style.height = 100 + "%"
				linkbook.setAttribute("href", moreInfoBook);
 				box.classList.add("books")
				bookImage.classList.add("book-image")
				bookInfo.classList.add("book-info")
				nameBook.classList.add("name-book")
				boxLink.classList.add("link-book-score")
				linkbook.classList.add("link-book")
				bookAutor.classList.add("autor-book")
				bookPublishing.classList.add("book-publishing")
				bookCategories.classList.add("book-categories")
				publishedDate.classList.add("published-date")
				containerFoundBooks.appendChild(box);
				box.appendChild(bookImage);
				box.appendChild(bookInfo);
				bookInfo.appendChild(nameBook);
				bookInfo.appendChild(bookAutor);
				bookInfo.appendChild(bookPublishing);
				bookInfo.appendChild(bookCategories);
				bookInfo.appendChild(publishedDate)
				bookInfo.appendChild(boxLink);
				boxLink.appendChild(linkbook);
				bookImage.appendChild(img)
				
				linkbook.innerHTML = "More Info";
				nameBook.innerHTML = headerBook;
				publishedDate.innerHTML = datePublished + " год.";
					/*console.log(test)*/
				/*if(checkingTheAvailabilityOfImages === true){
					var imageBook = data["items"][i]["volumeInfo"]["imageLinks"]["thumbnail"];
					img.setAttribute("src", imageBook)
				} else {
					img.setAttribute("src", imageStatik)
					
				}*/
				if(checkingImageBook !== undefined){
					var imageBook = data["items"][i]["volumeInfo"]["imageLinks"]["smallThumbnail"];
					img.setAttribute("src", imageBook)
				} else {
					img.setAttribute("src", imageStatik)
				}

				if(checkingAutors !== undefined){
					for(var j = 0; j < checkingAutors.length; j++){
						var autor = data["items"][i]["volumeInfo"]["authors"][j]
						bookAutor.innerHTML = autor + ".";
					}
				} else {
					bookAutor.innerHTML = "Автор неуказан.";
				
				}

				if(checkingPublishing !== undefined){
					bookPublishing.innerHTML = checkingPublishing + ".";
				} else {
					bookPublishing.innerHTML = "Издательство неуказано."
				}

				if (checkingCategories !== undefined){
					bookCategories.innerHTML = checkingCategories + "."
				} else {
					bookCategories.innerHTML = "Категория неуказана."
				}
			}
		})


	};





