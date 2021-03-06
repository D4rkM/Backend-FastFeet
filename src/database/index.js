import 'dotenv/config';

import Sequelize from 'sequelize';

import User from '../app/models/User';
import Recipient from '../app/models/Recipients';
import DeliveryMan from '../app/models/DeliveryMan';
import File from '../app/models/File';

import databaseConfig from '../config/database';

const models = [User, Recipient, DeliveryMan, File];

class Database {
    constructor() {
        this.init();
    }

    // Starts DB connection for each model
    init() {
        this.connection = new Sequelize(databaseConfig);

        models
            .map(model => model.init(this.connection))
            .map(
                model =>
                    model.associate && model.associate(this.connection.models)
            );
    }
}

export default new Database();
