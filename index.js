const spawn = require('child_process').spawnSync

const yearday = parseInt(spawn('date', ['+"%j"'])
  .output[1]
  .toString()
  .trim()
  .replace(/"/g, ''))

const year = String(new Date().getYear() + 1900).slice(2)

const letter = String.fromCharCode(65 + Math.floor(yearday/14))

const day = Math.floor(yearday % 14)

console.log(year + letter + day)
