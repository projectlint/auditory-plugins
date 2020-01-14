test("smoke", function() {
  const result = require("..");

  expect(result).toMatchInlineSnapshot(`
    Object {
      "configs": Array [
        Array [
          "@projectlint/plugin-node.js:version",
          Object {
            "error": Object {
              "status": "maintained",
            },
            "warning": Object {
              "status": "lts_active",
            },
          },
        ],
        Array [
          "@projectlint/rules-package.json:npm-check-updates",
          Object {
            "error": Object {
              "errorLevel": 2,
              "semverLevel": "major",
            },
            "warning": Object {
              "errorLevel": 2,
            },
          },
        ],
        Array [
          "@projectlint/rules-package.json:npm-package-json-lint",
          Array [
            "error",
            Object {
              "no-absolute-version-dependencies": "error",
              "no-absolute-version-devDependencies": "error",
              "no-duplicate-properties": "error",
              "no-file-dependencies": "error",
              "no-file-devDependencies": "error",
              "no-repeated-dependencies": "error",
              "prefer-alphabetical-bundledDependencies": "error",
              "prefer-alphabetical-dependencies": "error",
              "prefer-alphabetical-devDependencies": "error",
              "prefer-alphabetical-optionalDependencies": "error",
              "prefer-alphabetical-peerDependencies": "error",
              "prefer-alphabetical-scripts": "error",
              "prefer-no-engineStrict": "error",
              "prefer-property-order": "warning",
              "require-author": "error",
              "require-bugs": "error",
              "require-description": "error",
              "require-homepage": "error",
              "require-license": "error",
              "require-repository": "error",
              "require-scripts": "error",
              "rules": Object {
                "bin-type": "error",
                "config-type": "error",
                "cpu-type": "error",
                "dependencies-type": "error",
                "description-type": "error",
                "devDependencies-type": "error",
                "directories-type": "error",
                "engines-type": "error",
                "files-type": "error",
                "homepage-type": "error",
                "keywords-type": "error",
                "license-type": "error",
                "main-type": "error",
                "man-type": "error",
                "name-format": "error",
                "name-type": "error",
                "optionalDependencies-type": "error",
                "os-type": "error",
                "peerDependencies-type": "error",
                "preferGlobal-type": "error",
                "private-type": "error",
                "repository-type": "error",
                "require-name": "error",
                "require-version": "error",
                "scripts-type": "error",
                "version-format": "error",
                "version-type": "error",
              },
            },
          ],
        ],
      ],
      "rules": Array [
        Array [
          "@projectlint/plugin-node.js:version",
          Object {
            "evaluate": [Function],
            "fetch": [Function],
          },
        ],
        Array [
          "@projectlint/rules-package.json:npm-check-updates",
          Object {
            "evaluate": [Function],
            "fix": [Function],
          },
        ],
        Array [
          "@projectlint/rules-package.json:npm-package-json-lint",
          Object {
            "evaluate": [Function],
            "fix": [Function],
          },
        ],
      ],
    }
  `);
});
