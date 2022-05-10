const { joinMarkup } = require("../../utils.js");
const { 
  codeBlock, 
  preview, 
  headline,
  vuepressCodeBlock, 
  vuepressCodeGroup 
} = require("../../template-helpers.js");

module.exports = ({ item, options, headlineLevel }) => {
  const { uid } = item;
  const { example, compiler: compilerPrepends } = item.data;
  if (example) {
    const $examples = example.map(({ 
      type, 
      description, 
      code, 
      modifier 
    }, index) => {
      const hasCompiled = modifier === "compile" && ["scss", "sass"].includes(type);
      const hasPreview = modifier === "preview" && type === "html";
      let compiled, exampleMarkup;
      if (hasCompiled)  {
        compiled = options.compiler(code, options, compilerPrepends || "");
      }
      // If compilation fails or not compiled create normal code block
      // Else create code group with tabs for scss and the resulting CSS
      if (compiled) {
        let $groupBlocks = [ 
          vuepressCodeBlock(code, type, type.toUpperCase()),
          vuepressCodeBlock(compiled, "css", "Result")
        ];
        exampleMarkup = vuepressCodeGroup(joinMarkup($groupBlocks));
      } else {
        exampleMarkup = codeBlock(code, type);
      }
      return `
${ description ? description : "" }      

${ exampleMarkup }

${ hasPreview ? previewBlock(uid, index) : "" }

      `;
    });
    return joinMarkup(headline("Examples", headlineLevel), $examples);
  }
  
} 

function previewBlock(uid, index) {
  return `
${ headline("Preview", headlineLevel) }

${ preview(uid, index) }

  `;
}
