const indexer = require('./indexer.js')

module.exports = function (diabloData) {
  return {
    npcsByName: indexer.buildIndexFromArray(diabloData.npcs, 'name'),

    areasById: indexer.buildIndexFromArray(diabloData.areas, 'id'),
    areasByName: indexer.buildIndexFromArray(diabloData.areas, 'name'),

    skillsById: indexer.buildIndexFromArray(diabloData.skills, 'Id'),
    skillsByName: indexer.buildIndexFromArray(diabloData.skills, 'skill'),

    objectsById: indexer.buildIndexFromArray(diabloData.objects, 'Id'),
    objectsByName: indexer.buildIndexFromArray(diabloData.objects, 'Name'),

    itemPropertiesByName: indexer.buildIndexFromArray(diabloData.itemProperties, 'Name')
  }
}
