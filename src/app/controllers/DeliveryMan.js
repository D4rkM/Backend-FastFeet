import DeliveryMan from '../models/DeliveryMan';

class DeliveryManController {
    async store(req, res) {
        const personExists = await DeliveryMan.findOne({
            where: {
                email: req.body.email
            },
        });

        const deliveryMan = req.body;

        const response = await DeliveryMan.create({

        })
    }
}

export default new DeliveryManController();
