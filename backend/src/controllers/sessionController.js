const connection = require ('../database/connection')

module.exports = {

    async create (req, res) {
        const {email, password } = req.body

        const [ user_db ]= await connection('users').where('email', email)
        
        if (!user_db ) {
            return res.status(400).json({ error: "incorrect email or password"})

        } else if (user_db.password == password ) {
            return res.json(user_db.id) 
            
        } else {
            return res.status(400).json({ error: "incorrect email or password"})
        }
    
    }
}
