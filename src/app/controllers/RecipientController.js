import Recipient from '../models/Recipients';

class RecipientController {
    async store(req, res) {
        const recip = req.body;

        const recipient = await Recipient.create(recip);

        if(!recipient)
            return res.status(500).json({ message: 'Internal error occoured while creating recipient' });

        return res.json({ recipient });
    }
}

export default new RecipientController();
