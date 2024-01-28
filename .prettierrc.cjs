// https://github.com/obartra/prettierrc
module.exports = {
    useTabs: false, // Indent lines with tabs instead of spaces.
    printWidth: 80, // Specify the length of line that the printer will wrap on.
    tabWidth: 2, // Specify the number of spaces per indentation-level.
    singleQuote: true, // Use single quotes instead of double quotes.
    /**
     * Print trailing commas wherever possible.
     * Valid options:
     *   - "none" - no trailing commas
     *   - "es5" - trailing commas where valid in ES5 (objects, arrays, etc)
     *   - "all" - trailing commas wherever possible (function arguments)
     */
    trailingComma: 'es5',
    /**
     * Specify which parse to use.
     * Valid options:
     *   - "flow"
     *   - "babylon"
     */
    parser: 'babel',
    /**
     * Do not print semicolons, except at the beginning of lines which may need them.
     * Valid options:
     * - true - add a semicolon at the end of every line
     * - false - only add semicolons at the beginning of lines that may introduce ASI failures
     */
    semi: true,
    /**
     * Add additional logging from prettierrc (not prettier itself).
     * Defaults to false
     * Valid options:
     * - true - enable additional logging
     * - false - disable additional logging
     */
  };