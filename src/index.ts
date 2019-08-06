// Copyright (c) Itay B. Dafna.
// Distributed under the terms of the Modified BSD License.

import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for theme-dark-monokai
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'theme-dark-monokai:plugin',
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    const style = 'theme-dark-monokai/index.css';

    manager.register({
      name: 'Dark Monokai',
      isLight: false,
      themeScrollbars: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
