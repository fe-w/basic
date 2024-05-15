import { AbtnModule, BbtnModule } from './module.js';      // ES6 Module
// const { AbtnModule, BbtnModule } = require('./module'); // CommonJS Module

const selectComponent = {
  aBtnProperty: AbtnModule,
  bBtnProperty: BbtnModule,
};

function loadModule(propertyName) {
  let mainContent = document.getElementById('main-content');
  const componentFunc = selectComponent[propertyName];
  mainContent.innerHTML = componentFunc ? componentFunc() : '';
}

globalThis.loadModule = loadModule;