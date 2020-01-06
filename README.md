# react-css-3d (WIP)

A React library for creating 3D objects and scenes without WebGL.

### Motivation

Over the years I have created a number of 3D scenes using only `CSS` / `HTML` so I decided to publish a library to make this easier for me. The library is `CSS` / `HTML` based, for this reason its capabilities are limited. You shouldn’t expect the same levels of fidelity as a WebGL based solution.

### Browser Support

The library is supported by most evergreen browsers, however as each browser handles css-transformations differently you may experience varying frame rates and quality. **The library makes heavy use of the `preserve-3d` transform-style which is not supported by any version of IE.**
