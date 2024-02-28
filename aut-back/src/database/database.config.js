import { Sequelize } from 'sequelize';


export const sequelize = new Sequelize('test', 'root', 'password', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    logging: false,
});

export async function connect() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
    } catch (error) {
        console.error('Error connecting to the database', error);
    }
}