const _ = require('lodash');
const faker = require('faker');

function Generate_Data () {
  const object = { po: [] };
  _.times(100, (n) => {
    object["po"].push({
      id: faker.random.uuid()
    });
  });

  return object;
};

module.exports = Generate_Data;