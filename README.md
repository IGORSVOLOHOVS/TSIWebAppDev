# tsiweb-app-dev

Coursework from a web application development course at TSI, October and
November 2024. Each exercise sat on a branch of its own; the default branch holds
the first one, a static profile page.

## What is here

`release` starts from GitHub's default branch, `main`:

- `index.html`, a profile card for Igors Volohovs: a photo, a nickname, a hobby,
  a favourite dish and a list of four "skills", three of them joke spellings of
  JavaScript.
- `css/style.css` styles the card; `img/avatar.png` is the photo.
- `js/script.js` makes the "Toggle Info" and "Toggle Skills" buttons show and
  hide their sections.

Open `index.html` in a browser; nothing needs building. The old README told you
to clone `WebLecture4`, a different repository; this one replaces it.

## Kept as tags

The other three branches on GitHub each replace the page with a later exercise.
Their own commits are kept here as tags, and none of them is built or tested:

- `import/class1`: a "Planets" page with a space background, a rotating sun and
  one card per planet with an animated picture, plus `sun.js`, a small Node.js
  `http` server that serves the folder on port 3000.
- `import/lab1`: a Node.js Express server (`server.js`, `npm start`) that serves
  a W3.CSS band template from `express/`, with a Sass stylesheet and a script
  that logs to the console and alerts when the contact form is submitted. The
  assignment's `.docx` is committed beside it.
- `import/lab2`: a Create React App project with a to-do list: add an item,
  mark it done, delete it. Only the generated `App.test.js` is there as a test.

## Working on it

This repository ships no program. `.\recipe.ps1` is still its whole interface:
`.\recipe.ps1 test` runs pytest and ruff over `.claude`, and `.\recipe.ps1 info`
prints the metadata. The other verbs print `nothing to <verb>`. `CLAUDE.md`
holds the rules.

## License

MIT, as it stood on GitHub. See [LICENSE](LICENSE).
