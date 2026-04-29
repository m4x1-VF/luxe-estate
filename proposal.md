# Proposal: Fix Theme Toggle Dark Mode Issue

## Intent
The theme toggle button does not switch to dark mode when clicked, even though the UI for the toggle exists.
The root cause is that the ThemeContext initializes with a hardcoded 'light' state, while the layout script applies the correct theme class from localStorage or system preference, causing a state mismatch.

## Scope
### In Scope
- Modify ThemeContext to initialize state using a lazy initializer that reads from localStorage and system preference.
- Ensure the theme toggle correctly updates the context and applies the theme class to the body.

### Out of Scope
- Redesigning the theme toggle UI.
- Adding additional themes beyond light and dark.

## Capabilities
### New Capabilities
- None

### Modified Capabilities
- theme-management: Update the initialization logic to respect user preference and system setting.

## Approach
Use useState with a lazy initializer function that checks localStorage for a saved theme, then checks the system preference (window.matchMedia('(prefers-color-scheme: dark)')), and defaults to 'light' if neither is available.
Also, ensure that the context provider updates the body class when the theme changes.

## Affected Areas
| Area | Impact | Description |
|------|--------|-------------|
| src/context/ThemeContext.tsx | Modified | Update state initialization and setter to persist theme to localStorage and update body class. |
| src/layout/scripts/theme.ts | Possibly Modified | May need to adjust if it's duplicating context logic, but likely can be removed or simplified. |

## Risks
| Risk | Likelihood | Mitigation |
|------|------------|------------|
| The theme toggle might not persist across pages if not properly synced with localStorage. | Low | By reading from localStorage in the initializer and updating it on change, we ensure persistence. |
| Flash of incorrect theme on initial load. | Low | The initializer runs synchronously during component mount, so the theme is set before render. |

## Rollback Plan
Revert the changes to ThemeContext.tsx and any layout script changes. Since we are only modifying the context initialization and possibly removing redundant script, we can go back to the previous version.

## Dependencies
- None

## Success Criteria
- [ ] Clicking the theme toggle switches between light and dark mode.
- [ ] The selected theme persists across page reloads.
- [ ] The theme respects the system preference on first visit if no saved preference.
- [ ] No flash of incorrect theme on initial load.