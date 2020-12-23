module.exports = function(name) {
  const module = {};
  module.name = name;

  module.sayHi = function sayHi() {
    return `Hi, ${name}`;
  }

  return module;
}
