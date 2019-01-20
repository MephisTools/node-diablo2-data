const diabloDataToNode = require('./lib/loader')

const fs = require('fs')
const csvjson = require('csvjson')

function txtToJson (path, options) {
  data = fs.readFileSync(path, 'utf8')
  return csvjson.toObject(data, options)
}

function loadCsv (path, propertiesDelimiter, customHeaders) {
  data = fs.readFileSync(path, 'utf8')
  const lines = data.split('\n')
  let headers
  if (customHeaders === undefined) {
    headers = lines.shift().split('\t')
  } else {
    headers = customHeaders
  }
  return x = lines
    .map(line => line.split(propertiesDelimiter))
    .map(arr => arr.reduce((acc, e, i) => {
      acc[headers[i]] = e
      return acc
    }, {}))
}


module.exports = function (diabloVersion) {
  const diabloData = {
    npcs: txtToJson(`data/${diabloVersion}/monster_names.txt`),
    areas: txtToJson(`data/${diabloVersion}/areas.txt`),
    skills: loadCsv(`data/${diabloVersion}/skills.txt`, '\t'),
    objects: loadCsv(`data/${diabloVersion}/objects.txt`, '\t'),
    itemProperties: loadCsv(`data/${diabloVersion}/item_properties.txt`, '|', ['Name', 'a', 'b', 'c'])
  }

  return diabloDataToNode(diabloData)
}

