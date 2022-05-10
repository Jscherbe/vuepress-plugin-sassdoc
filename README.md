# Vuepress Sassdoc Plugin

Creates pages for sassdoc groups in vuepress (as markdown). Supports all annotations, custom annotations, groups display name and description, as well as content blocks in content. Items organized by type (variable, mixin, etc).

If you encounter bugs or have a feature request, feel free to open an issue on github

## Features

- Can be used multiple times (useful for dividing things up into different 'pathBase')
- Compiled Sass examples (Dart Sass) 
- Compiled Sass can be configured to use your own implementation, see options
- Ability to add custom compiler (ie. if)
- Preview HTML examples (demos, etc)
- Content blocks between documented items
- Custom group display names 
- Ability to capture group descriptions (you can also use content blocks to describe groups)
- Ability to override annotation and page templates

## Compiled Examples

```scss
/// In addition to the code block example this example will show the compiled result. Note the  {compile} modifier on the example. It also uses the compiler annotation to load the module for the compiled example. Content in the compiler annotation are prepended to the compiled code for the item or group if at file-level)
/// @compiler
///   @use "_this-file" as examples;
/// @example scss {compile} This example will be compiled
///   @include examples.print-color(red);

@mixin  print-color($value) {
  .test {
    color: $value;
  }
}
```

## Example Previews

```scss
/// In addition to the html example this will also be previewed in an iframe. Note the {preview} modifier. Settings are available to add stylesheet and javascript to iframe. Iframe used for isolation from docs styles. 
/// @example html {preview} This example will be previewed
///   <span class="test">This is a test</span>

@mixin  some-mixin($value) {}
```

## Options

Coming soon…

For now configuration can be seen in the tests `test/.vuepress/plugin-config.js` in this repo. Full options can be viewed at `lib/defaults.js` in this repo. This will be added to the readme eventually.


