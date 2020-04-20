const connection = require ('../database/connection')


module.exports = {
   
    async create (req, res) {
        const {name, phoneNumber, email, linkedIn, facebook} = req.body
        const user_id = req.headers.authorization

        await connection('network').insert({        
                name,
                phoneNumber,
                email,
                linkedIn,
                facebook,
                user_id, 
            })   
        return res.json(name)
    },

    async index(req, res){
        const user_id = req.headers.authorization
        
        const network = await connection('network').where('user_id', user_id).select('*')

        return res.json(network)
        
    },

    async delete (req, res){
 
        const user_id = req.headers.authorization
        const {id} = req.params
        const [contact] = await connection('network').where('id', id)

        if (!contact) {
            return res.status(401).json({ error: 'User not found'})

        } else if (contact.user_id == user_id) {
            await connection('network').where('id', id).delete()
            return res.status(204).send()
            
        } else {
            return res.status(401).json({ error: 'Operation not permitted'})
            
        }


       
    }

}