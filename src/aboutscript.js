
class Nav extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(<div className="Navbar">
				<nav>
				<ul className="menu">
					<li className="title">Adim</li>
					<li className="burgers">
					<span id="burger-1"></span>
					<span id="burger-2"></span>
					<span id="burger-3"></span>
					</li>
				</ul>
					<img src="/Images/Adim Logo.png" />
					<div className="options">
					<ul>
						<a href="/"><li>Home</li></a>
						<a href='/allposts/1' ><li>Posts</li></a>
						<a href='/about' className="active"><li>About</li></a>
						<a href='contact.html'><li>Contact</li></a>
					</ul>
					</div>
				</nav>

			</div>)
	}
}
class Hero extends React.Component{
	constructor(props){
		super(props)
		this.state={
			image:"",
		}
	}
	componentDidMount(){
		fetch('/profile-data')
		.then(res => res.json())
		.then((result)=>{
			this.setState({
				image:result[0].image,
			})
		})

	}
	render(){
		
		if(this.state!=null){
		return(
			<div className="hero">
			<h2>Getting To Know <span className="orange">More About The</span> Writer</h2>
			<img src={this.state.image} />
			</div>
			)
		}
		else{
			return(
			<h2>Loading</h2>)
		}
	}
}
class Bio extends React.Component{
	constructor(props){
		super(props)
		this.state={
			bio:"",
			name:""
		}
	}
	componentDidMount(){
		fetch('/profile-data')
		.then(res => res.json())
		.then((result)=>{
			this.setState({
				name:result[0].name,
				bio:result[0].writeup
			})
		})

	}
	render(){
		if(this.state!=null){
		return(
			<div className="bio">
			<center><h2>About {this.state.name}</h2></center>
			<p>{this.state.bio}</p>
			</div>
			)	
		}
	else{
		return(<h2>Loading...</h2>)
	}
		
	}
}
function Socials(props){
	return(
			<ul className="social-nav">
			<li><a href="" className="fa fa-facebook-f"></a></li>
			<li><a href="" className="fa fa-twitter"></a></li>
			<li><a href="" className="fa fa-google"></a></li>
			<li><a href="" className="fa fa-instagram"></a></li>
		</ul>
		)
}
function Footer(){
	return(
		<div className="footer">
		<footer>
		<ul className="creator">
			<li><a href=""></a></li>
			<li><a href=""></a></li>
		</ul>
		<ul className="footer-nav">
			<li><a href="">About Us</a></li>
			<li><a href="">Contact</a></li>
			<li><a href="">Terms & Conditions</a></li>
		</ul>
		<ul className="footer-social-nav">
			<li><a href=""><i className="fa fa-facebook-f"></i>Facebook</a></li>
			<li><a href=""><i className="fa fa-twitter"></i>Twitter</a></li>
			<li><a href=""><i className="fa fa-google"></i>Google</a></li>
			<li><a href=""><i className="fa fa-instagram"></i>Instagram</a></li>
		</ul>
		<form className="subscribe">
		<label for="email">Subscribe to our newsletter</label>
		<input type="email"/><button>Join</button>
		</form>
		<ul className="address">
			<li>497 Evergreen Rd. Roseville, CA 95673 
			+44 345 678 903
			adobexd@mail.com</li>
		</ul>
		</footer>
		</div>
		)
}
ReactDOM.render(
	<div>
	<Nav />
	<div className="container">
	<Hero />
	<Bio />
	<div className="decor"></div>
	</div>
	<Footer />
	</div>,
document.getElementById('root'));