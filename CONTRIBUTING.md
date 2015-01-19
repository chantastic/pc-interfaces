CONTRIBUTING
------------

Committing to Interfaces is a bit different than committing to a PCO app.
Features and fixes need to be isolated so we can control the way releases are
managed.

Submitting a Feature
====================

* Create your feature-branch from
  [develop](https://github.com/ministrycentered/interfaces/tree/develop).
* Name your branch with the `feature/` prefix (e.g. `feature/add-form-helper`).
* Add an entry to `CHANGELOG.md` with a short description of your change.

When your feature is done, make a PR back into `develop`. It will get cut into
the next release of Interfaces.

Submitting a Fix
================

* Create your fix branch from
  [master](https://github.com/ministrycentered/interfaces)
* Name your branch with the `hotfix/` prefix (e.g. `hotfix/fix-button-margin`).
* Add an entry to `CHANGELOG.md` with a short description of your change.

When your fix is done, make a PR back into `master`.

Additional Considerations
=========================

It is helpful when your feature/fix is squashed into a single commit. It makes
cherry-picking your feature into older releases much faster and reliable.

If your feature/fix does need to be cherry picked into older releases, please
mention that in the PR.

Extra Credit
============

Having a readable history is helpful in a project like this. Commits with these
qualities are appreciated.

* **Squashed** — Feature lives in a single commit.
* **Descriptive** — Message is well-formed.  See [these guidelines](https://github.com/planningcenter/commit-guidelines).

Updating the CHANGELOG
======================

With each feature/fix, please add an entry to
[CHANGELOG.md](https://github.com/ministrycentered/interfaces/blob/master/CHANGELOG.md).
This provides critical information as we update applications.

### Prefix your message with one of the following:

* [BUGFIX]
* [FEATURE <scope>]
* [PERFORMANCE]
* [DOC]

A couple examples:

[BUGFIX] Ensure App-Switcher order is consistent
[PERFORMANCE] Remove general purpose blur filter
[FEATURE modals] Add API for loading server-rendered modals
[FEATURE app-switcher] Dismiss with outside click
