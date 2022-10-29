// Import main module
import gulp from "gulp";
// Import common plugins
import { plugins } from "./config/gulp-plugins.js";
// Import paths
import { path } from "./config/gulp-settings.js";

// Pass values to global variable
global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	isFontsReW: process.argv.includes('--rewrite'),
	gulp: gulp,
	path: path,
	plugins: plugins
}

// Import tasks
import { reset } from "./config/gulp-tasks/reset.js";
import { html } from "./config/gulp-tasks/html.js";
import { css } from "./config/gulp-tasks/css.js";
import { js } from "./config/gulp-tasks/js.js";
import { jsDev } from "./config/gulp-tasks/js-dev.js";
import { images } from "./config/gulp-tasks/images.js";
import { gitignore } from "./config/gulp-tasks/gitignore.js";
import { otfToTtf, ttfToWoff, fonstStyle } from "./config/gulp-tasks/fonts.js";

// Sequential font processing
const fonts = gulp.series(reset, otfToTtf, ttfToWoff, fonstStyle);
// The main tasks will be performed in parallel after processing the fonts
const devTasks = gulp.parallel(fonts, gitignore);
// The main tasks will be performed in parallel after processing the fonts
const buildTasks = gulp.series(fonts, jsDev, js, gulp.parallel(html, css, images, gitignore));

// Export tasks
export { html }
export { css }
export { js }
export { jsDev }
export { images }
export { fonts }

// Building task execution scripts
const development = gulp.series(devTasks);
const build = gulp.series(buildTasks);

// Export scripts
export { development }
export { build }

// Execute the default script
gulp.task('default', development);






