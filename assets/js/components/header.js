const Header = ()=>{
	const header = $("<header></header>");
	const h1 = $("<h1>Porpcorn time</h1>");

	header.append(h1);
	return header;
};