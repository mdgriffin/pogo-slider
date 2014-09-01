module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			my_target: {
				files: {
					'jquery.pogo-slider.min.js': ['src/jquery.pogo-slider.js']
				}
			}
		},

		cssmin: {
			my_target: {
				files: {
					'pogo-slider.min.css': ['src/pogo-slider.css']
				}
			}
		},

		autoprefixer: {
			my_target: {
				src: 'pogo-slider.min.css',
				dest: 'pogo-slider.min.css'
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-autoprefixer');
	
	grunt.registerTask('default', ['uglify','cssmin','autoprefixer']);

};