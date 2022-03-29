module.exports=function(app){// página principal do app (rota)

	app.get('/',function (req,res) {
		res.render('home/index.ejs');
		
	});
}