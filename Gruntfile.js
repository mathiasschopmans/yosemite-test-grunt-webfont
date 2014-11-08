/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    webfont: {
      test: {
        src: 'svg/*.svg',
        dest: 'build/grunt-webfont'
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');
  grunt.registerTask('default', ['webfont']);

};
