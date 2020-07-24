const fs = require('fs');
const stylesPath = 'lib/styles';

!fs.existsSync(stylesPath) && fs.mkdirSync(stylesPath, { recursive: true });

fs.readdirSync('src').forEach((item) => {
  if (item.endsWith('.less')) {
    fs.copyFileSync(`src/${item}`, `lib/styles/${item}`);
  }
});
