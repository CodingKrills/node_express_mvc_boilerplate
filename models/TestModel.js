// only for schema boiler plate 

const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({

    image: {
        type: String
    }

});

module.exports = Test = mongoose.model('test', TestSchema);
