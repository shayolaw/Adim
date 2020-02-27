var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var heroItems;
var posts;
fetch("/gethome").then(function (res) {
	return res.json();
}).then(function (result) {
	heroItems = result.heroItems;
	posts = result.posts;
	console.log(heroItems);
}, function (error) {
	console.log(error);
});

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
					React.createElement("img", { src: "Images/Adim Logo.jpg" }),
					React.createElement(
						"div",
						{ className: "options" },
						React.createElement(
							"ul",
							null,
							React.createElement(
								"a",
								{ href: "/", className: "active" },
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
function dateConvert(num) {
	var raw_date = new Date(num);
	var month = raw_date.getMonth();
	var day = raw_date.getDate();
	var year = raw_date.getFullYear();
	var date = day + "-" + month + "-" + year;
	return date;
}

var Hero = function (_React$Component2) {
	_inherits(Hero, _React$Component2);

	function Hero(props) {
		_classCallCheck(this, Hero);

		var _this2 = _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).call(this, props));

		_this2.state = {
			heroItems: []
		};
		return _this2;
	}

	_createClass(Hero, [{
		key: "render",
		value: function render() {
			var _this3 = this;

			fetch("/gethome").then(function (res) {
				return res.json();
			}).then(function (result) {
				_this3.setState({
					heroItems: result.heroItems
				});
			}, function (error) {
				console.log(error);
			});

			if (this.state.heroItems.length > 0) {
				var address = "/posts/" + this.state.heroItems[0].id + "/hello";
				var address2 = "/posts/" + this.state.heroItems[1].id + "/hello";
				var address3 = "/posts/" + this.state.heroItems[2].id + "/hello";
				return React.createElement(
					"ul",
					{ className: "hero" },
					React.createElement(
						"li",
						{ className: "main",
							style: { background: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(" + this.state.heroItems[0].image2 + ")",
								backgroundSize: "640px 480px",
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center",
								gridArea: "main"
							} },
						React.createElement(
							"a",
							{ href: address },
							React.createElement(
								"h5",
								null,
								this.state.heroItems[0].number
							),
							React.createElement(
								"h6",
								null,
								this.state.heroItems[0].sub
							),
							React.createElement(
								"p",
								null,
								this.state.heroItems[0].topic,
								"/ ",
								dateConvert(this.state.heroItems[0].date)
							)
						),
						React.createElement(
							"div",
							{ className: "icons" },
							React.createElement("span", { className: "active" }),
							React.createElement("span", null),
							React.createElement("span", null)
						)
					),
					React.createElement(
						"li",
						{ className: "other",
							style: { background: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(" + this.state.heroItems[1].image2 + ")",
								height: "215px",
								backgroundSize: "640px 480px",
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center",
								gridArea: "first"
							} },
						React.createElement(
							"a",
							{ href: address2 },
							React.createElement(
								"h5",
								null,
								this.state.heroItems[1].number
							),
							React.createElement(
								"h6",
								null,
								this.state.heroItems[1].sub
							),
							React.createElement(
								"p",
								null,
								this.state.heroItems[1].topic,
								"/ ",
								dateConvert(this.state.heroItems[1].date)
							)
						)
					),
					React.createElement(
						"li",
						{ className: "sother",
							style: { background: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(" + this.state.heroItems[2].image2 + ")",
								height: "215px",
								backgroundSize: "640px 480px",
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center",
								gridArea: "second"
							} },
						React.createElement(
							"a",
							{ href: address3 },
							React.createElement(
								"h5",
								null,
								this.state.heroItems[2].number
							),
							React.createElement(
								"h6",
								null,
								this.state.heroItems[2].sub
							),
							React.createElement(
								"p",
								null,
								this.state.heroItems[2].topic,
								"/ ",
								dateConvert(this.state.heroItems[2].date)
							)
						)
					)
				);
			} else {
				return React.createElement(
					"h1",
					null,
					"Loading..."
				);
			}
		}
	}]);

	return Hero;
}(React.Component);

var Post = function (_React$Component3) {
	_inherits(Post, _React$Component3);

	function Post(props) {
		_classCallCheck(this, Post);

		var _this4 = _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).call(this, props));

		_this4.state = {
			posts: []
		};
		return _this4;
	}

	_createClass(Post, [{
		key: "render",
		value: function render() {
			var _this5 = this;

			fetch("/gethome").then(function (res) {
				return res.json();
			}).then(function (result) {
				_this5.setState({
					posts: result.posts
				});
			}, function (error) {
				console.log(error);
			});
			var post = this.state.posts.map(function (i) {
				return React.createElement(
					"div",
					{ className: "card" },
					React.createElement("div", { id: "image",
						style: { background: "url(" + i.image2 + ")",
							backgroundSize: "cover",
							backgroundPosition: "center"
						} }),
					React.createElement(
						"h6",
						null,
						i.header
					),
					React.createElement(
						"p",
						null,
						i.summary
					),
					React.createElement(
						"h5",
						null,
						i.topic,
						" / ",
						React.createElement(
							"span",
							{ className: "date" },
							dateConvert(i.date)
						)
					),
					React.createElement(
						"form",
						{ action: "posts/" + i.id + "/hello", method: "get" },
						React.createElement(
							"button",
							{ type: "submit" },
							"Read More"
						)
					)
				);
			});
			if (this.state.posts.length > 0) {
				return React.createElement(
					"section",
					{ className: "posts" },
					React.createElement(
						"h3",
						null,
						"Latest Posts"
					),
					React.createElement("div", { id: "underline" }),
					React.createElement(
						"div",
						{ className: "post" },
						post
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

	return Post;
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
	React.createElement(Socials, null),
	React.createElement(Hero, null),
	React.createElement(Post, null),
	React.createElement(Footer, null)
), document.getElementById('root'));