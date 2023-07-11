const { defineConfig } = require("cypress");
module.exports = defineConfig({

   "defaultCommandTimeout": 10000, 
  projectId: 'e9b9h9',

    
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },

});
