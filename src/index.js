const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const path =  require('path')
const port = 3000

const route = require('./resourses/routes/index')
const db = require('./resourses/config/index')

app.use(express.static(path.join(__dirname, 'public')))

// connect MongoDB
db.connect()

// Read file json
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}) )
app.set('view engine', 'hbs')
app.set('views', './src/resourses/views')


route(app)

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
