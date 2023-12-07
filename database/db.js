import mongoose from 'mongoose';

const mongoConnection = {
    isConnected: 0,
};

export const connect = async () => {
    try {
        if (mongoConnection.isConnected) {
            console.log('Ya estábamos conectados');
            return;
        }

        if (mongoose.connections.length > 0) {
            mongoConnection.isConnected = mongoose.connections[0].readyState;

            if (mongoConnection.isConnected === 1) {
                console.log('Usando conexión anterior');
                return;
            }

            await mongoose.disconnect();
        }

        await mongoose.connect('mongodb://localhost:27017/entriesdb' || '', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        mongoConnection.isConnected = 1;
        console.log('Conectado a MongoDB:', 'mongodb://localhost:27017/entriesdb');
    } catch (error) {
        console.error('Error durante la conexión:', error);
    }
};

export const disconnect = async () => {
    try {
        if (process.env.NODE_ENV === 'development') return;

        if (mongoConnection.isConnected === 0) return;

        await mongoose.disconnect();
        // mongoConnection.isConnected = 0;
        console.log('Desconectado de MongoDB');
    } catch (error) {
        console.error('Error durante la desconexión:', error);
    }
};
