const mongoose = require('mongoose')
const User = require('./User')


// mongoose.connect('mongodb://localhost/testdb', () => {
//     console.log('connected')
// },
//     e => console.log(e))

// console.log(User)
mongoose
    .connect('mongodb://localhost/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));


run()
async function run() {

    try {

        const user = await User.create({
            name: 'Kyle',
            age: 28,
            email: 'Test@angel.com',
            hobbies: ['programar', 'ejercicios'],
            address: {
                street: 'Calle 1',
                city: 'Narnia'
            }
        })
        user.name = 'Angel'
        await user.save()

        // const user = new User({ name: 'Kyle', age: 27 })
        // await user.save()
        console.log(user)
    } catch (e) {
        console.log(e.message)
    }


}
// console.log(user)
// user.save().then(() => console.log('User saved'))