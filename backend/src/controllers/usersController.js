const crypto = require('crypto')
const connection = require ('../database/connection')


module.exports = {
    async create (req, res) {
    
    const {name, email, password} = req.body

    const id = crypto.randomBytes(4).toString('HEX')

    await connection('users').insert({
        id,
        name,
        email,
        password
    })   

    return res.json({id})

    },
    async delete (req,res){

        const id = req.headers.authorization
        

        await connection('users').where('id', id).delete()

        return res.status(204).send()

    }

}