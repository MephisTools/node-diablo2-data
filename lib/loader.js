module.exports = diabloDataToNode

function diabloDataToNode (diabloData) {
  const indexes = require('./indexes.js')(diabloData)
  return {

    npcs: indexes.npcsById,
    npcsByName: indexes.npcsByName,
    npcsArray: diabloData.npcs,

    areas: indexes.areasById,
    areasByName: indexes.areasByName,
    areasArray: diabloData.areas,

    skills: indexes.skillsById,
    skillsByName: indexes.skillsByName,
    skillsArray: diabloData.npcs,

    objects: indexes.objectsById,
    objectsByName: indexes.objectsByName,
    objectsArray: diabloData.objects,

    itemProperties: indexes.itemPropertiesById,
    itemPropertiesByName: indexes.itemPropertiesByName,
    itemPropertiesArray: diabloData.itemProperties,

    /*
    version: diabloData.version,

    language: diabloData.language,
    */
  }
}