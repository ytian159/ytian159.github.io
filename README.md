# Yuan Tian’s website

Public website: https://ytian159.github.io/

A static academic website. GitHub Pages publishes the master branch at the repository root. No build tools are required; `.nojekyll` serves the prepared HTML, CSS, JavaScript, images, and CV PDF directly.

Legacy `/cv/`, `/resume/`, `/publications/`, `/research/`, and `/about/` links point to the current content. `/Life/` retains the original Alaska photography. Previously public files and images remain available at their existing URLs.

## Restore the previous website

The full pre-redesign source and its history are preserved on branch `backup/pre-redesign-2026-10-02`, commit `25fd06f1b4729ffa60cd507cfeeb30959f3e6588`. To restore while preserving subsequent history, create a new commit on `master` whose complete tree is the backup commit’s tree. Review the diff, push that new commit, and verify the Pages deployment. Do not force-push or reset published history.
