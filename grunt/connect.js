module.exports = {
  'options': {
    'hostname': 'right-angles.logos',
    'base': ['<%= build.dest %>', '<%= source.root %>']
  },
  'test': {
    'options': {
      'port': 10080
    }
  },
  'serve': {
    'options': {
      'port': 9080,
      'keepalive': true
    }
  }
};
