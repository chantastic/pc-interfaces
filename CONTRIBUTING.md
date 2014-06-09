CONTRIBUTING
------------

Contributing to Interfaces is a bit different than contributing to an app.
Your commit might get pulled into several active branches.  So it's important
that each commit be well-formed.

Interfaces is now being versioned.  The goal is to allow each app to keep on a
"safe" version, while new features are being developed.

Pull Requests
=============

Pull Requests will be expected to have the following qualities:

* **Squashed** — No more than one commit per feature/fix/update.
* **Descriptive** — Your commit message must be well-formed.  Follow [these guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines).
* **Updates CHANGELOG** — If your feature/fix changes Interfaces, it must include an addition to the CHANGELOG. This helps others know how to update their apps.  See [Updating the CHANGELOG](-updating-the-changelog)

Updating the CHANGELOG
======================

As you add features, add them to the top of the `CHANGELOG.md` file.  As we
develop new versions of Interfaces, the CHANGELOG acts as an roadmap for
upgrading applications.

### Prefix your message with one of the following:

* [BUGFIX]
* [FEATURE <scope>]
* [PERFORMANCE]
* [DOC]

Here are a couple examples:

[BUGFIX] Ensure App-Switcher order is consistent
[PERFORMANCE] Remove general purpose blur filter
[FEATURE modals] Add API for loading server-rendered modals
[FEATURE app-switcher] Dismiss with outside click
