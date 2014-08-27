module.exports = {
  "main": {
    "files": [
      {
        "src": [
          "img/**"
        ],
        "dest": "dist/"
      },
      {
        "src": [
          "app/bower_components/bootstrap/fonts/**"
        ],
        "dest": "dist/",
        "filter": "isFile",
        "expand": true
      }
    ]
  }
}
;
