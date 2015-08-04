module.exports = function(grunt) {

	// load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    require('matchdep').filterDev('gruntify-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			dist: {
				src: ['dist']
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> v<%= pkg.version %> */\n',
				mangleProperties: false
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'src',
					src: '**/*.js',
					dest: 'dist/',
					ext: '.min.js',
					extDot: 'last',
					flatten: true
				}]
			}
		}
	});

	grunt.registerTask('default', [
		'clean',
		'uglify'
	]);

};