var Greeter = React.createClass({
	render: funtion(){
		
		return (
			<div>
				<h1>hello</h1>
			</div>
		);
	};

});


ReactDOM.render(
	<Greeter/>,
	document.getElementByID("app")
);