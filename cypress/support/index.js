// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// import whatwg-fetch to ignore fethced xhr requests 
import 'whatwg-fetch';
// Import commands.js using ES2015 syntax:
import './commands';
//import '@cypress/code-coverage/support'

// Delete window.fetch on every window load
Cypress.on('window:before:load', win => {
    delete win.fetch;
  });
  
  // skipping the xhr requests that is not useful 
  Cypress.Server.defaults({
    delay: 50,
    force404: false,
    ignore: (xhr) => {
    // handle custom logic for whitelisting
    return true;
    }
    })

    // Hack to always bind cy.server() to bind to webAppWindow
// Cypress.on('window:before', (window) => {
// 	// Get webApp iframe
// 	const docIframe = window.parent.document.getElementById("Your App: 'cypress'");
// 	const webAppWindow = docIframe.contentWindow;

// 	// Get current cypress server thats started
// 	const server = Cypress.state().server;
// 	if (server) {
// 		// bind server to our webApp window
// 		server.bindTo(webAppWindow);
// 	}
// });
// Alternatively you can use CommonJS syntax:
// require('./commands')
// const istanbul = require('istanbul-lib-coverage');

// const map = istanbul.createCoverageMap({});

// Cypress.on('window:before:unload', e => {
//   const coverage = e.currentTarget.__coverage__;

//   if (coverage) {
//     map.merge(coverage);
//   }
// });

// after(() => {
//   cy.window().then(win => {
//     const coverage = win.__coverage__;

//     if (coverage) {
//       map.merge(coverage);
//     }

//     cy.writeFile('.nyc_output/out.json', JSON.stringify(map));
//     cy.exec('nyc report --reporter=html');
//   });
// });
