const express = require('express')
const usersController = require('./controllers/usersController')
const networkController = require('./controllers/networkController')
const sessionController = require('./controllers/sessionController')
const routes = express.Router()



routes.post('/create', usersController.create)
routes.delete('/create', usersController.delete)

routes.post('/session', sessionController.create)

routes.post('/network', networkController.create)
routes.get('/network', networkController.index)
routes.delete('/network/:id', networkController.delete)

module.exports = routes