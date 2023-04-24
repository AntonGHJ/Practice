const propertiesMock = require("../mock/properties.json");
const Property = require("../models/Property");

module.exports = async () => {
  const properties = await Property.find();
  if (properties.length !== propertiesMock.length) {
    await createInitialEntity(Property, propertiesMock);
  }
};

async function createInitialEntity(Model, data) {
  await Model.collection.drop();
  return Promise.all(
    data.map(async (item) => {
      try {
        delete item._id;
        const newItem = new Model(item);
        await newItem.save();
        return newItem;
      } catch (error) {
        return error;
      }
    })
  );
}
