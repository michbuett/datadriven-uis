/* global module */
module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        nodewebkit: {
            options: {
                appName: 'datadriven-uis',
                platforms: ['win', 'linux32', 'linux64'],
                buildDir: 'build',
            },

            src: [
                'package.json',
                'node_modules/alchemy.js/lib/**/*',
                'src/**/*',
            ]
        },
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-node-webkit-builder');

    grunt.registerTask('build', ['jshint', 'nodewebkit']);
};
