module.exports = {
  options: {
    'manifest': {
      'manifest_version': 2,
      'name': '<%= pkg.brand %>',
      'description': '<%= pkg.description %>',
      'version': '<%= pkg.version %>',
      'icons': {
        '128': 'app/img/icon_128.png'
      },
      'app': {
        'background': {
          'scripts': ['app/background.js']
        }
      },
      'permissions': [
        'storage',
        'fileSystem'
      ]
    },
    dest: '<%= build.dest %>/manifest.json'
  },
  dev: {},
  dist: {}
};
