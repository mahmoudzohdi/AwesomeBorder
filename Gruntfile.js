module.exports = function(grunt){
	grunt.initConfig({	
		
		pkg: grunt.file.readJSON('package.json'),

		

		watch: {
			options: {
		      livereload: 9000,
		    },
			gruntFileChange: {
				files: 'Gruntfile.js',
				tasks: ['uglify']
			},
			jshint: {
			    files: 'src/js/*.js',
			    tasks: ['jshint'],
			    
			},
			js: {
				files: ['**/*.js'],
				tasks: ['uglify'],
			},
			html:{
				files: ['**/*.hmtl']
			}
		},

		jshint: {
    		beforeUglify: ['dist/AwesomeBorder.min.js']
		},

		uglify: {
		    min: {
		      files: {
		        'dist/AwesomeBorder.min.js': ['dist/AwesomeBorder.js'],
		      }
		    }
		}
		
	});

	// PLUGINS
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	

	// Load Tasks
	grunt.registerTask('default', ["watch"]);

	
};