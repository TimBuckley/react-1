"use strict";

var Greeter = React.createClass({
	displayName: "Greeter",

	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"h1",
				null,
				"hello"
			)
		);
	}

});

ReactDOM.render(React.createElement(Greeter, null), document.getElementById("app"));
