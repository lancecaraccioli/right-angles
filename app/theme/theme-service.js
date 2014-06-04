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
            credits: {
                "bootswatch": {"name": "bootswatch", "heading":"Bootswatch Themes", glyph:"", href:"http://bootswatch.com"}
            },
            selectedTheme:null,
            selectTheme:function(theme){
                var themeName;
                if (typeof theme === 'string'){
                    themeName = theme;
                } else if (typeof theme === 'object') {
                    themeName = theme.name;
                }
                if (themeService.selectedTheme){
                    themeService.selectedTheme.active=false;
                }
                if (themeName && themeService.themes[themeName]){
                    themeService.selectedTheme = themeService.themes[themeName];
                    themeService.selectedTheme.active = true;
                }
            },

            getSelectedTheme:function(){
                if (!themeService.selectedTheme){
                    themeService.selectedTheme = themeService.themes['slate'];
                    themeService.selectedTheme.active = true;
                }

                return themeService.selectedTheme;
            },
            getThemes:function(){
                return themeService.themes;
            },
            getCredits:function(){
                return themeService.credits;
            },
            getState:function(){
                return {'themeState':{selectedTheme:themeService.getSelectedTheme()}};
            },
            saveStorageState:function(){
                chrome.storage.sync.set(themeService.getState());
            },
            getStorageState:function(){
                var deferred = $q.defer();
                //chrome.storage.sync.clear();//clear storage during debugging
                chrome.storage.sync.get(themeService.getState() /*defaults*/, function(storedState){
                    if (storedState['themeState']) {
                        if(storedState['themeState'].selectedTheme){
                            themeService.selectTheme(storedState['themeState'].selectedTheme);
                        }
                        deferred.resolve(themeService.getSelectedTheme());
                    } else {
                        deferred.reject('An invalid initial theme state was retrieved');
                    }
                });
                return deferred.promise;
            }
        };

        return themeService;
    }]);
