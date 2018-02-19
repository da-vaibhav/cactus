const _ = require('lodash');
const faker = require('faker');

const statuses = [
  'Pending Approval',
  'Draft',
  'Purchased',
  'Parttially Received',
  'Received',
  'Rejected',
  'Closed'
];

function Generate_Data () {
  const object = {  };

  const arr = _.times(100, (n) =>
    ({ id: faker.random.uuid(),
       name: faker.name.firstName(),
       vendor: faker.company.companyName(),
       orderNumber: faker.random.alphaNumeric(5),
       date: faker.date.past(),
       status: _.sample(statuses)
    })
  );

  object["po"] = arr;

  return object;
};

module.exports = Generate_Data;
