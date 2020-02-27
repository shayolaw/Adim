function App() {
	return React.createElement(
		"div",
		{ className: "form" },
		React.createElement("img", { src: "Images/Adim Logo.png", alt: "logo" }),
		React.createElement(
			"h2",
			null,
			"Login To Your Account"
		),
		React.createElement(
			"form",
			{ action: "../login", method: "post" },
			React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement(
					"label",
					{ "for": "username" },
					"Email address"
				),
				React.createElement("input", { type: "email", className: "form-control", name: "username", id: "username", "aria-describedby": "emailHelp" }),
				React.createElement(
					"small",
					{ id: "emailHelp", className: "form-text text-muted" },
					"We'll never share your email with anyone else."
				)
			),
			React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement(
					"label",
					{ "for": "password" },
					"Password"
				),
				React.createElement("input", { type: "password", name: "password", "class": "form-control", id: "password" })
			),
			React.createElement(
				"button",
				{ type: "submit", "class": "btn btn-primary" },
				"Submit"
			)
		)
	);
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));