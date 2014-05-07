module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            my_target: {
                options: {
                    mangle: true,
                    compress: {
                        drop_console: true
                    },
                    preserveComments: 'all'
                },
                files: {
                    'javascripts/dh-plus.min.js': ['javascripts/dh-plus.js'],
                    'javascripts/script.min.user.js': ['javascripts/script.user.js']
                }
            }
        },
        watch: {
            my_target: ''
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);

};