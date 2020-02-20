const auditory = require("..");

test("smoke", function() {
  expect(auditory).toMatchInlineSnapshot(`[Function]`);
});

test("no arguments", function() {
  const result = auditory({});

  expect(result).toMatchInlineSnapshot(`
    Object {
      "configs": Array [
        Array [
          "@projectlint/plugin-README:single file",
          "error",
        ],
        Array [
          "@projectlint/plugin-README:standard readme",
          Array [
            "warning",
            Array [
              "slug",
              undefined,
              undefined,
              undefined,
              undefined,
              Object {
                "installable": true,
              },
            ],
          ],
        ],
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
          "@projectlint/plugin-operating-system:version",
          Object {
            "error": Object {
              "status": "maintained",
            },
          },
        ],
        Array [
          "@projectlint/plugin-package.json:engines.node version",
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
          "@projectlint/plugin-package.json:has default version",
          "warning",
        ],
        Array [
          "@projectlint/plugin-package.json:npm-check-updates",
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
          "@projectlint/plugin-package.json:npm-package-json-lint",
          Array [
            "error",
            Object {
              "description-format": Array [
                "error",
                Object {
                  "forbidEndingPeriod": true,
                  "requireCapitalFirstLetter": true,
                },
              ],
              "engines-type": "error",
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
              "require-engines": "warning",
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
      "format": undefined,
      "options": Object {},
      "rules": Array [
        Array [
          "@projectlint/plugin-README:single file",
          Object {
            "evaluate": [Function],
            "fetch": [Function],
          },
        ],
        Array [
          "@projectlint/plugin-README:standard readme",
          Object {
            "evaluate": [Function],
            "fetch": [Function],
          },
        ],
        Array [
          "@projectlint/plugin-node.js:version",
          Object {
            "evaluate": [Function],
            "fetch": [Function],
          },
        ],
        Array [
          "@projectlint/plugin-operating-system:version",
          Object {
            "evaluate": [Function],
            "fetch": [Function],
          },
        ],
        Array [
          "@projectlint/plugin-package.json:engines.node version",
          Object {
            "evaluate": [Function],
            "fetch": [Function],
          },
        ],
        Array [
          "@projectlint/plugin-package.json:has default version",
          Object {
            "evaluate": [Function],
            "fetch": [Function],
          },
        ],
        Array [
          "@projectlint/plugin-package.json:npm-check-updates",
          Object {
            "evaluate": [Function],
            "fix": [Function],
          },
        ],
        Array [
          "@projectlint/plugin-package.json:npm-package-json-lint",
          Object {
            "evaluate": [Function],
            "fix": [Function],
          },
        ],
      ],
    }
  `);
});

test("strict", function() {
  const result = auditory({ configLevel: "strict" });

  expect(result).toMatchInlineSnapshot(`
    Object {
      "configs": Array [
        Array [
          "@projectlint/plugin-README:single file",
          "error",
        ],
        Array [
          "@projectlint/plugin-README:standard readme",
          Array [
            "error",
            Array [
              undefined,
              undefined,
              undefined,
              undefined,
              undefined,
              Object {
                "installable": true,
                "toc": true,
              },
            ],
          ],
        ],
        Array [
          "@projectlint/plugin-node.js:version",
          Object {
            "error": Object {
              "status": "lts_active",
            },
          },
        ],
        Array [
          "@projectlint/plugin-operating-system:version",
          Object {
            "error": Object {
              "status": "maintained",
            },
          },
        ],
        Array [
          "@projectlint/plugin-package.json:engines.node version",
          Object {
            "error": Object {
              "status": "lts_active",
            },
          },
        ],
        Array [
          "@projectlint/plugin-package.json:has default version",
          "error",
        ],
        Array [
          "@projectlint/plugin-package.json:npm-check-updates",
          Object {
            "error": Object {
              "errorLevel": 2,
            },
          },
        ],
        Array [
          "@projectlint/plugin-package.json:npm-package-json-lint",
          Array [
            "error",
            Object {
              "description-format": Array [
                "error",
                Object {
                  "forbidEndingPeriod": true,
                  "requireCapitalFirstLetter": true,
                },
              ],
              "engines-type": "error",
              "no-absolute-version-dependencies": "error",
              "no-absolute-version-devDependencies": "error",
              "no-archive-dependencies": "error",
              "no-archive-devDependencies": "error",
              "no-duplicate-properties": "error",
              "no-file-dependencies": "error",
              "no-file-devDependencies": "error",
              "no-git-dependencies": "error",
              "no-git-devDependencies": "error",
              "no-repeated-dependencies": "error",
              "prefer-alphabetical-bundledDependencies": "error",
              "prefer-alphabetical-dependencies": "error",
              "prefer-alphabetical-devDependencies": "error",
              "prefer-alphabetical-optionalDependencies": "error",
              "prefer-alphabetical-peerDependencies": "error",
              "prefer-alphabetical-scripts": "error",
              "prefer-no-engineStrict": "error",
              "prefer-no-version-zero-dependencies": "error",
              "prefer-no-version-zero-devDependencies": "error",
              "prefer-property-order": "error",
              "require-author": "error",
              "require-bugs": "error",
              "require-contributors": "error",
              "require-description": "error",
              "require-engines": "error",
              "require-homepage": "error",
              "require-keywords": "error",
              "require-license": "error",
              "require-main": "error",
              "require-private": "error",
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
              "valid-values-name-scope": Array [
                "error",
                Array [
                  "@[0-1a-z._-]+",
                ],
              ],
            },
          ],
        ],
      ],
      "format": undefined,
      "options": Object {},
      "rules": Array [
        Array [
          "@projectlint/plugin-README:single file",
          Object {
            "evaluate": [Function],
            "fetch": [Function],
          },
        ],
        Array [
          "@projectlint/plugin-README:standard readme",
          Object {
            "evaluate": [Function],
            "fetch": [Function],
          },
        ],
        Array [
          "@projectlint/plugin-node.js:version",
          Object {
            "evaluate": [Function],
            "fetch": [Function],
          },
        ],
        Array [
          "@projectlint/plugin-operating-system:version",
          Object {
            "evaluate": [Function],
            "fetch": [Function],
          },
        ],
        Array [
          "@projectlint/plugin-package.json:engines.node version",
          Object {
            "evaluate": [Function],
            "fetch": [Function],
          },
        ],
        Array [
          "@projectlint/plugin-package.json:has default version",
          Object {
            "evaluate": [Function],
            "fetch": [Function],
          },
        ],
        Array [
          "@projectlint/plugin-package.json:npm-check-updates",
          Object {
            "evaluate": [Function],
            "fix": [Function],
          },
        ],
        Array [
          "@projectlint/plugin-package.json:npm-package-json-lint",
          Object {
            "evaluate": [Function],
            "fix": [Function],
          },
        ],
      ],
    }
  `);
});

test("unkown configLevel", function() {
  function func() {
    auditory({ configLevel: "unknown" });
  }

  expect(func).toThrowErrorMatchingInlineSnapshot(
    `"Package '@projectlint/plugin-README' don't have config level 'unknown'"`
  );
});
