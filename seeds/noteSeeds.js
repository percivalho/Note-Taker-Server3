const sequelize = require('../config/connection');

const Note = require('../models/note');

const noteSeedData = require('./noteSeedData.json');

// TODO Use async / await to Refactor the seedDatabase function below
const seedDatabase = () => {
  return sequelize.sync({ 
    force: true 
  })
  .then(() => {
    Note.bulkCreate(noteSeedData)
    .then(() => {
    //  Library.bulkCreate(librarySeedData)
    //  .then(() => {
      console.log('All Seeds Planted'); 
    //  });
    });
  });

  process.exit(0);
};

seedDatabase();
