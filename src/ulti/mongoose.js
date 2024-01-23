module.exports = {
    multipleMongoToObject: function (mongoArray) {
        return mongoArray.map(mongoObject => mongoObject.toObject());
    },
    MongoToObject: function (mongooseObject) {
        return mongooseObject ? mongooseObject.toObject() : mongooseObject;
    }
};