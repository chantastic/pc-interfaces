CONTRIBUTING
------------

Committing to Interfaces different that committing to the apps.

Here's the cheat-sheet:

1. create a branch off `develop`: `feature/my-feature`
2. do your thing
3. update [CHANGELOG.md](https://github.com/ministrycentered/interfaces/blob/master/CHANGELOG.md).
4. PR your feature branch into `develop`

You're done! Have some coffee.

What happens next?
==================

I'll review it and merge it into `develop`.

When will my feature be available?
==================================

Once merged into `develop`, you can update the App you're working on to bundle
in the `develop` branch.

You`ll need to walk through the CHANGELOG for every item between the current
version of Interfaces and the tip of `develop`.

**caveat**: Working off of develop can be dangerous. The features there have not
been tested in production yet. Work cautiously.

How could I use this new feature right away?
============================================

You can use your feature-branch right away in the App you are working on. The
same caveat applies as using the `develop` branch.

I'll keep feature branches around until all apps are updated to the next
Interfaces release.

Why are you fiddling with my commits?
=====================================

To keep contributing simple, I may massage some elements of your commit for
uniformity and transportabliity of your feature:

* squash your commits into a single commit
* update the CHANGELOG entry with a more appropriate type
* update the commit message, for history consistency.

The CHANGELOG and git history are super important for teams using Interfaces.
Instead of requiring you to adhere to a strict standard, I'll just make small
tweaks as neccessary.

**This does not mean that you did anything wrong. It's just to help those that
use your feature.**

How can I learn more about the process used to manage Interfaces?
=================================================================

I'll do my best to detail Interfaces process and reasoning on the
[Interfaces Wiki](https://github.com/ministrycentered/interfaces/wiki)
