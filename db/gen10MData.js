const faker = require('faker');
const fs = require('fs');
const exec = require('child_process').exec;   // enables multiple processes and distributes applications to many nodes to best scale Node 

function generateData(i) {
  return {
    id: i,
    name: faker.company.companyName(),
    about: {
      description: faker.lorem.paragraph(),
      hours: faker.random.number(),
      price: faker.commerce.price(),
      style: faker.random.word(),
      phone: faker.phone.phoneNumber(),
    },
    banner: [faker.image.imageUrl(), faker.image.imageUrl(), faker.image.imageUrl(), faker.image.imageUrl()],
    photo: [faker.image.imageUrl(), faker.image.imageUrl(), faker.image.imageUrl()],
  };
}

const writeStream = fs.createWriteStream('abouts.csv'); // file system writes to path

function write10Mtimes() {
  let i = 1e7;   // let i = 10 mil

  write();       // invoke write
  function write() {
    let storageSpace = true;                                          // boolean marker to show there's memory space

    while (i > 0 && storageSpace) {                                   // while still decrementing and still have storage
      if (i % 100000 === 0) {
        console.log(i);
      }
      i--;
      const data = generateData(i);                                   // generate faker data while in loop
      storageSpace = writeStream.write(JSON.stringify(data));         // check if there's still space when writing data
    }     


    if (i > 0) {                                                      // [ Exited while loop ] if storageSpace = false && i > 0 
      writeStream.once('drain', write);                               // use once method and 'drain' then recurse write fn again
    }

    if (i === 0) {    // when all data is generated
      const command = 'mongoimport --db restaurant --collection abouts --file abouts.csv --numInsertionWorkers 25';
      exec(command);  // use child_process exec method to execute mongoimport to seed data into db
    }                 
  }
}
write10Mtimes();
  
