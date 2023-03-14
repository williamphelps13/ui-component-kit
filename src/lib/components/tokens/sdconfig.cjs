const StyleDictionary = require('style-dictionary');
const { fileHeader } = StyleDictionary.formatHelpers;

const tokenFilter = (cat) => (token) => token.attributes.category.includes(cat);
const categories = ['options', 'buttons'];
const createFilesArray = categories.map((cat) => {
  return {
    filter: tokenFilter(cat),
    destination: `${cat}.scss`,
    options: { outputReferences: true },
    format: 'cssThemed'
  };
});

module.exports = {
  source: ['src/lib/components/tokens/tokens.json'],
  format: {
    cssThemed: ({ dictionary, file }) => {
      let output = fileHeader(file);

      const light = [];
      const dark = [];

      dictionary.allTokens.forEach((token) => {
        const { path, original } = token;
        const [first, ...restPath] = path;
        const name = restPath.join('-');

        if (first === 'options') {
          light.push(`--${name}: ${original.value};`);
        } else if (first.includes('light')) {
          light.push(
            `--${name}: var(--${original.value.substring(
              original.value.indexOf('.') + 1,
              original.value.length - 1
            )});`
          );
        } else if (first.includes('dark')) {
          dark.push(
            `--${name}: var(--${original.value.substring(
              original.value.indexOf('.') + 1,
              original.value.length - 1
            )});`
          );
        }
      });

      const lightText = `:root {\n  ${light.join('\n  ')}\n}\n`;
      const darkText = `.theme-dark {\n  ${dark.join('\n  ')} \n}`;
      output += `${lightText}${dark.length ? darkText : ''}`;

      return output;
    }
  },
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/lib/components/variables/',
      files: createFilesArray
    }
  }
};
