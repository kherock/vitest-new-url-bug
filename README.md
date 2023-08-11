## Reproduction of `new URL(..., import.meta.url)` regression in Vitest 0.34

A test case in [basic.spec.js](./test/basic.spec.js) has been added asserting
that URLs are correctly transformed with an `http` protocol URL when the `jsdom`
environment (web transform mode) is configured.

This test will fail when Vitest is upgraded to 0.34:

```console
npm i -D vitest@0.34
npm test
```
