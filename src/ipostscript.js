const addie = window.location.pathname;
const number=addie.slice(7,-6);
current =Number(Date.now());
function handleTime(time){
var newTime = current-Number(time);
newTime = ((newTime/60000)/60)/24;
var eta = Math.floor(newTime) + "days" 
if(newTime<1){
	newTime =newTime * 24;
	eta = Math.floor(newTime) + " hrs";
	if(newTime<1){
		newTime =newTime * 60;
		eta =Math.floor(newTime) + "mins";
		if(newTime<1){
		newTime =newTime * 60;
		eta = Math.floor(newTime) + "secs";
	}
	}
}
return eta

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
					<img src="/Images/Adim Logo.png" />
					<div className="options">
					<ul>
						<a href="/"><li>Home</li></a>
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

class Hero extends React.Component{
	constructor(props){
		super(props)
		this.state ={
			image:"",
			sub:"",
			writer:"",
			topic:"",
			date:""
		}
	}
	render(){
		fetch('/post/'+number+'/data')
		.then(res=>res.json())
		.then((result)=>{
			this.setState({
				image:result.image,
				sub:result.sub,
				topic:result.topic,
				writer:result.writer,
				date:result.date
			})
		})
		var raw_date = new Date(this.state.date)
		var month=raw_date.getMonth();
		var day = raw_date.getDate();
		var year = raw_date.getFullYear();
		var date = day+"/"+month+"/"+year
		if(this.state!=null){
		return(
			<div className="hero"
			style={{
		backgroundImage:"linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/"+this.state.image+")",
		backgroundSize : 'cover',
		backgroundPosition: 'center center'
	}}>
			<h3>{this.state.sub} </h3>
			<p>{this.state.topic}    /     {this.state.writer}      /     {date}</p>
			</div>
			)
	}
	else{
		return(<h2>Loading...</h2>)
	}
}
}
class Article extends React.Component{
	constructor(props){
		super(props)
		this.state={
			writeup:"",
		}
	}
	render(){
		fetch('/post/'+number+'/data')
		.then(res=>res.json())
		.then((result)=>{
			this.setState({
				writeup:result.writeup
			})
		})
		if(this.state!=null){
		return(
			<div className="article">
			<p>{this.state.writeup}</p>
			
			</div>
			)
		}
		else{
			return(<h2>Loading</h2>)
		}
	}
}
function Comment(props){
	return(
		<div className="comment">
		<h4>Leave a comment</h4>
		<form action={"/post/"+number+"/comment"}
		method="post">
		<label for="name">Name</label>
		<input type="text" placeholder="Name"
		name="name"/>
		<label for="comment">Comment</label>
		<textarea name="comment" rows="10"></textarea>
		<button type="submit">Submit</button>
		</form>
		</div>
		)
}
class Message extends React.Component{
	constructor(props){
		super(props)
		this.state={
			comment:[]
		}
	}
	render(){
	fetch('/post/'+number+'/data')
		.then(res=>res.json())
		.then((result)=>{
			this.setState({
				comment:result.comments
			})
		})
	const comments = this.state.comment.map((i)=><div id="comments">
			<img src={"/"+i.image} id="dp" />
			<h5>{i.name}</h5>
			<em>{handleTime(i.time)}</em>
			<p>{i.comment}</p>

			</div>)
	return(
		<div id="message">
		{comments}
		<center><h6>Load More . . .</h6></center>
		</div>
		)
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
	<Hero />
	<div className="container">
	<Socials />
	<Article />
	<Comment />
	<Message />
	</div>
	<Footer />
	</div>,
document.getElementById('root'));