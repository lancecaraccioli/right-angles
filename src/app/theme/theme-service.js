(function () {
  'use strict';
  angular.module('theme')
    .factory('theme.themeService', ['$q', function ($q) {
      var themeService = {
        themes: {
          "amelia": {"name": "amelia", "heading": "Amelia"},
          "cerulean": {"name": "cerulean", "heading": "Cerulean"},
          "cosmo": {"name": "cosmo", "heading": "Cosmo"},
          "cyborg": {"name": "cyborg", "heading": "Cyborg"},
          "darkly": {"name": "darkly", "heading": "Darkly"},
          "flatly": {"name": "flatly", "heading": "Flatly"},
          "journal": {"name": "journal", "heading": "Journal"},
          "lumen": {"name": "lumen", "heading": "Lumen"},
          "readable": {"name": "readable", "heading": "Readable"},
          "simplex": {"name": "simplex", "heading": "Simplex"},
          "slate": {"name": "slate", "heading": "Slate"},
          "spacelab": {"name": "spacelab", "heading": "Spacelab"},
          "superhero": {"name": "superhero", "heading": "Superhero"},
          "united": {"name": "united", "heading": "United"},
          "yeti": {"name": "yeti", "heading": "Yeti"}
        },
        selectedTheme: null,
        selectTheme: function (theme) {
          var selectedTheme = themeService.getSelectedTheme();
          selectedTheme.active = false;
          var newlySelectedTheme = themeService.getTheme(theme);
          if (!newlySelectedTheme) {
            newlySelectedTheme = selectedTheme;
          }
          newlySelectedTheme.active = true;
          themeService.selectedTheme = newlySelectedTheme;
          themeService.saveStorageState();
        },
        getTheme: function (theme) {
          var themeName;
          if (typeof theme === 'string') {
            themeName = theme;
          } else if (typeof theme === 'object') {
            themeName = theme.name;
          }
          if (themeName && themeService.themes[themeName]) {
            return themeService.themes[themeName];
          }
        },

        getSelectedTheme: function () {
          if (!themeService.selectedTheme) {
            themeService.selectedTheme = themeService.themes['slate'];
            themeService.selectedTheme.active = true;
          }

          return themeService.selectedTheme;
        },
        getThemes: function () {
          return themeService.themes;
        },
        getState: function () {
          return {'themeState': {selectedTheme: themeService.getSelectedTheme()}};
        },
        saveStorageState: function () {
          chrome.storage.sync.set(themeService.getState());
        },
        /**
         * If the state is already initalized then there is no need to retrieve
         * the state from storage
         */
        stateInitialized: false,
        getStorageState: function () {
          var deferred = $q.defer();
          if (themeService.stateInitialized) {
            deferred.resolve(themeService.getSelectedTheme());
          } else {
            //chrome.storage.sync.clear();//clear storage during debugging
            chrome.storage.sync.get(themeService.getState() /*defaults*/, function (storedState) {
              if (storedState['themeState']) {
                if (storedState['themeState'].selectedTheme) {
                  themeService.selectTheme(storedState['themeState'].selectedTheme);
                }
                themeService.stateInitialized = true;
                deferred.resolve(themeService.getSelectedTheme());
              } else {
                deferred.reject('An invalid initial theme state was retrieved');
              }
            });
          }
          return deferred.promise;
        }
      };

      return themeService;
    }]);
})();
