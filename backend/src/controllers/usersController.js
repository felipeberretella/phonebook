const crypto = require('crypto')
const connection = require ('../database/connection')


module.exports = {
    async create (req, res) {
    
        try {
            const {name, email, password} = req.body

            const [user] = await connection('users').where('email', email)

            if (!user) {

                const hash =  crypto.createHmac("sha256", "password").update(password).digest("hex")

                const id = crypto.randomBytes(4).toString('HEX')
                
            
                await connection('users').insert({
                    id,
                    name,
                    email,
                    password:hash                
                })   

                return res.status(200).send('user created!')
            } else {

                return res.status(400).send({error:'User already exists'})

            }

        } catch (err) {

            return res.status(400).send({error:'Registration failed'})
        }
        
    },
    async delete (req,res){

        const id = req.headers.authorization
        

        await connection('users').where('id', id).delete()

        return res.status(204).send()

    }

}