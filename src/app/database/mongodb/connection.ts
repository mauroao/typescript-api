import { connect as mongoConnect, ConnectionOptions, connection } from 'mongoose';

export const connect = async (): Promise<void> => {
  const options: ConnectionOptions = {
    connectTimeoutMS: 30000,
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

  const uri: string = process.env.MONGO_DB_CONNECTION || 'mongodb://localhost:27017/testtitle';

  await mongoConnect(uri, options);
};

export const disconnect = async (): Promise<void> => {
  await connection.close();
};
