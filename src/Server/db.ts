import mongoose from 'mongoose';
import getConfig from 'config';

const { database } = getConfig();

const initializeDB = async () => {
  try {
    await mongoose.connect(database.uri, database.options);
    console.log('MongoDB connect successfully');
    return mongoose;
  } catch (error) {
    console.log('***** Mongoose failed connection *****');
    console.error(error);
    return null;
  }
};

export default initializeDB;
