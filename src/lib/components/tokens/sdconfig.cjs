const StyleDictionary = require('style-dictionary');
const { fileHeader } = StyleDictionary.formatHelpers;

const categories = ['options', 'semantics', 'buttons', 'containers'];
const tokenFilter = (cat) => (token) => token.description?.includes(cat);

const createFilesArray = categories.map((cat) => {
  return {
    filter: tokenFilter(cat),
    destination: `${cat}.scss`,
    options: { outputReferences: true },
    format: 'cssThemed'
  };
});

module.exports = {
  source: ['src/lib/components/tokens/output.json'],
  format: {
    cssThemed: ({ dictionary, file }) => {
      let output = fileHeader(file);

      const light = [];
      const dark = [];

      dictionary.allTokens.forEach((token) => {
        const { path, original, description } = token;
        const cleanedValue = original.value.replace(/[{}]/g, '').replace(/[\.]/g, '-');

        if (description.includes('options')) {
          light.push(`--${path.join('-')}: ${cleanedValue};`);
        } else if (description.includes('light')) {
          light.push(`--${path.join('-')}: var(--${cleanedValue});`);
        } else if (description.includes('dark')) {
          dark.push(`--${path.join('-')}: var(--${cleanedValue});`);
        }
      });

      const lightText = `:root {\n  ${light.join('\n  ')}\n}\n`;
      const darkText = `\n.theme-dark {\n  ${dark.join('\n  ')} \n}`;

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
