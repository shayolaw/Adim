var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var addie = window.location.pathname;
var number = addie.slice(7, -6);
current = Number(Date.now());
function handleTime(time) {
	var newTime = current - Number(time);
	newTime = newTime / 60000 / 60 / 24;
	var eta = Math.floor(newTime) + "days";
	if (newTime < 1) {
		newTime = newTime * 24;
		eta = Math.floor(newTime) + " hrs";
		if (newTime < 1) {
			newTime = newTime * 60;
			eta = Math.floor(newTime) + "mins";
			if (newTime < 1) {
				newTime = newTime * 60;
				eta = Math.floor(newTime) + "secs";
			}
		}
	}
	return eta;
}

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
								{ href: "/allposts/1", className: "active" },
								React.createElement(
									"li",
									null,
									"Posts"
								)
							),
							React.createElement(
								"a",
								{ href: "/about" },
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

var Hero = function (_React$Component2) {
	_inherits(Hero, _React$Component2);

	function Hero(props) {
		_classCallCheck(this, Hero);

		var _this2 = _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).call(this, props));

		_this2.state = {
			image: "",
			sub: "",
			writer: "",
			topic: "",
			date: ""
		};
		return _this2;
	}

	_createClass(Hero, [{
		key: "render",
		value: function render() {
			var _this3 = this;

			fetch('/post/' + number + '/data').then(function (res) {
				return res.json();
			}).then(function (result) {
				_this3.setState({
					image: result.image,
					sub: result.sub,
					topic: result.topic,
					writer: result.writer,
					date: result.date
				});
			});
			var raw_date = new Date(this.state.date);
			var month = raw_date.getMonth();
			var day = raw_date.getDate();
			var year = raw_date.getFullYear();
			var date = day + "/" + month + "/" + year;
			if (this.state != null) {
				return React.createElement(
					"div",
					{ className: "hero",
						style: {
							backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/" + this.state.image + ")",
							backgroundSize: 'cover',
							backgroundPosition: 'center center'
						} },
					React.createElement(
						"h3",
						null,
						this.state.sub,
						" "
					),
					React.createElement(
						"p",
						null,
						this.state.topic,
						"    /     ",
						this.state.writer,
						"      /     ",
						date
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

	return Hero;
}(React.Component);

var Article = function (_React$Component3) {
	_inherits(Article, _React$Component3);

	function Article(props) {
		_classCallCheck(this, Article);

		var _this4 = _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).call(this, props));

		_this4.state = {
			writeup: ""
		};
		return _this4;
	}

	_createClass(Article, [{
		key: "render",
		value: function render() {
			var _this5 = this;

			fetch('/post/' + number + '/data').then(function (res) {
				return res.json();
			}).then(function (result) {
				_this5.setState({
					writeup: result.writeup
				});
			});
			if (this.state != null) {
				return React.createElement(
					"div",
					{ className: "article" },
					React.createElement(
						"p",
						null,
						this.state.writeup
					)
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

	return Article;
}(React.Component);

function Comment(props) {
	return React.createElement(
		"div",
		{ className: "comment" },
		React.createElement(
			"h4",
			null,
			"Leave a comment"
		),
		React.createElement(
			"form",
			{ action: "/post/" + number + "/comment",
				method: "post" },
			React.createElement(
				"label",
				{ "for": "name" },
				"Name"
			),
			React.createElement("input", { type: "text", placeholder: "Name",
				name: "name" }),
			React.createElement(
				"label",
				{ "for": "comment" },
				"Comment"
			),
			React.createElement("textarea", { name: "comment", rows: "10" }),
			React.createElement(
				"button",
				{ type: "submit" },
				"Submit"
			)
		)
	);
}

var Message = function (_React$Component4) {
	_inherits(Message, _React$Component4);

	function Message(props) {
		_classCallCheck(this, Message);

		var _this6 = _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).call(this, props));

		_this6.state = {
			comment: []
		};
		return _this6;
	}

	_createClass(Message, [{
		key: "render",
		value: function render() {
			var _this7 = this;

			fetch('/post/' + number + '/data').then(function (res) {
				return res.json();
			}).then(function (result) {
				_this7.setState({
					comment: result.comments
				});
			});
			var comments = this.state.comment.map(function (i) {
				return React.createElement(
					"div",
					{ id: "comments" },
					React.createElement("img", { src: "/" + i.image, id: "dp" }),
					React.createElement(
						"h5",
						null,
						i.name
					),
					React.createElement(
						"em",
						null,
						handleTime(i.time)
					),
					React.createElement(
						"p",
						null,
						i.comment
					)
				);
			});
			return React.createElement(
				"div",
				{ id: "message" },
				comments,
				React.createElement(
					"center",
					null,
					React.createElement(
						"h6",
						null,
						"Load More . . ."
					)
				)
			);
		}
	}]);

	return Message;
}(React.Component);

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
	React.createElement(Hero, null),
	React.createElement(
		"div",
		{ className: "container" },
		React.createElement(Socials, null),
		React.createElement(Article, null),
		React.createElement(Comment, null),
		React.createElement(Message, null)
	),
	React.createElement(Footer, null)
), document.getElementById('root'));