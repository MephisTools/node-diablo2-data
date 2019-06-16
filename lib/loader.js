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

    itemEnums: diabloData.itemEnums,

    itemProperties: diabloData.itemProperties,
    itemPropertiesByName: indexes.itemPropertiesByName,

    itemData: diabloData.itemData,
    itemDataByName: indexes.itemDataByName,

    itemTypes: diabloData.itemTypes,
    itemTypesByName: indexes.itemTypesByName,

    qualityItems: diabloData.qualityItems,

    uniqueItems: diabloData.uniqueItems,
    uniqueItemsByName: indexes.uniqueItemsByName,

    weapons: diabloData.weapons,
    weaponsByName: indexes.weaponsByName,

    setItems: diabloData.setItems,
    setItemsByName: indexes.setItemsByName,

    runes: diabloData.runes,
    runesByName: indexes.runesByName,

    misc: diabloData.misc,
    miscByName: indexes.miscByName,

    monStats: diabloData.monStats,
    monStatsByName: indexes.monStatsByName,

    missiles: indexes.missilesById,
    missilesArray: diabloData.missiles,
    missilesByName: indexes.missilesByName,

    armor: diabloData.armor,
    armorByName: indexes.armorByName,

    gems: diabloData.gems,
    gemsByName: indexes.gemsByName,

    belts: diabloData.belts,
    beltsByName: indexes.beltsByName
  }
}
