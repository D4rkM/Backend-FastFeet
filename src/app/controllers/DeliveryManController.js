import DeliveryMan from '../models/DeliveryMan';

class DeliveryManController {
    async index(req, res) {
        const { page = 1 } = req.query;

        const deliveryMen = await DeliveryMan.findAll({
            limit: 20,
            offset: (page - 1) * 20,
            order: ['name'],
            attributes: [
                'id',
                'name',
                'email',
                'avatar_id'
            ],
        });

        return res.json(deliveryMen);
    }

    async show(req, res) {
        const { id } = req.params;

        const deliveryMan = await DeliveryMan.findByPk(id);

        if(!deliveryMan) {
            return res.status(404).json({ message: 'Delivery man not found'});
        }

        return res.json(deliveryMan);
    }

    async store(req, res) {
        const deliveryManExists = await DeliveryMan.findOne({
            where: {
                email: req.body.email
            },
        });

        if(deliveryManExists) {
            return res.status(400).json({ message: 'DeliveryMan already exists' });
        }

        const { name, email } = req.body;

        const { id } = await DeliveryMan.create({
            name,
            email,
        });

        if(!deliveryMan) {
            return res.status(500).json({ message: "Could not create DeliveryMan" });
        }

        return res.status(202).json({ id, name, email });
    }

    async update(req, res) {
        const { id } = req.params;
        const { email } = req.body;

        const deliveryMan = await DeliveryMan.findByPk(id);

        if(!deliveryMan) {
            return res.status(404).json({ message: 'Delivery man not found'});
        }

        if(email !== deliveryMan.email) {
            const deliveryManExists = await DeliveryMan.findOne({
                where: {
                    email
                },
            });

            if(deliveryManExists) {
                return res.status(400).json({ error: "Delivery man already exists"});
            }
        }

        const { name, avatar_id } = await deliveryMan.update(req.body);

        return res.json({
            id,
            name,
            email,
            avatar_id
        });
    }

    async delete(req, res) {
        const { id } = req.params;

        const deliveryMan = await DeliveryMan.findByPk(id);

        if(!deliveryMan) {
            return res.status(404).json({ message: 'Delivery man not found' });
        }

        await deliveryMan.destroy();

        return res.json({ message: 'Delivery man deleted succesfully' });
    }
}

export default new DeliveryManController();
