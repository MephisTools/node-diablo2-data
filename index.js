const diabloDataToNode = require('./lib/loader')

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
    itemProperties: loadCsv(`${__dirname}/data/${diabloVersion}/item_properties.txt`, '|', ['Name', 'a', 'b', 'c'])
  }

  return diabloDataToNode(diabloData)
}
