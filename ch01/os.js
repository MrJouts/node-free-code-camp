const os = require("os");

console.log(os.type());
console.log(os.homedir());
console.log(os.uptime() / 60 / 60);
console.log(os.userInfo());
