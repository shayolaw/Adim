function dateConvert(num){
		var raw_date = new Date(num)
		var month=raw_date.getMonth();
		var day = raw_date.getDate();
		var year = raw_date.getFullYear();
		var date = day+"-"+month+"-"+year
		return date
	}

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
					<img src="/Images/Adim Logo.jpg" />
					<div className="options">
					<ul>
						<a href="/" ><li>Home</li></a>
						<a href='/allposts/1' className="active"><li>Posts</li></a>
						<a href='/about'><li>About</li></a>
						<a href='contact.html'><li>Contact</li></a>
					</ul>
					</div>
				</nav>

			</div>)
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
class Posts extends React.Component{
	constructor(){
		super()
		this.state={
			posts:[],
			total:0,
			currentPage:1
		}
	this.handleClickRight= this.handleClickRight.bind(this);
	this.handleClickLeft= this.handleClickLeft.bind(this);
	}
		handleClickRight(){
			var nextPage= this.state.currentPage + 1;
			location.replace('/allposts/'+nextPage)

		}
		handleClickLeft(){
			var nextPage= this.state.currentPage - 1;
			location.replace('/allposts/'+nextPage)

		}

	componentDidMount(){
		var currentP= window.location.pathname;
		currentP = currentP.slice(10);
		currentP = parseInt(currentP,10)
		console.log(currentP);
		fetch('/totalposts')
	.then(res => res.json())
	.then((result)=>{
		this.setState({
			total:result.number,
			currentPage:currentP
		})
	})
	fetch('/allpostsdata/'+currentP)
	.then(res => res.json())
	.then((result)=>{
		this.setState({
			posts:result.posts
		})
	})
}

	render(){
		var pages = (this.state.total / 10);
	if(pages%10!=0){
		pages=Math.floor(pages)+1;
	}
	else{
		pages = Math.floor(pages);
	}
		var poste= this.state.posts.map((i) =><div id="post">
			<div id="imgsect" 
			style={{
				width:"90vw",
				height:"480px",
				backgroundImage:"url(/"+i.image+")",
				backgroundSize: 'cover',
				backgroundRepeat : 'no-repeat',
				backgroundPosition : 'center'
				
			}}>
			</div>
			<h3>{i.sub}</h3>
			<h6>{i.writer},{dateConvert(i.date)}</h6>
			<p>{i.writeup}</p>
			<a href={i.address}>Read More</a>
			</div>)
		if(this.state.posts.length>0){
			return(
			<div id="posts">
			{poste}
			<Icons pages={pages} total={this.state.currentPage} clickR = {this.handleClickRight} 
			clickL = {this.handleClickLeft}/>
		</div>
			)
		}
		else{
			return(
				<h1>Loading...</h1>
				)
		}
		
	
}
}
function Icons(props){
			if(props.total<2){
			return(
				<div id="icons">
				<h4>{props.total}</h4>
				<img src="/Images/next.svg" onClick={() => props.clickR()} />
				</div>)
				}
			else if(props.total==props.pages){
				return(
				<div id="icons">
				<img src="/Images/back.svg" onClick={() => props.clickL()} />
				<h4>{props.total}</h4>
				</div>)
			}
			else{
				return(
				<div id="icons">
				<img src="/Images/back.svg" onClick={() => props.clickL()} />
				<h4>{props.total}</h4>
				<img src="/Images/next.svg" onClick={() => props.clickR()} />
				</div>)
			}
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
	<div id="header">
	<div className="line"></div>
	<center><h2> All Posts</h2></center>
	<div className="line"></div>
	</div>
	<Socials />
	<Posts />
	</div>
	<Footer />
	</div>,
document.getElementById('root'));