/**
 * Wrap everything in an IIFE (Immediately Invoked Function Expression) to keep
 * our variables constrained to the scope of this function and out of the global scope.
 */
(function() {
    /**
     * Package data and constructor objects
     */

     //Package data array {simulated data source, such as JSON or database recordset}
     var data = [
         {
             name: 'emmet',
             description: 'Emmet is the number one code snippet tool.',
             author: 'emmetio',
             url: 'https://atom.io/packages/emmet',
             downloads: 1662209,
             stars: 2534,
             price: 10.50,
             selector: 'p1'
         },
         {
             name: 'atom-beautify',
             description: 'The atom-beautify package will clean up your code, and make it more readable.',
             author: 'Glavin001',
             url: 'https://atom.io/packages/atom-beautify',
             downloads: 4228040,
             stars: 4541,
             price: 6.75,
             selector: 'p2'
         },
         {
            name: 'autoclose-html-plus',
            description: 'This autoclose-html-plus package automatically closes HTML tags for you once you have typed the first tag.',
            author: 'binaryfunt',
            url: 'https://atom.io/packages/autoclose-html-plus',
            downloads: 47758,
            stars: 8,
            price: 7.75,
            selector: 'p3'
         },
         {
            name: 'atom-liquid-snippets',
            description: 'The atom-liquid-snippets package adds support for Shopify Liquid snippets with a set of commands found in the documentation for the package.',
            author: 'rickmurt',
            url: 'https://atom.io/packages/atom-liquid-snippets',
            downloads: 14824,
            stars: 7,
            price: 8.75,
            selector: 'p4'
         },
         {
            name: 'git-blame',
            description: 'The git-blame package allows you to toggle git-blame annotations in the gutter of the Atom editor.',
            author: 'alexcorre',
            url: 'https://atom.io/packages/git-blame',
            downloads: 279662,
            stars: 455,
            price: 9.75,
            selector: 'p5'
         },
         {
            name: 'Git-Plus',
            description: 'The Git-Plus package provides a bunch of shortcuts to commonly used git actions, without the need to switch to terminal.',
            author: 'akonwi',
            url: 'https://atom.io/packages/git-plus',
            downloads: 2827376,
            stars: 2645,
            price: 8.75,
            selector: 'p6'
        },
        {
            name: 'git-time-machine',
            description: 'Ever wish you were not so secretly Marty Mcfly and could go back in time? Well the git-time-machine package allows you to do just that.',
            author: 'littlebee',
            url: 'https://atom.io/packages/git-time-machine',
            downloads: 423520,
            stars: 1052,
            price: 6.75,
            selector: 'p7'
        },
        {
            name: 'Linter',
            description: 'Linter is a base linter package that relies on sub-packages for specific languages.',
            author: 'steelbrain',
            url: 'https://atom.io/packages/linter',
            downloads: 8918304,
            stars: 4723,
            price: 7.75,
            selector: 'p8'
        },
        {
            name: 'language-liquid',
            description: 'The language-liquid package is one I cannot live without when theming for Shopify.',
            author: 'puranjayjain',
            url: 'https://atom.io/packages/language-liquid',
            downloads: 74741,
            stars: 94,
            price: 9.75,
            selector: 'p9'
        },
        {
            name: 'Highlight Selected',
            description: 'The Highlight Selected package is super simple: it highlights the current word selected on double click.',
            author: 'richrace',
            url: 'https://atom.io/packages/highlight-selected',
            downloads: 2607172,
            stars: 3251,
            price: 6.75,
            selector: 'p10'
        }
     ];

     //(Atom) Package contructor function
     function Package(data) {
         this.name = data.name;
         this.description = data.description;
         this.author = data.author;
         this.url = data.url;
         this.downloads = data.downloads;
         this.stars = data.stars;
         this.selector = data.selector; //*** REMEMBER TO ADD THIS IF YOU ADDED IT TO THE DATA OBJECTS * */

         this.getFormattedDownloads = function () {
             return this.downloads.toLocaleString();
         };

         this.getFormattedStars = function () {
             return this.stars.toLocaleString();
         };
     }

     /**********************************************
      * Utility functions
      **********************************************/

      //Returns today's date, formatted
      var getTodaysDate = function() {
          var today = new Date();
          return today.toDateString();
      };

      //Returns DOM element by id
      //We're just wrapping document.getElementById
      //in a shorthand function. if this seems confusing,
      // then just replace getEl with document.getElementById
      //in the writePackageInfo function
      var getEl = function(id) {
          return document.getElementById(id);
      }

      /**
       * Write the package object's data to the appropriate
       * DOM elements utilizing the package selector property.
       * @param {Package} package Package object
       * @return {void}
       */
      var writePackageInfo = function(package) {
          //Get reference to DOM elements
          var selector = package.selector,
          nameEl = getEl(selector + '-name'),
          descEl = getEl(selector + '-description'),
          authEl = getEl(selector + '-author'),
          downloadEl = getEl(selector + '-downloads'),
          starsEl = getEl(selector + '-stars');

          //Write package data to DOM elements
          nameEl.textContent = package.name;
          descEl.textContent = package.description;
          authEl.textContent = package.author;
          downloadEl.textContent = package.getFormattedDownloads();
          starsEl.textContent = package.getFormattedStars();
      }

      /**********************************************************
       * Utilize package data and constructor objects to
       * construct each package, then add package data to 
       * the page via DOM functions
       ***********************************************************/

       //Write date
       dateEl = getEl('date');
       dateEl.textContent = getTodaysDate();

       /**
        * Write package data one-by-one or with a for loop.
        * Remember to comment out the one you don't use
        */

        //Write package data one by one
        var emmet = new Package(data[0]);
        writePackageInfo(emmet);

        var beautify = new Package(data[1]);
        writePackageInfo(beautify);

        var autoclose = new Package(data[2]);
        writePackageInfo(autoclose);

        var liquid = new Package(data[3]);
        writePackageInfo(liquid);

        var blame = new Package(data[4]);
        writePackageInfo(blame);

        var plus = new Package(data[5]);
        writePackageInfo(plus);

        var timemachine = new Package(data[6]);
        writePackageInfo(timemachine);

        var linter = new Package(data[7]);
        writePackageInfo(linter);

        var liquid = new Package(data[8]);
        writePackageInfo(liquid);

        var highlight = new Package(data[9]);
        writePackageInfo(highlight);

        //continue with eight more packages....OR

        //Write package data using for loop
        //for (var i = 0; i < data.length; i++) {
        //      var package = new Package(data[i]);
        //      writePackageInfo(package);    
        //}
}());