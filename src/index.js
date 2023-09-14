const express = require('express')
const handlebars = require('express-handlebars')
const methodOverride = require('method-override')


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
// method-Override
app.use(methodOverride('_method'))

app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    helpers: {
        xif (v1, v2, options){
            if(v1==v2){
                return options.fn(this)
            }
        },
        pay(num, val) {
            return num * val
        },
        sum(a, b) {
            return a + b
        },
        // formatCurrecy(value){
        //     return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        // }

    }
}) )
app.set('view engine', 'hbs')
app.set('views', './src/resourses/views')


route(app)

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
