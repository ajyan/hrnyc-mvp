const faker = require('faker');

module.exports = {
  getPhotos: () => {
    console.log('got here')
    let randomPhoto = faker.image.imageUrl;
    console.log('photo in server', randomPhoto);
    res.send(randomPhoto);
  },
};
