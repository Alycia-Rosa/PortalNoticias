module.exports=function(app){ // página do formulário de inclusão de noticia (rota)

app.get('/formularioinclusaonoticia',(req,res)=>{
	res.render('admin/form_add_noticia.ejs');
});
}