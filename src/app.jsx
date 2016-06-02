

var Greeter = React.createClass({
	render: function() {
		return (
			<div>
				<h1>hello</h1>
			</div>
		);
	}

});


ReactDOM.render(
	<Greeter/>,
	document.getElementById("app")
);
