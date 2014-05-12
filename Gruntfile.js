module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      build: {
        src: [
                'src/res/jquery-1-11-1.js',
                'src/res/main.js',
                'src/res/clock.js'
              ],
        dest: 'src/bin/tymr.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/bin/tymr.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    execute: {
      page: {
        src: 'src/bin/appcompiler.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-execute');

  grunt.registerTask('default', ['concat', 'uglify', 'execute:page']);
};
