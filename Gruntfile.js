module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            stylus: {
                files: ['public/js/modules/**/*.styl'],
                tasks: ['stylus']
            }
        },
        stylus: {
            compile: {
                options: {
                    paths: ['public/js/modules/common/styles/mixins'],
                    import: [
                        'main.styl'
                    ]
                },
                files: {
                    'public/css/main.css': [
                        'public/js/modules/**/*.styl'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');

    grunt.task.registerTask('default', ['watch']);
    grunt.task.registerTask('compile', ['stylus:compile']);
};