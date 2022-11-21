# Open-Rhein-Main 2022 Talk by Nils Knappmeier

## Title:

The ultimate web-frontend setup

## Abstract:

## The ultimate web-frontend setup

Ein Web-Frontend ist mehr als "nur eine Webseite". Hier stellen wir die Tools vor, die wir
verwenden, um Qualitätssicherung zu automatisieren, Fehler zu vermeiden und schneller
und entspannter zu entwickeln.

In this talk, Nils will present you his favorite field-tested tools that
should be part of every new frontend setup.

## Some information about the author and presenter:

With over 15 years of professional experience as a web developer,
Nils has a passion for automated tests and clean code.
He has been working as a full stack engineer at cosee since 2019.

# Contents

- TypeScript / React /vite (instead of webpack)
  - `yarn create vite --template react`
- vitest (instead of jest)
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
- eslint + prettier + husky + eslint
  - `npx eslint --init`
    - Choose "Check Syntax and find Problems"
    - Type of modules: esm
    - Framework: react
    - TypeScript: yes
    - Browser
  - `yarn add -D eslint prettier eslint-config-prettier eslint-plugin-testing-library @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react-hooks`
  - `npx mrm lint-staged`
- oazapfts
  - `yarn add -D oazapfts`
  - Copy openapi.json to src/backend/openapi.json
  - Add "generate-api" script to package.json:
    - `oazapfts src/backend/openapi.json src/backend/openapi-client.ts`
  - `yarn generate-api`
- mock-service-worker
  - `yarn add -D msw`
  - `npx msw init public`
  - https://blog.knappi.org/0013-mock-apis/
  - https://talks.cosee.biz/talk/7de0b6f2-6fd3-4432-9de4-a1c60cc2db4c
- cypress
  - For e2e-testing, I would use another repository, because it also involves
    the backend. You could try e2e-testing with mock-backend, but I haven't done
    this yet.
  - `@testing-library/cypress` is cool
  - There is an `eslint-plugin-cypress` as well.
- i18next
  - Support for translations can be useful, even if you only have a single
    language in the beginning.
  - i18next has many framework integrations and supports TypeScript
- dependency-cruiser
  - analyze dependencies between files and enforce rules (like "no circular dependencies")
- renovate-bot
  - creates MRs for dependency-upgrades
- code-generators für OpenAPI (oazapfts, axios-client-openapi)
