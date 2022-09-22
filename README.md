# Open-Rhein-Main 2022 Talk by Nils Knappmeier

## Title:

The ultimate web-frontend setup

## Abstract:

In the last twenty years web-frontends have grown from simple server-generated HTML
pages to full-blown applications that run a lot of code in the browser.
Managing this complexity is a challenge, but luckily a lot of tools like "eslint" have evolved over
the years. Those tools help us build and optimize our web-app, maintain the quality
of our code, and reduce the number of mistakes we make.

In this talk, Nils will present you his favorite field-tested tools that
should be part of every new frontend setup.

## Some information about the author and presenter:

With over 15 years of professional experience as a web developer,
Nils has a passion for automated tests and clean code.
He has been working as a full stack engineer at cosee since 2019.

# Contents

- TypeScript
- React / Vue
- vite (statt webpack)
- vitest (statt jest)
  - `yarn add -D vitest`
  - `vite-env.ts` -> `/// <reference types="vitest/globals" />`
  - adjust package.json -> add scripts
  - adjust tsconfig.json
  - adjust vite.config.ts
  - maybe do `yarn upgrade` to get latest dependencies
- react-testing-library
  - `yarn add -D @testing-library/react @testing-library/dom @testing-library/jest-dom @testing-library/user-event`
  - ReferenceError: document is not defined -> vite-config jsdom
  - setupTest.ts + vite.config.ts
- eslint + prettier
  - `npx eslint --init`
    - Choose "Check Syntax and find Problems"
    - Type of modules: esm
    - Framework: react
    - TypeScript: yes
    - Browser
  - `yarn add -D eslint prettier eslint-config-prettier eslint-plugin-testing-library @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react-hooks`
- oazapfts
  - `yarn add -D oazapfts`
  - Copy openapi.json to src/backend/openapi.json
  - Add "generate-api" script to package.json
  - yarn generate-api
- cypress
- i18next
- husky / lint-staged
- dependency-cruiser
- renovate-bot
- code-generators für OpenAPI (oazapfts, axios-client-openapi)
