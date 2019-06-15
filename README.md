# Dark Monokai Theme

A dark Monokai theme extension for JupyterLab. I use JLab quite extensively for development and always wanted a darker theme based on Monokai. If you like pitch black backgrounds with high contrast colours, this theme is for you.

**_Important: Dark Monokai is compatible with JupyterLab version 1.0.0 only_**

![dark_monokai_image](dark_monokai.png)

## Prerequisites

* JupyterLab

## Installation

```bash
jupyter labextension install theme-dark-monokai
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```
