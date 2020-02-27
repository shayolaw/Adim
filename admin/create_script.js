var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.state = {
			name: "",
			name2: ""

		};
		_this.handleChange = _this.handleChange.bind(_this);
		_this.handleChange2 = _this.handleChange2.bind(_this);

		return _this;
	}

	_createClass(App, [{
		key: "handleChange",
		value: function handleChange(e) {
			var val = e.target.value;
			var newStyle = {
				opacity: 1
			};
			this.setState({
				name: val,
				style: newStyle
			});
		}
	}, {
		key: "handleChange2",
		value: function handleChange2(e) {
			var val1 = e.target.value;
			var newStyle2 = {
				opacity: 1
			};
			this.setState({
				name2: val1,
				style2: newStyle2
			});
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement("div", { className: "background" }),
				React.createElement(
					"div",
					{ className: "field" },
					React.createElement(
						"h2",
						null,
						"ADD POSTS"
					),
					React.createElement(
						"form",
						{ method: "post", action: "/create_post", enctype: "multipart/form-data" },
						React.createElement(
							"small",
							null,
							"1200*480"
						),
						React.createElement(
							"div",
							{ className: "image_lg" },
							React.createElement(
								"label",
								{ "for": "image" },
								React.createElement("img", { src: "/admin/Images/cam.png" }),
								React.createElement("br", null),
								React.createElement(
									"span",
									{ "class": "img_name" },
									this.state.name
								)
							),
							React.createElement("input", { type: "file", id: "image", name: "image", value: this.state.name,
								onChange: this.handleChange, style: this.state.style })
						),
						React.createElement(
							"small",
							null,
							"640*480"
						),
						React.createElement(
							"div",
							{ className: "image_sm" },
							React.createElement(
								"label",
								{ "for": "image2" },
								React.createElement("img", { src: "/admin/Images/cam.png" }),
								React.createElement("br", null),
								React.createElement(
									"span",
									{ "class": "img_name" },
									this.state.name2
								)
							),
							React.createElement("input", { type: "file", id: "image2", name: "image2", value: this.state.name2,
								onChange: this.handleChange2, style: this.state.style2 })
						),
						React.createElement(
							"div",
							{ className: "form-group" },
							React.createElement(
								"label",
								{ "for": "exampleFormControlInput1" },
								"Topic"
							),
							React.createElement("input", { type: "text", name: "topic", "class": "form-control", id: "exampleFormControlInput1", placeholder: "Topic", required: true })
						),
						React.createElement(
							"div",
							{ className: "form-group" },
							React.createElement(
								"label",
								{ "for": "exampleFormControlInput1" },
								"Writer"
							),
							React.createElement("input", { type: "text", name: "writer", "class": "form-control", id: "exampleFormControlInput1", placeholder: "Adim", required: true })
						),
						React.createElement(
							"div",
							{ className: "form-group" },
							React.createElement(
								"label",
								{ "for": "exampleFormControlInput1" },
								"Summary"
							),
							React.createElement("input", { type: "text", "class": "form-control", name: "sub", id: "exampleFormControlInput1", placeholder: "Summary", required: true })
						),
						React.createElement(
							"div",
							{ className: "form-group" },
							React.createElement(
								"label",
								{ "for": "exampleFormControlTextarea1" },
								"Writeup"
							),
							React.createElement("textarea", { "class": "form-control", name: "writeup", id: "exampleFormControlTextarea1", rows: "8", required: true })
						),
						React.createElement(
							"div",
							{ className: "form-row" },
							React.createElement(
								"div",
								{ className: "col" },
								React.createElement(
									"button",
									{ type: "submit", className: "btn btn-success" },
									"Submit"
								)
							),
							React.createElement(
								"div",
								{ className: "col" },
								React.createElement(
									"button",
									{ type: "submit", className: "btn btn-danger" },
									"Cancel"
								)
							)
						)
					)
				)
			);
		}
	}]);

	return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));