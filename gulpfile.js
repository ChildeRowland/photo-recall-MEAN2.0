var gulp = require('gulp');
var del = require('del');

var deployment = 'heroku';

gulp.task('clean', function() {
	del([ (deployment + '/**/*'), '!.git']);
});

gulp.task('angularFiles', function() {
	return gulp.src('dist/**/*')
		.pipe(gulp.dest(deployment));
});

gulp.task('packageFile', function() {
	return gulp.src('package.json')
		.pipe(gulp.dest(deployment));
});

gulp.task('serverFiles', function() {
	return gulp.src('src/server/**/*')
		.pipe(gulp.dest(deployment + '/server'));
});

gulp.task('appFile', function() {
	return gulp.src('src/app.js')
		.pipe(gulp.dest(deployment));
});

gulp.task('buildProd', ['angularFiles', 'packageFile', 'serverFiles', 'appFile']);