const render = (root)=>{
	root.empty();

	const wrapper = $("<div 'class=wrapper'></div>");
	//Append components
	wrapper.append(Header());
	wrapper.append(MovieGrid());

	root.append(wrapper);
};

const estado = {
	movies: movies,
	selectMovie: null
};

$( _ => {
	const root = $(".root");
	render(root);
});