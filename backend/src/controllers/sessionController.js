const connection = require ('../database/connection')

module.exports = {

    async create (req, res) {
        const {email, password } = req.body

        const [ user_db ]= await connection('users').where('email', email)
        
        if (!user_db ) {
            return res.status(404).json({ error: "incorrect email or password"})

        } else if (user_db.password == password ) {
            return res.status(200).json(user_db)
            
        } else {
            return res.status(404).json({ error: "incorrect email or password"})
        }
    
    }
}
