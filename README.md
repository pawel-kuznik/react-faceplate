# react-faceplate

This is my personal react component library. I found that I like to use the same
simple UI components in various projects. While there are UI libraries out there,
there are complicated to use, documentation is lacking, and often come with a lot
of issues. While they serve perfectly well some projects, I like to stick with something simpler.

This library contains very simple components that come with some default styles
and behaviors. The library is heavily opinionated as it's meant to solve my own
personal UI and styling needs. Because of that, some of solutions inside could seem quirky.

## Themes and styles

The library comes with some themes built in.

## Oddities around storybook

Working with storybook in this repository is a little bit quirky. It can seem that storybook
isn't picking up changes when working on components. This is most likely cause there is a build
artifact and storybook prioritizes the .jsx file. This can be done by running `npm run clear-build-artifacts`.

### Credits

The repository was based on method shown in:

https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma