module.exports = function(grunt) {
    
  //配置
  grunt.initConfig({

    jshint: {
      option: {
        eqeqeq: true,
        trailing: true
      },
      files: ['Gruntfile.js', '*.js']
    },

    concat: {

      js: {
        src: ['lib/module1.js', 'lib/module2.js'],
        dest: 'dist/script.js'
      }
    },

/*    uglify: {
      option: {
        banner: bannerContent,
        sourceMapRoot: '../',
        sourceMap: 'distrb/' + name + 'min.js.map',
        sourceMapUrl: name + '.min.js.map'
      },
      target: {
        expand: true,
        cwd: 'js/origin',
        src: '*.js',
        dest: 'js/'
      } 
    },*/

    watch: {
      scripts: {
        files: '**/*.js',
        tasks: 'jshint',
        option: {
          livereload: true,
        }
      }
    }
  });

  //加载
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
/*  grunt.loadNpmtasks('grunt-contrib-uglify');*/
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default',['jshint', 'concat']);
  grunt.registerTask('watch', ['jshint']);
};