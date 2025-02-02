import * as dartSass from 'sass';
import gulpDartSass from 'gulp-dart-sass';
import mergeMediaQueries from 'gulp-merge-media-queries';
import cleanCSS from 'gulp-clean-css';

export const styles = () => {
  return app.gulp
    .src(`${app.paths.src}/styles/**/*.{css,scss}`)
    .pipe(gulpDartSass({ logger: dartSass.Logger.silent }).on('error', gulpDartSass.logError))
    .pipe(mergeMediaQueries())
    .pipe(
      cleanCSS({
        format: 'beautify',
      })
    )
    .pipe(app.gulp.dest(`${app.paths.build}/styles`))
    .pipe(app.plugins.browserSync.stream());
};
