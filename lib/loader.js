module.exports = diabloDataToNode

function diabloDataToNode (diabloData) {
  const indexes = require('./indexes.js')(diabloData)
  return {
    npcs: diabloData.npcs,
    npcsByName: indexes.npcsByName,

    areas: indexes.areasById,
    areasArray: diabloData.areas,
    areasByName: indexes.areasByName,

    skills: indexes.skillsById,
    skillsByName: indexes.skillsByName,
    skillsArray: diabloData.npcs,

    objects: indexes.objectsById,
    objectsByName: indexes.objectsByName,
    objectsArray: diabloData.objects,

    itemProperties: diabloData.itemProperties,
    itemPropertiesByName: indexes.itemPropertiesByName
  }
}
