const fs = require('fs-extra');

const source = `${process.cwd()}/fix/lib/`;
const destination = `${process.cwd()}/node_modules/react-native-paper/lib/`;

fs.copySync(source, destination);

console.log('react-native-paper Modal was patched!');
