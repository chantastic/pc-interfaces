1. split up grid.sass
1. split up table.sass
1. split up top-bar.sass
1. split up tooltip.sass
1. split up modals.sass
1. split up panes.sass
1. split up `/legacy/*` into smallest possible requireable chunks
1. create mixins for themes (so applications can keep variables in app and avoid !default)
1. move more crazy defaults into `/patch`
1. create new base input
1. each app should see which selectors it uses
1. change use of legacy utility classes to minions
1. clearfix mixins shouldn't be used. classes instead