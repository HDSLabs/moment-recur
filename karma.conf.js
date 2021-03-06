// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'bower_components/moment/moment.js',
      'bower_components/moment-timezone/builds/moment-timezone-with-data.js',
      'moment-recur.js',
      'tests/spec/*.js'
    ],
    preprocessors: {
      'moment.recur.js': ['coverage']
    },
    exclude: [],
    port: 8080,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-coverage'
    ],
    singleRun: false
  });
};
