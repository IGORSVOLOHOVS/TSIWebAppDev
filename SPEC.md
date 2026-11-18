# tsiweb-app-dev - software requirements specification

Reverse-engineered on 2026-11-18 from commit `108fe26` (branch `release`, tag
`v1.0.0`). It describes what the code does, not what the course assignment
asked for. The assignment text is not in the repository. Documentation hub:
[docs/README.md](docs/README.md).

<!-- jira-sync:start -->
Jira: KAN-95

## Tasks

This list is one ticket in Jira project KAN, [KAN-95](https://igorsvolohovs.atlassian.net/browse/KAN-95). Each line is a checkbox there: tick it in Jira and the sync ticks it here; add a checkbox there and it is appended here. Done items are the features described in section 3; open items are what the project declares but the code does not do yet.

- [x] Page content (section 3.1) <!-- spec-page-content -->
- [x] Show and hide (section 3.2) <!-- spec-show-and-hide -->
- [x] Layout and styling (section 3.3) <!-- spec-layout-and-styling -->
- [x] Repository interface (section 3.4) <!-- spec-repository-interface -->
- [ ] Commit `ceab5c2` is titled "pin ruff and pytest", but `.claude/pytest.ini:1-2` (declared, not implemented) <!-- spec-commit-ceab5c2-is-titled-pin-ruff-and-pytest-but-c -->
- [ ] `.claude/pytest.ini:2` refers to "the scripts this repository carries" and (declared, not implemented) <!-- spec-claude-pytest-ini-2-refers-to-the-scripts-this-rep -->
- [ ] `README.md:49` lists five lab requirements not met: (declared, not implemented) <!-- spec-readme-md-49-lists-five-lab-requirements-not-met -->

<!-- jira-sync:end -->

## 1. Purpose and scope

The repository holds a static profile page from a TSI web application
development course, October 2024 (`README.md:3-5`; first commit `04faefa`,
2024-10-04).

In scope:

- `index.html`, `css/style.css`, `js/script.js` and `img/avatar.png` on `release`.
- One requirement (FR-11) that ties the repository to its lab tooling.

Out of scope:

- The later exercises kept as tags `import/class1`, `import/lab1` and
  `import/lab2` (`README.md:23-34`).
- The content of the shared tooling (`.claude/`, `.gitea/`). It is specified by
  [repo-quality-template](https://github.com/IGORSVOLOHOVS/repo-quality-template).

## 2. Context

| Item | Description | Source |
|---|---|---|
| Actor: visitor | Opens the page and clicks the two buttons | `index.html:29-30` |
| Actor: maintainer | Runs `recipe.ps1` verbs | `README.md:38-41` |
| Runtime | A web browser opening `index.html` directly; no server | `README.md:18` |
| External systems | None for the page: every reference is a relative path | `index.html:7`, `index.html:12`, `index.html:32` |
| Tooling runtime | PowerShell, git, Python with pytest and ruff | `recipe.ps1:42-53` |

## 3. Functional requirements

### 3.1 Page content

- **FR-1.** The system shall serve one English-language HTML page titled
  "My Profile" that links `css/style.css` and loads `js/script.js` at the end
  of `body`.
  Source: `index.html:2`, `index.html:6-7`, `index.html:32`. Verification: no test.
- **FR-2.** The system shall show, inside a `div.profile-card`, the image
  `img/avatar.png` with alt text "Avatar" and class `avatar`, followed by an
  `h2.name` heading with the author's name.
  Source: `index.html:10-14`. Verification: no test.
- **FR-3.** The system shall show a `div.info` block with three labelled
  paragraphs (`p.nickname`, `p.hobby`, `p.dish`).
  Source: `index.html:15-19`. Verification: no test.
- **FR-4.** The system shall show a `div.skills` block with a "Skills:" label
  and an unordered list of four items.
  Source: `index.html:20-28`. Verification: no test.
- **FR-5.** The system shall show two buttons, `#toggle-info` labelled
  "Toggle Info" and `#toggle-skills` labelled "Toggle Skills".
  Source: `index.html:29-30`. Verification: no test.

### 3.2 Show and hide

- **FR-6.** The system shall attach the button handlers only after the
  `DOMContentLoaded` event.
  Source: `js/script.js:1`. Verification: no test.
- **FR-7.** On a click on `#toggle-info`, the system shall set the inline
  `display` of `div.info` to `block` when it is `none` or empty, and to `none`
  otherwise.
  Source: `js/script.js:7-13`. Verification: no test.
- **FR-8.** On a click on `#toggle-skills`, the system shall apply the same
  rule to `div.skills`.
  Source: `js/script.js:15-21`. Verification: no test.

Consequence of FR-7 and FR-8, from reading the code: the inline `display` is
empty at load, and the stylesheet sets no `display` for either block. The first
click on each button therefore leaves the page unchanged, and the second click
hides the block. This was not observed in a browser.

### 3.3 Layout and styling

- **FR-9.** The system shall centre the card both horizontally and vertically
  with a flex `body` at least one viewport high, on background `#f4f4f4`, in a
  sans-serif font.
  Source: `css/style.css:1-8`. Verification: no test.
- **FR-10.** The system shall draw the card with a white background, a 10 px
  border radius, a box shadow, 30 px padding and centred text. The avatar is
  shown as a 150x150 px circle (`object-fit: cover`) with 20 px below its
  container, and the info paragraphs have a 10 px bottom margin.
  Source: `css/style.css:10-31`. Verification: no test.

### 3.4 Repository interface

- **FR-11.** The repository shall carry the lab tooling of
  repo-quality-template, requirements revision 4.0.0. Its `recipe.ps1` is
  configured as follows: `test` runs pytest, `ruff check` and `ruff format`
  over `.claude` and accepts pytest exit 5; `info` prints Name, Code, Version
  and Summary; `clean` deletes `__pycache__`, `.pytest_cache` and
  `.ruff_cache` directories; `build`, `install`, `uninstall`, `run` and
  `publish` print `nothing to <verb>` and exit 0.
  Source: `README.md:49`, `recipe.ps1:3`, `recipe.ps1:41-73`.
  Verification: no test. `.\recipe.ps1 info` and `.\recipe.ps1 run` were run on
  2026-11-18 (exit 0). CI runs `.\recipe.ps1 test` at
  `.gitea/workflows/propose.yaml:146`.

### 3.5 Declared but not implemented

- Commit `ceab5c2` is titled "pin ruff and pytest", but `.claude/pytest.ini:1-2`
  holds no version constraint. Only ruff is pinned (`.claude/ruff.toml:2`).
- `.claude/pytest.ini:2` refers to "the scripts this repository carries" and
  adds "None yet". `.claude` carries only PowerShell hooks: `git ls-files`
  lists no Python file and no test.
- `README.md:49` lists five lab requirements not met: R-02, R-09, R-37, R-41,
  R-42 (issues #7-#11). Only two are described here: R-02 puts keys in a
  committed `.claude/.env` (`CLAUDE.md:20-22`), and R-09 is tied to the
  pre-lab history not being reworded or signed off (`CLAUDE.md:66-67`). The
  content of R-37, R-41 and R-42 is not in the repository.

## 4. Interfaces

Page elements, the only interface the page has:

| Selector | Element | Role | Source |
|---|---|---|---|
| `.profile-card` | `div` | Card container | `index.html:10` |
| `.avatar` | `img` | Photo, `src="img/avatar.png"` | `index.html:12` |
| `.name` | `h2` | Name heading | `index.html:14` |
| `.info` | `div` | Info block, target of `#toggle-info` | `index.html:15`, `js/script.js:2` |
| `.skills` | `div` | Skills block, target of `#toggle-skills` | `index.html:20`, `js/script.js:3` |
| `#toggle-info` | `button` | Shows and hides `.info` | `index.html:29`, `js/script.js:4` |
| `#toggle-skills` | `button` | Shows and hides `.skills` | `index.html:30`, `js/script.js:5` |

File references:

| From | To | Kind | Source |
|---|---|---|---|
| `index.html` | `css/style.css` | `<link rel="stylesheet">` | `index.html:7` |
| `index.html` | `img/avatar.png` | `<img src>` | `index.html:12` |
| `index.html` | `js/script.js` | `<script src>` | `index.html:32` |

## 5. Data

- All content is static text in `index.html`. The page has no forms, no
  storage APIs and no network requests (`js/script.js:1-22`).
- The only state is the inline `style.display` of `.info` and `.skills`. It is
  not persisted and is lost on reload (`js/script.js:7-21`).
- `img/avatar.png`: PNG, 960x1280, 8-bit RGBA, 2,278,070 bytes in this
  working tree. Git stores it as a Git LFS pointer (`.gitattributes:9`,
  `git show --stat ceab5c2`).

## 6. Non-functional requirements

- **NFR-1.** No build step and no package manifest on `release`
  (`README.md:18`; `git ls-files` lists no `package.json`).
- **NFR-2.** No external resources: the page loads only relative paths
  (`index.html:7`, `index.html:12`, `index.html:32`).
- **NFR-3.** The page declares UTF-8 (`index.html:4`) and the viewport
  `width=device-width, initial-scale=1.0` (`index.html:5`).
- **NFR-4.** Text files are stored with LF line endings (`.gitattributes:1`).
  `*.ps1` files are stored with LF too and checked out with CRLF
  (`.gitattributes:2`, `git ls-files --eol`).
- **NFR-5.** PNG, JPG, PDF, ZIP and 7z files go through Git LFS
  (`.gitattributes:8-12`).
- **NFR-6.** The code is under the MIT licence, 2024 (`LICENSE:1-3`).

## 7. Constraints and dependencies

| Dependency | Version | Used for | Source |
|---|---|---|---|
| Web browser | not stated | Running the page | `README.md:18` |
| Git LFS | not stated | Getting the real `img/avatar.png` | `.gitattributes:9` |
| ruff | `==0.16.1` (required-version) | `recipe.ps1 test` | `.claude/ruff.toml:2`, `recipe.ps1:49-52` |
| pytest | not pinned | `recipe.ps1 test` | `.claude/pytest.ini`, `recipe.ps1:46` |
| Python | not pinned | Hosts pytest and ruff | `recipe.ps1:46` |
| PowerShell | not stated | `recipe.ps1` | `recipe.ps1` |

The page uses no JavaScript or CSS library. There are no lock files.

## 8. Acceptance

1. Clone with Git LFS. Check that `img/avatar.png` is a PNG and not a 132-byte
   pointer (NFR-5).
2. Open `index.html` in a browser. Check that the card, photo, name, three
   info lines, skills list and both buttons are present and centred (FR-1 to
   FR-5, FR-9, FR-10).
3. Click **Toggle Info** three times. Under FR-7 the first click changes
   nothing, the second hides `.info` and the third shows it again. Repeat with
   **Toggle Skills** (FR-8).
4. Check in the browser's network panel that no request leaves the local
   folder (NFR-2).
5. Run `.\recipe.ps1 info`. It should print four metadata lines and exit 0
   (FR-11). With ruff 0.16.1 and pytest installed, `.\recipe.ps1 test` should
   exit 0 (FR-11).

## 9. Open questions

- Who the page is for, and what the assignment required: the assignment text
  is not on `release`.
- Whether the first-click no-op (section 3.2) is intended, and whether the
  info and skills blocks were meant to start hidden.
- Which browsers and screen sizes the page targets. Nothing states it.
- What R-37, R-41 and R-42 require (R-02 and R-09: section 3.5). They are
  named in `README.md:49`, but the requirements document is only linked at a
  local address.
- Whether a Gitea runner serves this repository, that is, whether the
  workflows in `.gitea/workflows/` have run (`CLAUDE.md:44-46`, `CLAUDE.md:68-70`).
  The lightweight tag `v1.0.0` on `108fe26` is what
  `.gitea/workflows/release.yaml:292` would create, but a tag made by hand
  looks the same.
- Answered: `$Version = '1.0.0'` (`recipe.ps1:11`) versions the releases of
  the `release` branch, not the page. `.gitea/workflows/release.yaml:45-54`
  reads it and publishes a release tagged `v<Version>` unless that tag
  already exists (`.gitea/workflows/release.yaml:292`).
