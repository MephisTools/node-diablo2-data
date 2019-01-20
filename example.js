const diabloData = require('.')('pod_1.13d')

console.log(JSON.stringify(diabloData.skills[50]))
console.log(JSON.stringify(diabloData.areas[101]))
console.log(JSON.stringify(diabloData.npcsByName['Akara']))
console.log(JSON.stringify(diabloData.objectsByName['StoneTheta']))
console.log(JSON.stringify(diabloData.itemPropertiesByName['Maximum Damage']))
