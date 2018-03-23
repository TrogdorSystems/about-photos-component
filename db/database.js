const mongoose = require('mongoose');
const faker = require('faker');
const sampleData = require('../data/sampleData.js');

mongoose.connect("mongodb://localhost/restaurant");
  // || `mongodb://${process.env.DB_USER}:${process.env.DB_PW}@ds259778.mlab.com:59778/abouts`);
const aboutSchema = mongoose.Schema({
  id: Number,
  name: String,
  about: {
    description: String,
    hours: String,
    price: String,
    style: String,
    phone: String,
  },
  banner: [],
  photo: [],
}).index({name: 1});

const About = mongoose.model('About', aboutSchema);

const findByRestaurantId = (id, cb) => {
  About.find({ name: `Restaurant_${id}`}, (err, results) => {
    if (err) {
      cb(err,null);
    } else {
      cb(null, results);
    }
  }).limit(1);
};

const find = (obj, cb) => {
  About.find(obj, (err, about) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, about);
    }
  }).limit(1);
};

const findOne = (obj, cb) => {
  About.findOne({}, (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  })
}

module.exports.findByRestaurantId = findByRestaurantId;
module.exports.find = find;
module.exports.findOne = findOne;
