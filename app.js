const express = require('express');
const bodyparser = require('body-parser');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const passport = require('passport');
const multer = require('multer');
var upload = multer({ dest: 'uploads/' })
const LocalStrategy = require('passport-local').Strategy;
var app = express();
var cors = require('cors')
const hostname="127.0.0.1";
const port = 3000;
const session = require('express-session')
process.env.DB="mongodb://shayolaw:shayzzel97@ds353738.mlab.com:53738/adim"
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use('/Images',express.static(__dirname + "/Images"));
app.use('/',express.static(__dirname + "/"));
app.use(session({
	secret:'face',
	resave:true,
	saveUninitialized:true
}));
app.use(passport.initialize());
app.use(passport.session());

//login strategy 


//login request

function ensureAuthenticated(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	else{
		console.log('Please Login Hoe');
		res.redirect('/admin');
	}
}
mongoose.connect(process.env.DB, {useNewUrlParser: true},()=>{
	console.log("Connection successful");
	var user = new mongoose.Schema({
		username:String,
		password:String
	});

	var users = mongoose.model('users',user);
	var profile = new mongoose.Schema({
		name:String,
		writeup:String,
		image:String
	});

	var profiles = mongoose.model('profiles',profile);


	passport.serializeUser(function(user, done) {
		 done(null, user.id);
		});
		 
		passport.deserializeUser(function(id, done) {
		users.findById(id, function (err, user) {
		done(err, user);
		});
		});
	passport.use(new LocalStrategy(
  	function(username, password, done) {
    users.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
      	console.log("invalid username");
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (user.password!=password) {
      	console.log("invalid password");
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));
	
	var posts = new mongoose.Schema({
		image:String,
		image2:String,
		sub:String,
		topic:String,
		writer:String,
		date:{type:Date,default:Date.now},
		writeup:String,
		likes:{type:Number,default:0},
		comments:[{
				name:String,
				time:String,
				comment:String,
				image:String
				}]

	});
	var post = mongoose.model('post',posts);
	app.get('/',(req,res)=>{
	res.sendFile(__dirname+"/index.html")
});
	app.get('/addpost',(req,res)=>{
		res.sendFile(__dirname +"/admin/create.html")
	})
	var cpUpload = upload.fields([{ name: 'image', maxCount: 1 }, { name: 'image2', maxCount: 1 }])
	app.post('/create_post',cpUpload,(req,res)=>{
		console.log(req.files)
		var image =""+ req.files.image[0].destination + req.files.image[0].filename
		var image2 =""+ req.files.image2[0].destination + req.files.image2[0].filename
		var newPost = new post({
							image:image,
							image2:image2,
							sub:req.body.sub,
							topic:req.body.topic,
							writer:req.body.writer,
							writeup:req.body.writeup,
							comments:[]
	})
	newPost.save(function(err,data){
		if(err){
			console.log("error adding to db")
		}
		else{
			res.redirect('/home/1')
			console.log("successful")
		}
	})

	})

	app.get('/edit_post/:post',(req,res)=>{
		console.log(req.params.post)
		res.sendFile(__dirname +"/admin/edit.html")

	})

	app.post('/update/:id',cpUpload,(req,res)=>{
		console.log(req.files)
		var id=req.params.id;
		var image =""+ req.files.image[0].destination + req.files.image[0].filename
		var image2 =""+ req.files.image2[0].destination + req.files.image2[0].filename
		var topic = req.body.topic
		var summary=req.body.summary
		var writer=req.body.writer
		var writeup=req.body.writeup
		post.findById(id,function(err,doc){
			if(err){
				console.log("error")
			}
			else{
				if(image!=null){
				doc.image=image
				doc.image2=image2
				doc.sub=summary;
				doc.writer=writer;
				doc.topic=topic
				doc.writeup=writeup;
				
				}
				else{
				doc.sub=summary;
				doc.writer=writer;
				doc.topic=topic;
				doc.writeup=writeup;
				}
				doc.save();
				res.redirect('/home/1')
				
			}
		})
		
		

	})

app.get('/delete/:id',(req,res)=>{
	post.findByIdAndRemove(req.params.id,function(err,doc){
		if(err){
			return("error")
		}
		else{
			console.log('success')
			res.redirect('/home/1')
		}
	})
})	

app.get('/gethome',(req,res)=>{
		post.find({},"id image2 image sub topic writeup date likes",function(err,data){
			if(err){
				console.log("Error returning data")
			}
			else{
				const numbers=data.length;
				var heroItems= [];
				var posts=[];
				var doc = {};
				for(i=0;i<3;i++){
					heroItems.push({
						id:data[i].id,
						image:data[i].image,
						image2:data[i].image2,
						number:""+(i+1)+"/"+numbers,
						sub:data[i].sub,
						topic:data[i].topic,
						date:data[i].date
					});
				}
				doc.heroItems=heroItems;
				for(j=3;j<12;j++){
					posts.push({
						id:data[j].id,
						image:data[j].image,
						image2:data[j].image2,
						header:data[j].sub,
						summary:data[j].writeup,
						topic:data[j].topic,
						date:data[j].date
					});
				}
				doc.posts=posts;
				res.json(doc);
			}
		}).sort({likes:-1}).limit(12)
});
app.get('/allposts/:number',(req,res) =>{
	res.sendFile(__dirname+"/posts.html")
});
app.get('/totalposts',(req,res)=>{
	post.find({},function(err,data){
		if(err){
			return("Errror finding total number")
		}
		else{
			const num = data.length
			console.log(num);
			res.json({number:num});
		}
	})
})
app.get('/allpostsdata/:number',(req,res)=>{
	const number = (req.params.number) * 10;
	const skipNumber = number-10;
	console.log("here");
	post.find({},function(err,data){
		if(err){
			console.log("Error fetching data")
		}
		else{
			var doc ={};
			var add=[];
			for(i=0;i<data.length;i++){
				var sel={}
				sel.image = data[i].image;
				sel.writer = data[i].writer;
				sel.likes = data[i].likes;
				sel.sub = data[i].sub;
				sel.topic = data[i].topic;
				sel.comment = data[i].comments
				sel.address="/posts/"+data[i]._id+"/hello";
				console.log(sel.address);
				sel.date = data[i].date;
				sel.writeup = data[i].writeup;
				add.push(sel);
			}
			doc.posts=add;
			res.json(doc);

		}
	}).limit(10).skip(skipNumber);
})
app.get('/posts/:postId/hello',(req,res)=>{
	res.sendFile(__dirname+'/post.html');
})
app.get('/post/:postid/data',(req,res)=>{
	const postId=req.params.postid;
	console.log(postId);
	post.findById(postId,"image image2 sub writer topic date writeup comments",function(err,data){
	res.json(data);
	})
	
})
app.post('/post/:postid/comment',
(req,res)=>{
	const postId=req.params.postid;
	const name = req.body.name;
	const comment = req.body.comment;
	const val = {
		name:name,
		comment:comment,
		time:Date.now(),
		image:'Images/images.png'
	}
	post.findById(postId,function(err,data){
		data.comments.push(val);
		data.save();
		res.redirect('/posts/'+postId+'/hello')
	})
});
app.get('/about',
(req,res)=>{
	res.sendFile(__dirname+'/about.html')
})
app.get('/admin',
(req,res)=>{
	res.sendFile(__dirname+ '/admin/login.html')
})

app.post('/login', passport.authenticate('local', 
	{ successRedirect: '/home/1',failureRedirect: '/admin' }));
app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});
app.get('/home/:number',ensureAuthenticated,(req,res)=>{
	res.sendFile(__dirname+ '/admin/admin.html')
})
app.get("/profile",(req,res)=>{
	res.sendFile(__dirname+"/admin/profile.html")
})
var cpup=upload.fields([{ name: 'image', maxCount: 1 }]);
app.post("/profile",cpup,(req,res)=>{
	var image="/"+req.files.image[0].destination+req.files.image[0].filename 
	var names=req.body.name
	var writeup=req.body.writeup
	profiles.findById('5e4aef482de71b02c04f1758',function(err,doc){
		doc.name=names;
		doc.writeup=writeup;
		doc.image=image;
		doc.save();
	})
	res.redirect('/profile')
})
app.get("/profile-data",(req,res)=>{
	profiles.find({},function(err,doc){
		if(err){
			console.log(error)
		}
		else{
		res.json(doc)}
	})
})

});


app.listen(port,hostname, () => {
	console.log(`Hello Server running at http://${hostname}:${port}/`);
});