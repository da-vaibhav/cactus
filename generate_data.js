const _ = require('lodash');
const faker = require('faker');

faker.locale = "en_IND";

const statuses = [
  'Pending Approval',
  'Draft',
  'Purchased',
  'Partially Received',
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
       status: _.sample(statuses),
       expectedDeliveryDate: faker.date.future(2019),
       amount: faker.finance.amount(1000, 3000)
    })
  );

  object["po"] = arr;

  return object;
};

module.exports = Generate_Data;
