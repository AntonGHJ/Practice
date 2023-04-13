const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const chalk = require('chalk');
const cors = require('cors')
const initDatabase = require('../server/startUp/initDatabase')
const routes = require('./routes')
const bodyParser = require("body-parser")

const app = express()
const PORT = config.get('port') ?? 8080

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.use('/api', routes)

async function start () {
    try {
        mongoose.connection.once('open', () => {
            initDatabase()
        })
        await mongoose.connect(config.get('mongoUri'))
        console.log(chalk.green(`MongoDB connected`))
        app.listen(PORT, ()=> console.log(chalk.green(`Server started on port ${PORT}`)))
    } catch (e) {
        console.log(chalk.red(e.message));
        process.exit(1)
    }
}

start()