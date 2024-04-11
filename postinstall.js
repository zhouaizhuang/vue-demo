console.log('在paclahe.json中声明"postinstall": "node postinstall.js"后，npm安装的时候会自动执行这个脚本。')
// const fs = require('fs');
// const targetPath = 'node_modules/echarts/lib/coord/geo/parseGeoJson.js' // 需要更改的文件
// const localPath = 'public/parseGeoJson.js' // 本地文件
// // 文件复写
// fs.readFile(localPath, 'utf8', (err, data) => {
//   fs.writeFile(targetPath, data, 'utf8', (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log('File modified successfully!');
//   });
// })
