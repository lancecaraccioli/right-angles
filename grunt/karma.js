module.exports = {
  'unit': {
    'options': {
      'basePath': '',
      'frameworks': ['jasmine'],
      'files': [
        '<%= source.scripts.app %>',
        '<%= source.scripts.tests %>'
      ],
      'exclude': [],
      'preprocessors': {
        '<%= source.scripts.ours %>': ['coverage']
      },
      'reporters': ['progress', 'coverage'],
      'port': 9876,
      'colors': true,
      'logLevel': 'INFO',
      'autoWatch': true,
      'browsers': ['PhantomJS'],
      'singleRun': true,
      'coverageReporter': {
        'type': 'html',
        'dir': 'src/app/reports/coverage/'
      }
    }
  }
};
