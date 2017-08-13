module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		stylus: {
			compile: {
				options: {
					compress: false
				},
				files: {
					'css/style.css': 'css/src/global.styl'
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-stylus');

	grunt.registerTask('default', ['stylus']);

};