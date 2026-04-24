/*
 * Adapted from Esri/storymaps-developer-samples — embed/fonts/font-config.js
 * https://github.com/Esri/storymaps-developer-samples (Apache 2.0)
 */
import './scss/style.scss';

window.storyMapsEmbedConfig = {
  storyId: '92f8a6e40cf949e3963a6d289d803337',
  rootNode: '.storymaps-root',
  // Height of the custom site-header in index.html; keep in sync with
  // `$header-height` in src/scss/style.scss so the embed positions its
  // internal sticky UI below our header.
  topOffset: '3rem',
  font: {
    title: {
      fontFamily: 'RISD Serif Complete',
      weight: { normal: 300, bold: 400 }
    },
    body: {
      fontFamily: 'RISD Sans',
      weight: { normal: 400, bold: 700 }
    }
  }
};

const script = document.createElement('script');
script.id = 'embed-script';
script.src = 'https://storymaps.arcgis.com/embed/view';
document.body.appendChild(script);
