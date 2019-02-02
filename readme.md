# Testing HTML5 / CSS3 / TypeScript from [Tests | TestDome](https://www.testdome.com/tests)

Alternative sandbox:

* [TypeScript - JSFiddle](https://jsfiddle.net/boilerplate/typescript)

## App Template: Stencil App Starter

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all. In many cases, Stencil can be used as a drop in replacement for traditional frontend frameworks given the capabilities now available in the browser, though using it as such is certainly not required.

Stencil also enables a number of key capabilities on top of Web Components, in particular Server Side Rendering (SSR) without the need to run a headless browser, pre-rendering, and objects-as-properties (instead of just strings).

## Getting Started

To start a new project using Stencil, clone this repo to a new directory:

```bash
git clone https://github.com/ionic-team/stencil-app-starter stncl-ensure
cd stncl-ensure

# notice you are connected to original origin
git remote -v
# origin  https://github.com/ionic-team/stencil-app-starter (fetch)

# Create a new git repo e.g. on github

# disconnect from old origin and connect to your new origin
git remote set-url origin https://github.com/rasor/stncl-ensure.git

# notice you are now connected to your own origin
git remote -v
# origin  https://github.com/rasor/stncl-ensure.git (fetch)
```

and run:

```bash
npm install
npm start
# http://localhost:3333/ will open in your browser
```

To build the app for production, run:

```bash
npm run build
```

To run the unit tests once, run:

```
npm test
```

To run the unit tests and watch for file changes during development, run:

```
npm run test.watch
```
