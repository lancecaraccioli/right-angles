module.exports = {
  "dist": {
    "options": {},
    "files": {
      "<% build.path %>/app.css": "app/app.scss"
    }
  },
  "dev": {
    "options": {
      "sourcemap": true,
      "trace": true,
      "style": "expanded",
      "lineNumbers": true
    },
    "files": {
      "temp/app.css": "app/app.scss"
    }
  }
}
;
