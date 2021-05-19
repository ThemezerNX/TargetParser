# Target Parser

A small library that converts menu names from layouts, themes and `SZS` files.  
For example:
`Home Menu` (nice) <-> `home` (theme) <-> `homemenu` (web) <-> `ResidentMenu` (target) <-> `ResidentMenu.szs` (target) -> `0100000000001000` (titleId)

-   `Home Menu` (nice): the 'nice' name displayed in UI.
-   `home` (theme): the nxtheme target.
-   `homemenu` (web): the short name used in e.g. urls on [Themezer.net](https://themezer.net/).
-   `ResidentMenu` (target): the target in a layout. It is also the actual filename of the menu.
-   `ResidentMenu.szs` (target): same as above.
-   `0100000000001000` (titleId): the internal system title that the menu is stored in.

# Build

```bash
# install dependencies
yarn

# compile the script
yarn run build
```
