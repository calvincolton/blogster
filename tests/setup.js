require('../models/User');
const mongoose = require('mongoose');
const keys = require('../config/keys');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useMongoClient: true });





// // sample test via jest
// test('Adds two numbers', () => {
//   const sum = 1 + 2;
//   // expect == assert
//   expect(sum).toEqual(3);
// });
