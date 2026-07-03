# Writing Public Skills for react-faceplate

Public skills — skills meant for consumers of this library — belong in the `./skills/` directory at the root of the repository. This directory is included in the distributed npm package (see the `files` field in `package.json`), so its contents are shipped to consumers.

## File reference constraints

Skills in `./skills/` must only reference files that are part of the distributed package. The `files` field in `package.json` lists what is included:

```json
"files": [
    "skills",
    "dist",
    "lib/themes"
]
```

This means skills **may** reference:
- `dist/` — compiled JS/TS output and type declarations
- `lib/themes/` — theme files
- `skills/` — other public skills

Skills **must not** reference:
- `lib/components/` — source files not included in the package
- `src/` — application source
- `test/`, story files, config files, or any other dev-only paths

When writing a public skill, link to `dist/` paths or describe the public API surface rather than pointing at source files that won't exist in a consumer's `node_modules`.

## Placement and naming

- One skill per file, named after the concept it teaches (e.g., `button.md`, `form.md`).
- Use plain Markdown. Include a short description, the relevant component import, and a minimal usage example.
