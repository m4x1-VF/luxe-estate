# Delta for ThemeContext

## ADDED Requirements

### Requirement: Lazy Theme Initialization

The ThemeProvider MUST initialize the theme state using a lazy initializer function that reads from persistent storage before the first render.

The system MUST check the following sources in order:
1. localStorage key `luxe-estate-theme` for a previously saved preference
2. `window.matchMedia("(prefers-color-scheme: dark)")` for system preference
3. Default to "light" only if neither source is available

The lazy initializer MUST run synchronously during component mount, BEFORE the first render cycle, to ensure React's initial render matches what the layout script applied.

#### Scenario: User has saved dark preference in localStorage

- GIVEN the user previously selected dark theme and localStorage contains `"luxe-estate-theme": "dark"`
- WHEN the ThemeProvider component mounts
- THEN the initial theme state MUST be "dark"
- AND the `document.documentElement.classList` MUST include "dark" class
- AND no flash of incorrect theme MUST occur

#### Scenario: User has no saved preference but system prefers dark

- GIVEN localStorage contains no `luxe-estate-theme` key
- GIVEN `window.matchMedia("(prefers-color-scheme: dark)").matches` is TRUE
- WHEN the ThemeProvider component mounts
- THEN the initial theme state MUST be "dark"
- AND the `document.documentElement.classList` MUST include "dark" class

#### Scenario: User has no saved preference and system prefers light

- GIVEN localStorage contains no `luxe-estate-theme` key
- GIVEN `window.matchMedia("(prefers-color-scheme: dark)").matches` is FALSE
- WHEN the ThemeProvider component mounts
- THEN the initial theme state MUST be "light"
- AND the `document.documentElement.classList` MUST NOT include "dark" class

#### Scenario: Running in server-side rendering environment

- GIVEN `window` is undefined (SSR context)
- WHEN the ThemeProvider component mounts
- THEN the initial theme state MUST default to "light"
- AND no CSS class manipulation MUST occur during SSR

### Requirement: Theme Toggle Persistence

The `toggleTheme` function MUST persist the new theme selection to localStorage and update the document element class in a single atomic operation.

The system MUST:
1. Calculate the new theme value based on the current state
2. Update the React state with the new theme
3. Save the new theme to localStorage key `luxe-estate-theme`
4. Toggle the "dark" class on `document.documentElement` based on the new theme

#### Scenario: User toggles from light to dark

- GIVEN the current theme state is "light"
- WHEN the user clicks the theme toggle button
- THEN the theme state MUST update to "dark"
- AND localStorage MUST contain `"luxe-estate-theme": "dark"`
- AND `document.documentElement.classList` MUST include "dark" class

#### Scenario: User toggles from dark to light

- GIVEN the current theme state is "dark"
- WHEN the user clicks the theme toggle button
- THEN the theme state MUST update to "light"
- AND localStorage MUST contain `"luxe-estate-theme": "light"`
- AND `document.documentElement.classList` MUST NOT include "dark" class

### Requirement: Theme Persistence Across Navigation

The theme selection MUST persist across page navigations and browser reloads.

The system MUST:
1. Read the saved theme from localStorage on every page load
2. Apply the theme class before the first visual render completes
3. Maintain theme consistency between initial layout script execution and ThemeContext initialization

#### Scenario: Page reload with saved preference

- GIVEN localStorage contains `"luxe-estate-theme": "dark"`
- GIVEN the user has previously navigated to a different page with dark theme selected
- WHEN the user reloads the current page
- THEN the theme MUST be "dark" on initial render
- AND `document.documentElement.classList` MUST include "dark" class

#### Scenario: Browser restart with saved preference

- GIVEN the user has selected dark theme and closed the browser
- GIVEN localStorage contains `"luxe-estate-theme": "dark"`
- WHEN the user restarts the browser and revisits the site
- THEN the theme MUST be "dark" on initial render
- AND `document.documentElement.classList` MUST include "dark" class

## MODIFIED Requirements

### Requirement: Theme Context Provider

The ThemeProvider MUST initialize state using lazy evaluation and MUST synchronize with the DOM element class on mount and toggle.

(Previously: ThemeContext initialized with hardcoded "light" state, causing mismatch with layout script's DOM class application)

#### Scenario: State initialization syncs with layout script

- GIVEN the layout script has already set `document.documentElement.classList.add("dark")` for flash prevention
- GIVEN localStorage does not contain a saved theme preference
- GIVEN `window.matchMedia("(prefers-color-scheme: dark)").matches` is TRUE
- WHEN the ThemeProvider component mounts and initializes state
- THEN the ThemeContext initial state MUST match the layout script's DOM class
- AND no class name mismatch MUST occur between initial layout script execution and React mount

#### Scenario: Toggle updates both state and DOM

- GIVEN the theme state is "light"
- WHEN the user clicks the toggle button
- THEN the theme state MUST update to "dark"
- AND `document.documentElement.classList` MUST immediately reflect "dark" class
- AND the toggle action MUST be synchronous, not batched with React's render cycle

## REMOVED Requirements

None. The original requirement of "hardcoded light theme initialization" has been replaced by lazy initialization that respects user preference and system settings.
