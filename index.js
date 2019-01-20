const diabloDataToNode = require('./lib/loader')

const fs = require('fs')
const csvjson = require('csvjson')

function txtToJson (path, options) {
  const data = fs.readFileSync(path, 'utf8')
  return csvjson.toObject(data, options)
}

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
    npcs: txtToJson(`${__dirname}/data/${diabloVersion}/monster_names.txt`),
    areas: txtToJson(`${__dirname}/data/${diabloVersion}/areas.txt`),
    skills: loadCsv(`${__dirname}/data/${diabloVersion}/skills.txt`, '\t'),
    objects: loadCsv(`${__dirname}/data/${diabloVersion}/objects.txt`, '\t'),
    itemProperties: loadCsv(`${__dirname}/data/${diabloVersion}/item_properties.txt`, '|', ['Name', 'a', 'b', 'c'])
  }

  return diabloDataToNode(diabloData)
}
