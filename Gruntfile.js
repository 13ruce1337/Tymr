module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      build: {
        src: [
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
    },
    watch: {
      scripts: {
        options: {
          reload: true
        },
        files: [
                '*',
                'src/libs/*',
                'src/res/*',
                'src/bin/*',
                'build/*'
              ],
        tasks: ['concat', 'uglify', 'execute', 'watch']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-execute');

  grunt.registerTask('default', ['concat', 'uglify', 'execute', 'watch']);
};
