var gulp = require('gulp');
var del = require('del');

var deployment = 'heroku';

gulp.task('clean', function() {
	del([ (deployment + '/**/*'), '!.git']);
});

gulp.task('build', function() {
	return gulp.src('dist/**/*')
		.pipe(gulp.dest(deployment));
});

gulp.task('package', function() {
	return gulp.src('package.json')
		.pipe(gulp.dest(deployment));
});