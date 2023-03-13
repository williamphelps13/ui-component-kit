const tokenFilter = (cat) => (token) => token.attributes.category === cat;
const categoriesInfo = [
  { category: 'option', folder: 'options' },
  { category: 'btn', folder: 'buttons' }
];
const createFilesArray = categoriesInfo.map((info) => {
  return {
    filter: tokenFilter(info.category),
    destination: `${info.folder}.scss`,
    format: 'css/variables',
    options: { outputReferences: true }
  };
});

module.exports = {
  source: ['src/lib/components/tokens/output.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/lib/components/variables/',
      files: createFilesArray
    }
  }
};
