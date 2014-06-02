'use strict';
angular.module('rightAngles.theme')
    .factory('rightAngles.themeService', [function(){
        var themeService = {
            themes: {
                "amelia":    {"name": "amelia", "heading": "Amelia"},
                "cerulean":  {"name": "cerulean", "heading": "Cerulean"},
                "cosmo":     {"name": "cosmo", "heading": "Cosmo"},
                "cyborg":    {"name": "cyborg", "heading": "Cyborg"},
                "darkly":    {"name": "darkly", "heading": "Darkly"},
                "flatly":    {"name": "flatly", "heading": "Flatly"},
                "journal":   {"name": "journal", "heading": "Journal"},
                "lumen":     {"name": "lumen", "heading": "Lumen"},
                "readable":  {"name": "readable", "heading": "Readable"},
                "simplex":   {"name": "simplex", "heading": "Simplex"},
                "slate":     {"name": "slate", "heading": "Slate"},
                "spacelab":  {"name": "spacelab", "heading": "Spacelab"},
                "superhero": {"name": "superhero", "heading": "Superhero"},
                "united":    {"name": "united", "heading": "United"},
                "yeti":      {"name": "yeti", "heading": "Yeti"}
            },
            selectedTheme:null,
            selectTheme:function(theme){
                var themeName;
                if (typeof theme === 'string'){
                    themeName = theme;
                } else if (typeof theme === 'object') {
                    themeName = theme.name;
                }
                if (themeName && themeService.themes[themeName]){
                    themeService.selectedTheme = themeService.themes[themeName];
                }
            },

            getSelectedTheme:function(){
                return themeService.selectedTheme;
            },
            getThemes:function(){
                return themeService.themes;
            }
        };
        themeService.selectTheme('superhero');

        return themeService;
    }]);
