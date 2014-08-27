module.exports = {
  'main': {
    'files': [
      {
        'expand': true,
        'cwd': 'dist/',
        'src': [
          '**/{*.png,*.jpg}'
        ],
        'dest': 'dist/'
      }
    ]
  }
};
