import * as jsdom from 'jsdom/lib/old-api.js';

declare const global: {
  window: any;
  document: any;
};

function setupJsDom(onInit?) {
  jsdom.env({
    html: `
      <!DOCTYPE html>
      <html>
        <head></head>
        <body>
          <div id="main">
            <div class="upload upload1"></div>
            <div class="upload upload2"></div>
          </div>
        </body>
      </html>
    `,
    features: {
      FetchExternalResources: ['script'],
      ProcessExternalResources: ['script'],
      MutationEvents: '2.0',
      QuerySelector: false,
    },
    done: (err, window) => {
      global.window = window;
      global.document = window.document;

      if (onInit) {
        onInit();
      }
    },
  });
}

function teardownJsDom() {
  delete global.window;
  delete global.document;
}

export {setupJsDom, teardownJsDom};
