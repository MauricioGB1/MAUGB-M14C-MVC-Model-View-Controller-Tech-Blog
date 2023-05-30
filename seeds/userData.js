const { User } = require('../models');

const userdata =
[
  {
    "username": "Mauricio",
    "password": "password"
  },
  {
    "username": "Robert",
    "password": "password"
  },
  {
    "username": "Brenda",
    "password": "password"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;
