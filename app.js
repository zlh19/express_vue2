var express=require('express'),
	ejs=require('ejs'),
	app=express(),
	port=process.env.PORT||6200;
var glob=require('glob')
var renderRouters=require('./routers/render');


// 设置模版目录
app.set('views',__dirname+'/views')
// 识别.ejs文件
app.engine('ejs',ejs.__express)
// 渲染时，加ejs
app.set('view engine','ejs')


// 设置静态
app.use(express.static(__dirname+'/build'));
app.use(express.static(__dirname+'/json'));


// 监听端口
app.listen(port,function(error){
	if(error){
		throw error
	}
	console.log('listen port === '+port)
})

renderRouters(app)