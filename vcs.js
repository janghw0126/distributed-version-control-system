const init = require('./commands/init.js');

// 사용자가 입력한 순수 명령어 받음 -> init
const args = process.argv.slice(2);

// 사용자가 입력한 명령이 init인지 체크
if (args[0] === 'init') {
  init();
} else {
  console.log('Unknown command');
}
