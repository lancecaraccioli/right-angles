module.exports = {
  'main': {
    'options': {
      'module': 'right-angles'
    },
    'src': [
      [
        [
          'app/home/**/*.html'
        ],
        [
          'app/img/**/*.html'
        ],
        [
          'app/info/**/*.html'
        ],
        [
          'app/navbar/**/*.html'
        ],
        [
          'app/nursery/**/*.html'
        ],
        [
          'app/open-source-credits/**/*.html'
        ],
        [
          'app/showcase/**/*.html'
        ],
        [
          'app/theme/**/*.html'
        ],
        'app/*.html',
        '*.html'
      ],
      '!app.html',
      '!_SpecRunner.html'
    ],
    'dest': 'temp/templates.js'
  }
};
