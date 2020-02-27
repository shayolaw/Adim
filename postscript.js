var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function dateConvert(num) {
	var raw_date = new Date(num);
	var month = raw_date.getMonth();
	var day = raw_date.getDate();
	var year = raw_date.getFullYear();
	var date = day + "-" + month + "-" + year;
	return date;
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
					React.createElement("img", { src: "/Images/Adim Logo.jpg" }),
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

var Posts = function (_React$Component2) {
	_inherits(Posts, _React$Component2);

	function Posts() {
		_classCallCheck(this, Posts);

		var _this2 = _possibleConstructorReturn(this, (Posts.__proto__ || Object.getPrototypeOf(Posts)).call(this));

		_this2.state = {
			posts: [],
			total: 0,
			currentPage: 1
		};
		_this2.handleClickRight = _this2.handleClickRight.bind(_this2);
		_this2.handleClickLeft = _this2.handleClickLeft.bind(_this2);
		return _this2;
	}

	_createClass(Posts, [{
		key: "handleClickRight",
		value: function handleClickRight() {
			var nextPage = this.state.currentPage + 1;
			location.replace('/allposts/' + nextPage);
		}
	}, {
		key: "handleClickLeft",
		value: function handleClickLeft() {
			var nextPage = this.state.currentPage - 1;
			location.replace('/allposts/' + nextPage);
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this3 = this;

			var currentP = window.location.pathname;
			currentP = currentP.slice(10);
			currentP = parseInt(currentP, 10);
			console.log(currentP);
			fetch('/totalposts').then(function (res) {
				return res.json();
			}).then(function (result) {
				_this3.setState({
					total: result.number,
					currentPage: currentP
				});
			});
			fetch('/allpostsdata/' + currentP).then(function (res) {
				return res.json();
			}).then(function (result) {
				_this3.setState({
					posts: result.posts
				});
			});
		}
	}, {
		key: "render",
		value: function render() {
			var pages = this.state.total / 10;
			if (pages % 10 != 0) {
				pages = Math.floor(pages) + 1;
			} else {
				pages = Math.floor(pages);
			}
			var poste = this.state.posts.map(function (i) {
				return React.createElement(
					"div",
					{ id: "post" },
					React.createElement("div", { id: "imgsect",
						style: {
							width: "90vw",
							height: "480px",
							backgroundImage: "url(/" + i.image + ")",
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center'

						} }),
					React.createElement(
						"h3",
						null,
						i.sub
					),
					React.createElement(
						"h6",
						null,
						i.writer,
						",",
						dateConvert(i.date)
					),
					React.createElement(
						"p",
						null,
						i.writeup
					),
					React.createElement(
						"a",
						{ href: i.address },
						"Read More"
					)
				);
			});
			if (this.state.posts.length > 0) {
				return React.createElement(
					"div",
					{ id: "posts" },
					poste,
					React.createElement(Icons, { pages: pages, total: this.state.currentPage, clickR: this.handleClickRight,
						clickL: this.handleClickLeft })
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

	return Posts;
}(React.Component);

function Icons(props) {
	if (props.total < 2) {
		return React.createElement(
			"div",
			{ id: "icons" },
			React.createElement(
				"h4",
				null,
				props.total
			),
			React.createElement("img", { src: "/Images/next.svg", onClick: function onClick() {
					return props.clickR();
				} })
		);
	} else if (props.total == props.pages) {
		return React.createElement(
			"div",
			{ id: "icons" },
			React.createElement("img", { src: "/Images/back.svg", onClick: function onClick() {
					return props.clickL();
				} }),
			React.createElement(
				"h4",
				null,
				props.total
			)
		);
	} else {
		return React.createElement(
			"div",
			{ id: "icons" },
			React.createElement("img", { src: "/Images/back.svg", onClick: function onClick() {
					return props.clickL();
				} }),
			React.createElement(
				"h4",
				null,
				props.total
			),
			React.createElement("img", { src: "/Images/next.svg", onClick: function onClick() {
					return props.clickR();
				} })
		);
	}
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
		React.createElement(
			"div",
			{ id: "header" },
			React.createElement("div", { className: "line" }),
			React.createElement(
				"center",
				null,
				React.createElement(
					"h2",
					null,
					" All Posts"
				)
			),
			React.createElement("div", { className: "line" })
		),
		React.createElement(Socials, null),
		React.createElement(Posts, null)
	),
	React.createElement(Footer, null)
), document.getElementById('root'));