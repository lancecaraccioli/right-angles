module.exports = function (grunt) {
    'use strict';

    // loads grunt tasks, loads configs from ./grunt, initializes config i.e. grunt.config.init(loadedConfigs)
    require('load-grunt-config')(grunt, {
        postProcess: function (config) {
            config.build.target = grunt.option('target') || config.build.target;
        }
    });

    var dump = function (thing) {
        if (typeof thing === 'object') {
            thing = JSON.stringify(thing, null, 2);
        }
        console.log(thing);
    };

    grunt.registerTask('dump-config', function (key, expand) {
        var value = grunt.config.get(key);
        if (expand){
            value = grunt.file.expand(value);
        }
        dump(value);
    });

    /**
     * Alias which runs all code quality tasks
     * - jshint
     * - jscs
     *
     */
    grunt.registerTask('code-quality', ['jshint', 'jscs']);

    grunt.registerTask('build', [
        'clean:temp',
        'code-quality'
        /*'sass',
        'ngtemplates',
        'cssmin',
        'concat',
        'ngmin',
        'uglify',
        'copy',
        'htmlmin',
        'imagemin',
        'clean:after'*/
    ]);

    grunt.registerTask('test', [
        'karma:all_tests'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);

    grunt.event.on('watch', function (action, filepath) {
        //https://github.com/gruntjs/grunt-contrib-watch/issues/156

        /*var tasksToRun = [];

        if (filepath.lastIndexOf('.js') !== -1 && filepath.lastIndexOf('.js') === filepath.length - 3) {

            //lint the changed js file
            grunt.config('jshint.main.src', filepath);
            tasksToRun.push('jshint');

            //find the appropriate unit test for the changed file
            var spec = filepath;
            if (filepath.lastIndexOf('_test.js') === -1 || filepath.lastIndexOf('_test.js') !== filepath.length - 8) {
                spec = filepath.substring(0, filepath.length - 3) + '_test.js';
            }

            //if the spec exists then lets run it
            if (grunt.file.exists(spec)) {
                var files = [].concat(grunt.config('dom_munger.data.appjs'));
                files.push('app/bower_components/angular-mocks/angular-mocks.js');
                files.push(spec);
                grunt.config('karma.options.files', files);
                tasksToRun.push('karma:during_watch');
            }
        }

        if (filepath.lastIndexOf('.scss') !== -1 && filepath.lastIndexOf('.scss') === filepath.length - 5) {
            tasksToRun.push('sass:dev');
        }

        //if app.html changed, we need to reread the <script> tags so our next run of karma
        //will have the correct environment
        if (filepath === 'app/app.html') {
            tasksToRun.push('preprocess');
            tasksToRun.push('dom_munger:input');
        }

        grunt.config('watch.main.tasks', tasksToRun);*/

    });
};
