INTERFACES CHANGELOG
--------------------

### 0.0.3 (June 24, 2014)

* [BUGFIX] Fix mobile and tablet breakpoint values. Use px rather than ems (ems split pixels in some cases)
* [DEPRECATION] Single `.select2` class options. Apps should update to multi-selector BEM-style
* [FEATURE] add `.list` style-primitive, for more appropriate cross-device lists.
* [DOC] update form docs for checkboxes
* [FEATURE] add checkbox module
* [BUXFIX] add 'select' prefix to '.select2' selector in `INTERFACES.formInit()`
* [BUGFIX] fix asset:precompile issue with comments in modals.css
* [FEATURE] add alert variant `alert--small`.
* [DOC] update documentation for alerts, adding `alert--small` variant.
* [FEATURE] add badge variant `badge--small`.
* [FEATURE] change badge variant `badge--mini` to `badge--tiny` to match button convention.
* [BUGFIX] `-staging.planningcenteronline.com` added back into App-Switcher
* [BREAKING FIX] Select2 is no longer targets *all* `select` elements.  Use the `.select2` class to Select2-ize a select.
* [BUGFIX] Gemlock select2-rails to pre-3.5.2 version [the bug](https://github.com/ivaynberg/select2/issues/2412)

### 0.0.2 (June 9, 2014)

* First shared release between Accounts and Check-ins
