const mongoose = require('mongoose');
const { MONGO_URI } = process.env;
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    checkServerIdentity: false,
},(err)=>{
    if (err) {
        console.log(err)
        return;
    }
    console.log('mongodb connect successfully');
});
module.exports = mongoose