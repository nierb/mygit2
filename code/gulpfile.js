var obj = {
	removeComments: true, //清除HTML注释
	collapseWhitespace: true, //压缩HTML
	collapseBooleanAttributes: true,//省略布尔属性的值<input checked="true"/> ==> <input checked/>
	removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
	removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
	removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
	minifyJS: true, //压缩页面JS
	minifyCSS: true //压缩页面CSS
}


//
//var gulp=require("gulp");
//var imagemin=require("gulp-imagemin");
//
//gulp.task("htmlTask",function(){
//	gulp.src("src/img/*");
//	.pipe(imagemin(obj));
//	.pipe(gulp.dest("dest/img")); 
//})
//
//gulp.task("default",["htmlTask"]);
   
//var gulp=require("gulp");
//var uglify = require('gulp-uglify');
//
//gulp.task('jsTask', function(){
//gulp.src('js/bullet.js')
//// .pipe(bom())
//.pipe(uglify())  
//.pipe(gulp.dest('dest/js'));
//});
//
//gulp.task('default',function(){
//	 gulp.watch(config.es6file, ['es6']);  
//});
//var gulp = require("gulp");
//var htmlmin = require("gulp-htmlmin");
//gulp.task('htmlTask', function(){
//gulp.src('src/html/*')
//.pipe(htmlmin(obj))
//.pipe(gulp.dest('dest/html'));
//});
//gulp.task('default', ['htmlTask']);
//var gulp = require('gulp');  
//var babel = require('gulp-babel');  
//gulp.task('jstask', function () {  
//  gulp.src('js/bullet.js')  
//      .pipe(babel({presets: ['es2015']}))  
//      .pipe(gulp.dest('dest/js'));  
//});  
//gulp.task('default',['jstask']);



var gulp = require("gulp");
var minifyCss = require('gulp-minify-css');

gulp.task('cssTask', function(){
gulp.src('css/*')
.pipe(minifyCss())
.pipe(gulp.dest('dest/css'));
});
gulp.task('default',['cssTask']);