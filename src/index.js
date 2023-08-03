module.exports = function reverse (n) {
  const num = n.toString().replace('-', '');
  return num.toString().split('').reverse().join('')
}
