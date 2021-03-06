import Sequelize, { Model } from 'sequelize';

class DeliveryMan extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            avatar_id: Sequelize.STRING,
            email: Sequelize.STRING,
        },{
            sequelize,
            freezeTableName: true,
            modelName: 'delivery_men',
        });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
    }

}

export default DeliveryMan;
