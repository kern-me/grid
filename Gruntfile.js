module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
//        imagemin: {
//            png: {
//                options: {
//                    optimizationLevel: 7
//                },
//                files: [
//                    {
//                        // Set to true to enable the following options…
//                        expand: true,
//                        // cwd is 'current working directory'
//                        cwd: 'css/img-original/',
//                        src: ['**/*.png'],
//                        // Could also match cwd line above. i.e. project-directory/img/
//                        dest: 'css/img/',
//                        ext: '.png'
//                    }
//                ]
//            },
//            jpg: {
//                options: {
//                    progressive: true
//                },
//                files: [
//                    {
//                        // Set to true to enable the following options…
//                        expand: true,
//                        // cwd is 'current working directory'
//                        cwd: 'css/img-original/',
//                        src: ['**/*.jpg'],
//                        // Could also match cwd. i.e. project-directory/img/
//                        dest: 'css/img/',
//                        ext: '.jpg'
//                    }
//                ]
//            }
//        },

        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: false,
                    optimization: 1
                },
                files: {
                    'css/main.css': 'css/main.less'
                }
            }
        },

//        uglify: {
//            build: {
//                src: 'js/main.js',
//                dest: 'js/build/main.min.js'
//            }
//        },
//
//        concat: {
//            options: {
//                separator: ';'
//            },
//            dist: {
//                src: ['js/vendor/cycle2.js', 'js/vendor/swipe.js', 'js/build/main.min.js'],
//                dest: 'js/build/main-prod.min.js'
//            },
//            dev: {
//                src: ['js/vendor/cycle2-dev.js', 'js/vendor/swipe-dev.js', 'js/main.js'],
//                dest: 'js/build/main-dev.js'
//            }
//        },

        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['uglify', 'concat'],
                options: {
                    spawn: false
                }
            },
            styles: {
                files: ['css/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                    event: ['added', 'deleted', 'changed']
                }
            }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-install-dependencies');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['uglify', 'concat', 'less', 'imageMin']);
    grunt.registerTask('Watch', ['watch']);
    grunt.registerTask('jsMin', ['uglify']);
    grunt.registerTask('imageMin',['imagemin']);
};
