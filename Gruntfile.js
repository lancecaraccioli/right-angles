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
        if (expand) {
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
        'code-quality',
        'test'
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

    grunt.registerTask('test', function () {
        try {
            grunt.task.run('karma:unit');
        } catch (e) {
            grunt.log.error(e.message);
        }
    });

    grunt.registerTask('default', [
        'build'
    ]);


};
