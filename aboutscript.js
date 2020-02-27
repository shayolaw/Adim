var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_React$Component) {
	_inherits(Nav, _React$Component);

	function Nav(props) {
		_classCallCheck(this, Nav);

		return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));
	}

	_createClass(Nav, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "Navbar" },
				React.createElement(
					"nav",
					null,
					React.createElement(
						"ul",
						{ className: "menu" },
						React.createElement(
							"li",
							{ className: "title" },
							"Adim"
						),
						React.createElement(
							"li",
							{ className: "burgers" },
							React.createElement("span", { id: "burger-1" }),
							React.createElement("span", { id: "burger-2" }),
							React.createElement("span", { id: "burger-3" })
						)
					),
					React.createElement("img", { src: "/Images/Adim Logo.png" }),
					React.createElement(
						"div",
						{ className: "options" },
						React.createElement(
							"ul",
							null,
							React.createElement(
								"a",
								{ href: "/" },
								React.createElement(
									"li",
									null,
									"Home"
								)
							),
							React.createElement(
								"a",
								{ href: "/allposts/1" },
								React.createElement(
									"li",
									null,
									"Posts"
								)
							),
							React.createElement(
								"a",
								{ href: "/about", className: "active" },
								React.createElement(
									"li",
									null,
									"About"
								)
							),
							React.createElement(
								"a",
								{ href: "contact.html" },
								React.createElement(
									"li",
									null,
									"Contact"
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Nav;
}(React.Component);

var Hero = function (_React$Component2) {
	_inherits(Hero, _React$Component2);

	function Hero(props) {
		_classCallCheck(this, Hero);

		var _this2 = _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).call(this, props));

		_this2.state = {
			image: ""
		};
		return _this2;
	}

	_createClass(Hero, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this3 = this;

			fetch('/profile-data').then(function (res) {
				return res.json();
			}).then(function (result) {
				_this3.setState({
					image: result[0].image
				});
			});
		}
	}, {
		key: "render",
		value: function render() {

			if (this.state != null) {
				return React.createElement(
					"div",
					{ className: "hero" },
					React.createElement(
						"h2",
						null,
						"Getting To Know ",
						React.createElement(
							"span",
							{ className: "orange" },
							"More About The"
						),
						" Writer"
					),
					React.createElement("img", { src: this.state.image })
				);
			} else {
				return React.createElement(
					"h2",
					null,
					"Loading"
				);
			}
		}
	}]);

	return Hero;
}(React.Component);

var Bio = function (_React$Component3) {
	_inherits(Bio, _React$Component3);

	function Bio(props) {
		_classCallCheck(this, Bio);

		var _this4 = _possibleConstructorReturn(this, (Bio.__proto__ || Object.getPrototypeOf(Bio)).call(this, props));

		_this4.state = {
			bio: "",
			name: ""
		};
		return _this4;
	}

	_createClass(Bio, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this5 = this;

			fetch('/profile-data').then(function (res) {
				return res.json();
			}).then(function (result) {
				_this5.setState({
					name: result[0].name,
					bio: result[0].writeup
				});
			});
		}
	}, {
		key: "render",
		value: function render() {
			if (this.state != null) {
				return React.createElement(
					"div",
					{ className: "bio" },
					React.createElement(
						"center",
						null,
						React.createElement(
							"h2",
							null,
							"About ",
							this.state.name
						)
					),
					React.createElement(
						"p",
						null,
						this.state.bio
					)
				);
			} else {
				return React.createElement(
					"h2",
					null,
					"Loading..."
				);
			}
		}
	}]);

	return Bio;
}(React.Component);

function Socials(props) {
	return React.createElement(
		"ul",
		{ className: "social-nav" },
		React.createElement(
			"li",
			null,
			React.createElement("a", { href: "", className: "fa fa-facebook-f" })
		),
		React.createElement(
			"li",
			null,
			React.createElement("a", { href: "", className: "fa fa-twitter" })
		),
		React.createElement(
			"li",
			null,
			React.createElement("a", { href: "", className: "fa fa-google" })
		),
		React.createElement(
			"li",
			null,
			React.createElement("a", { href: "", className: "fa fa-instagram" })
		)
	);
}
function Footer() {
	return React.createElement(
		"div",
		{ className: "footer" },
		React.createElement(
			"footer",
			null,
			React.createElement(
				"ul",
				{ className: "creator" },
				React.createElement(
					"li",
					null,
					React.createElement("a", { href: "" })
				),
				React.createElement(
					"li",
					null,
					React.createElement("a", { href: "" })
				)
			),
			React.createElement(
				"ul",
				{ className: "footer-nav" },
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: "" },
						"About Us"
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: "" },
						"Contact"
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: "" },
						"Terms & Conditions"
					)
				)
			),
			React.createElement(
				"ul",
				{ className: "footer-social-nav" },
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: "" },
						React.createElement("i", { className: "fa fa-facebook-f" }),
						"Facebook"
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: "" },
						React.createElement("i", { className: "fa fa-twitter" }),
						"Twitter"
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: "" },
						React.createElement("i", { className: "fa fa-google" }),
						"Google"
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: "" },
						React.createElement("i", { className: "fa fa-instagram" }),
						"Instagram"
					)
				)
			),
			React.createElement(
				"form",
				{ className: "subscribe" },
				React.createElement(
					"label",
					{ "for": "email" },
					"Subscribe to our newsletter"
				),
				React.createElement("input", { type: "email" }),
				React.createElement(
					"button",
					null,
					"Join"
				)
			),
			React.createElement(
				"ul",
				{ className: "address" },
				React.createElement(
					"li",
					null,
					"497 Evergreen Rd. Roseville, CA 95673 +44 345 678 903 adobexd@mail.com"
				)
			)
		)
	);
}
ReactDOM.render(React.createElement(
	"div",
	null,
	React.createElement(Nav, null),
	React.createElement(
		"div",
		{ className: "container" },
		React.createElement(Hero, null),
		React.createElement(Bio, null),
		React.createElement("div", { className: "decor" })
	),
	React.createElement(Footer, null)
), document.getElementById('root'));