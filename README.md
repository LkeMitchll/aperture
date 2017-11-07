# Aperture

A minimal instagram client to display the basics in a clean way. Built using react.

## Setup

1. Clone repo
2. Run `yarn` to install dependencies to `./node_modules`
3. Run `yarn run update` to clone font submodule (private)

## Development

You can build the project by running `yarn run build`, this will
bundle the site into the `dist` folder.

Run `yarn run start` to start a local development server, it will
watch for changes, build the site and reload the page in
a browser.

The site is deployed with [dokku][dokku] using a `Dockerfile`, to test the deploy locally before pushing you can:

1. Setup [docker][docker] on your machine.
2. Run `yarn run docker:build`
3. Run `yarn run docker:start`
4. Open `http://localhost:1337` in a browser.
5. Stop the container with `docker stop [id]`

[dokku]: https://github.com/dokku/dokku
[docker]: https://www.docker.com
