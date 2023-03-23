const fs = require('fs');
let data = fs.readFileSync('./tokens.json');
data = JSON.parse(data);

const generateTokenName = (key, prefix = '') => {
  if (key.includes('/')) {
    const [section, file] = key.split('/');
    return `${prefix ? `${prefix}-` : ''}${section}-${file}.scss`;
  } else {
    return `${prefix ? `${prefix}-` : ''}${key}.scss`;
  }
};

const writeTokenToFile = (key, value, prefix = '') => {
  const fileName = generateTokenName(key, prefix);
  const isDark = key.startsWith('dark/');
  const isLight = key.startsWith('light/');
  const theme = isDark ? '.theme-dark ' : isLight ? ':root ' : '';
  const section = isDark || isLight ? `.${isDark ? 'theme-dark' : 'light'}` : '';
  const variableName = key.replace(/\//g, '-');
  const cssVariable = `--${variableName}: ${value};\n`;
  const content = `${theme}{\n  ${cssVariable}}${section} {\n  ${cssVariable}}`;

  fs.appendFileSync(fileName, content);
};

for (const key in data) {
  for (const innerKey in data[key]) {
    const tokenName = generateTokenName(innerKey);
    if (!fs.existsSync(tokenName)) {
      fs.writeFileSync(tokenName, '');
    }
    for (const subKey in data[key][innerKey]) {
      const value = data[key][innerKey][subKey]['value'];
      writeTokenToFile(subKey, value, tokenName.replace('.scss', ''));
    }
  }
}
