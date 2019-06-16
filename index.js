const diabloDataToNode = require('./lib/loader')
const itemEnums = require('./lib/item')
const fs = require('fs')

function loadCsv (path, propertiesDelimiter, customHeaders) {
  const data = fs.readFileSync(path, 'utf8')
  const lines = data.split('\n')
  let headers
  if (customHeaders === undefined) {
    headers = lines.shift().split('\t')
  } else {
    headers = customHeaders
  }
  return lines
    .map(line => line.split(propertiesDelimiter))
    .map(arr => arr.reduce((acc, e, i) => {
      acc[headers[i]] = e
      return acc
    }, {}))
}

module.exports = function (diabloVersion) {
  const diabloData = {
    npcs: loadCsv(`${__dirname}/data/${diabloVersion}/monster_names.txt`, '\t', ['name']),
    areas: loadCsv(`${__dirname}/data/${diabloVersion}/areas.txt`, ',', ['name', 'id']),
    skills: loadCsv(`${__dirname}/data/${diabloVersion}/skills.txt`, '\t'),
    objects: loadCsv(`${__dirname}/data/${diabloVersion}/objects.txt`, '\t'),
    itemEnums: itemEnums,
    itemProperties: loadCsv(`${__dirname}/data/${diabloVersion}/item_properties.txt`, '|', ['statName', 'saveBits', 'saveParamBits', 'saveAdd']),
    itemData: loadCsv(`${__dirname}/data/${diabloVersion}/item_data.txt`, '|', ['name', 'code', 'classificationString', 'width', 'height', 'stackable', 'usable', 'throwable']),
    itemTypes: loadCsv(`${__dirname}/data/${diabloVersion}/itemtypes.txt`, '\t'),
    qualityItems: loadCsv(`${__dirname}/data/${diabloVersion}/qualityitems.txt`, '\t'),
    uniqueItems: loadCsv(`${__dirname}/data/${diabloVersion}/uniqueitems.txt`, '\t'),
    weapons: loadCsv(`${__dirname}/data/${diabloVersion}/weapons.txt`, '\t'),
    superUniques: loadCsv(`${__dirname}/data/${diabloVersion}/superuniques.txt`, '\t'),
    setItems: loadCsv(`${__dirname}/data/${diabloVersion}/setitems.txt`, '\t'),
    runes: loadCsv(`${__dirname}/data/${diabloVersion}/setitems.txt`, '\t'),
    misc: loadCsv(`${__dirname}/data/${diabloVersion}/misc.txt`, '\t'),
    monStats: loadCsv(`${__dirname}/data/${diabloVersion}/monstats.txt`, '\t'),
    missiles: loadCsv(`${__dirname}/data/${diabloVersion}/missiles.txt`, '\t'),
    armor: loadCsv(`${__dirname}/data/${diabloVersion}/armor.txt`, '\t'),
    gems: loadCsv(`${__dirname}/data/${diabloVersion}/gems.txt`, '\t'),
    belts: loadCsv(`${__dirname}/data/${diabloVersion}/belts.txt`, '\t')
  }

  return diabloDataToNode(diabloData)
}
