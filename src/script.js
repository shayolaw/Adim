var heroItems
var posts
fetch("/gethome")
.then(res => res.json())
.then((result)=>{
	heroItems = result.heroItems;
	posts = result.posts;
	console.log(heroItems);
},
(error) => {console.log(error)
});

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
					<img src="Images/Adim Logo.jpg" />
					<div className="options">
					<ul>
						<a href="/" className="active"><li>Home</li></a>
						<a href='/allposts/1'><li>Posts</li></a>
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
function dateConvert(num){
		var raw_date = new Date(num)
		var month=raw_date.getMonth();
		var day = raw_date.getDate();
		var year = raw_date.getFullYear();
		var date = day+"-"+month+"-"+year
		return date
	}
class Hero extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			heroItems:[]
		}
	}
	
	render(){
		fetch("/gethome")
		.then(res => res.json())
		.then((result)=>{
			this.setState({
				heroItems:result.heroItems
			})
		},
		(error) => {console.log(error)
});

	if(this.state.heroItems.length>0){
		const address= "/posts/"+this.state.heroItems[0].id+"/hello";
		const address2= "/posts/"+this.state.heroItems[1].id+"/hello";
		const address3= "/posts/"+this.state.heroItems[2].id+"/hello";
		return(

		<ul className="hero">
			<li className="main" 
			style={{background:"linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("+this.state.heroItems[0].image2+")",
			backgroundSize:"640px 480px",
			backgroundRepeat: "no-repeat",
			backgroundPosition:"center",
			gridArea: "main"
			}}>
			<a href={address}>
			<h5>{this.state.heroItems[0].number}</h5>
			<h6>{this.state.heroItems[0].sub}</h6>
			<p>{this.state.heroItems[0].topic}/ {dateConvert(this.state.heroItems[0].date)}</p>
			</a>
			<div className="icons">
		<span className="active"></span>
		<span></span>
		<span></span>
		</div>
			</li>
			<li className="other"
			style={{background:"linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("+this.state.heroItems[1].image2+")",
			height:"215px",
			backgroundSize:"640px 480px",
			backgroundRepeat: "no-repeat",
			backgroundPosition:"center",
			gridArea: "first"
			}}>
			<a href={address2}>
			<h5>{this.state.heroItems[1].number}</h5>
			<h6>{this.state.heroItems[1].sub}</h6>
			<p>{this.state.heroItems[1].topic}/ {dateConvert(this.state.heroItems[1].date)}</p>
			</a>
			</li>
			<li className="sother"
			style={{background:"linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("+this.state.heroItems[2].image2+")",
			height:"215px",
			backgroundSize:"640px 480px",
			backgroundRepeat: "no-repeat",
			backgroundPosition:"center",
			gridArea: "second"
			}}>
			<a href={address3}>
			<h5>{this.state.heroItems[2].number}</h5>
			<h6>{this.state.heroItems[2].sub}</h6>
			<p>{this.state.heroItems[2].topic}/ {dateConvert(this.state.heroItems[2].date)}</p>
			</a>
			</li>
		</ul>
		)}
	else{
		return(<h1>Loading...</h1>)
	}
}
}
class Post extends React.Component{
	constructor(props){
		super(props)
		this.state={
			posts:[]
		}
	}
	
	render(){
		fetch("/gethome")
		.then(res => res.json())
		.then((result)=>{
			this.setState({
				posts:result.posts
			})
		},
		(error) => {console.log(error)
});
		var post = this.state.posts.map((i) =>
			<div className="card">

			<div id="image"
			style={{background:"url("+i.image2+")",
			backgroundSize:"cover",
			backgroundPosition:"center",
			}}>
			</div>
			<h6>{i.header}</h6>
			<p>{i.summary}</p>
			<h5>{i.topic} / <span className="date">{dateConvert(i.date)}</span></h5>
			<form action={"posts/"+i.id+"/hello"} method="get">
			<button type="submit">Read More</button>
			</form>
			</div>)
		if(this.state.posts.length>0){
		return(
			<section className="posts">
			<h3>Latest Posts</h3>
			<div id="underline"></div>
			<div className="post">
			{post}
			</div>
			</section>
			)
			}
			else{
				return(<h2>Loading</h2>)
			}
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
	<Socials />
	<Hero />
	<Post />
	<Footer />

</div>,
document.getElementById('root'));