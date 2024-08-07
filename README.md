# react-faceplate

This is my personal react component library. I found that I like to use the same
simple UI components in various projects. While there are UI libraries out there,
there are complicated to use, documentation is lacking, and often come with a lot
of issues. While they serve perfectly well some projects, I like to stick with something simpler.

This library contains very simple components that come with some default styles
and behaviors. The library is heavily opinionated as it's meant to solve my own
personal UI and styling needs. Because of that, some of solutions inside could seem quirky.

## Installation

To install the package, make sure that you have access to `@pawel-kuznik` GitHub package
repository. This can be done with supplying configuration in `.npmrc`. The easiest way 
is to just copy the contents of this repository `.npmrc` and then supplying your own personal
GitHub token via environmental variables.

When the setup is done, run:

```
npm install --save @pawel-kuznik/react-faceplate
```

## Themes and styles

The library comes with some themes built in. Specifically, one build in style at the time
of the writing.

To chose which theme should be applied import a top-level CSS file from this repository, just like:

```
import "@pawel-kuznik/react-faceplate/lib/themes/nostalgia-neon/index.css";
```

## Oddities around storybook

Working with storybook in this repository is a little bit quirky. It can seem that storybook
isn't picking up changes when working on components. This is most likely cause there is a build
artifact and storybook prioritizes the .jsx file. This can be done by running `npm run clear-build-artifacts`.

### Credits

The repository was setup as react library with the help of methodology found in this article:

https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma