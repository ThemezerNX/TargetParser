# Target Parser

A small library that converts menu names from layouts, themes and `SZS` files.  
For example:
`Home Menu` (nice) <-> `home` (theme) <-> `homemenu` (web) <-> `ResidentMenu` (target) <-> `ResidentMenu.szs` (target)

-   `Home Menu` (nice): the 'nice' name displayed in UI.
-   `home` (theme): the nxtheme target.
-   `homemenu` (web): the short name used in e.g. urls on [Themezer.net](https://themezer.net/).
-   `ResidentMenu` (target): the target in a layout. It is also the actual filename of the menu.
-   `ResidentMenu.szs` (target): same as above.

# Build

```bash
# install dependencies
yarn

# compile the script
yarn run build
```
