const indexer = require('./indexer.js')

module.exports = function (diabloData) {
  return {
    npcsById: indexer.buildIndexFromArray(diabloData.npcs, 'id'),
    npcsByName: indexer.buildIndexFromArray(diabloData.npcs, 'name'),

    areasById: indexer.buildIndexFromArray(diabloData.areas, 'id'),
    areasByName: indexer.buildIndexFromArray(diabloData.areas, 'name'),

    skillsById: indexer.buildIndexFromArray(diabloData.skills, 'id'),
    skillsByName: indexer.buildIndexFromArray(diabloData.skills, 'name'),

    objectsById: indexer.buildIndexFromArray(diabloData.objects, 'id'),
    objectsByName: indexer.buildIndexFromArray(diabloData.objects, 'name'),

    itemPropertiesById: indexer.buildIndexFromArray(diabloData.itemProperties, 'id'),
    itemPropertiesByName: indexer.buildIndexFromArray(diabloData.itemProperties, 'name'),
  }
}