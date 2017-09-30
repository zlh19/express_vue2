

module.exports=function(app){
		
	app.get('/index',function(req,res){
		res.render('index',{
			title:1
		})
	})

	app.get('/',function(req,res){
		res.render('index',{
			title:1
		})
	})
}