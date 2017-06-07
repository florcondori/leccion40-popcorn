const movieItem= (movie)=>{
	const item = $("<a href='#' class='movie'></a>");
	const img = $("<img src="+movie.url+"></img>");
	const p = $("<p>"+movie.title+"</p>");

	item.append(img);
	item.append(p);
	return item;
};

const MovieGrid = ()=>{
	const movieContenedor = $("<div class='movieContenedor'></div>");
	estado.movies.forEach((movie)=>{
		movieContenedor.append(movieItem(movie));
	});

	return movieContenedor;
};