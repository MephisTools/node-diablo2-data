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

    itemPropertiesByName: indexer.buildIndexFromArray(diabloData.itemProperties, 'statName'),

    itemDataByName: indexer.buildIndexFromArray(diabloData.itemData, 'name'),

    itemTypesByName: indexer.buildIndexFromArray(diabloData.itemTypes, 'name'),

    uniqueItemsByName: indexer.buildIndexFromArray(diabloData.uniqueItems, 'name'),

    weaponsByName: indexer.buildIndexFromArray(diabloData.weapons, 'name'),

    superUniquesByName: indexer.buildIndexFromArray(diabloData.superUniques, 'name'),

    setItemsByName: indexer.buildIndexFromArray(diabloData.setItems, 'name'),

    runesByName: indexer.buildIndexFromArray(diabloData.runes, 'Rune Name'),

    miscByName: indexer.buildIndexFromArray(diabloData.misc, 'name'),

    monStatsByName: indexer.buildIndexFromArray(diabloData.monStats, 'Class'),

    missilesById: indexer.buildIndexFromArray(diabloData.missiles, 'Id'),
    missilesByName: indexer.buildIndexFromArray(diabloData.missiles, 'Missile'),

    armorByName: indexer.buildIndexFromArray(diabloData.armor, 'name'),

    gemsByName: indexer.buildIndexFromArray(diabloData.gems, 'name'),

    beltsByName: indexer.buildIndexFromArray(diabloData.belts, 'name')
  }
}
