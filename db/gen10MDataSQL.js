const faker = require('faker');
const fs = require('fs');

const writeStreamInfo = fs.createWriteStream('db/csv/restaurantsInfo.csv'); 

function write10MInfo() {
  let i = 1e7;   


  write();     
  function write() {
    let storageSpace = true;                                          
    while (i > 0 && storageSpace) {                                   
      if (i % 1000000 === 0) console.log(i);
      
      const id = i;
      const name = faker.lorem.words(3);
      const description = faker.lorem.words(25);
      const hours = faker.random.number();
      const price = faker.commerce.price();
      const style = faker.company.bsAdjective();
      const phone = faker.random.number({min: 1e7, max: 9e7});
      
      storageSpace = writeStreamInfo.write(`${id}, ${name}, ${description}, ${hours}, ${price}, ${style}, ${phone}` + '\n');        
      i--;                                  
    }     

    if (i > 0) {                                                      
      writeStreamInfo.once('drain', write);                               
    }              
  }
}
write10MInfo();


const writeStreamImgs = fs.createWriteStream('db/csv/imgs.csv'); 

function write10MImgs() {
  let i = 1e7;   


  write();      
  function write() {
    let storageSpace = true;                                          

    while (i > 0 && storageSpace) {                                   
      if (i % 1000000 === 0) console.log(i);
      const imgTypeArray = ['banner', 'photoGallery'];
      const id = i;
      const url = faker.image.imageUrl();
      const imgType = imgTypeArray[Math.floor(Math.random() * imgTypeArray.length)];
      const restaurant_id = Math.floor(Math.random() * 1e7);
      
      storageSpace = writeStreamImgs.write(`${id}, ${url}, ${imgType}, ${restaurant_id}` + '\n');         
      i--;                                   
    }     

    if (i > 0) {                                                 
      writeStreamImgs.once('drain', write);                      
    }
  }
}
write10MImgs();
  

