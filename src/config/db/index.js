const mongoose = require('mongoose');

async function connect() {
    try {

        await mongoose.connect('mongodb://localhost:27017/d_blog_dev_nodejs', {
            useNewUrlParser: true, // Remove this line, as it's deprecated
            useUnifiedTopology: true // Remove this line, as it's deprecated
        });
        console.log('connect successfully');

    } catch (error) {
        console.log('connect failed');

    }

}

module.exports = { connect };
