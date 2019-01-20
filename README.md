# node-diablo2-data
[![NPM version](https://img.shields.io/npm/v/diablo2-data.svg)](http://npmjs.com/package/diablo2-data)
[![Build Status](https://img.shields.io/circleci/project/MephisTools/node-diablo2-data/master.svg)](https://circleci.com/gh/MephisTools/node-diablo2-data)

expose diablo 2 data in NodeJS

## Features

For example it's often useful to : 

* find areas by id
* find items by name
* find monster by name

## Example

```js
const diabloData = require('diablo2-data')('pod_1.13d')

console.log(JSON.stringify(diabloData.skills[50]))
console.log(JSON.stringify(diabloData.areas[101]))
console.log(JSON.stringify(diabloData.npcsByName['Akara']))
console.log(JSON.stringify(diabloData.objectsByName['StoneTheta']))
console.log(JSON.stringify(diabloData.itemPropertiesByName['Maximum Damage']))
```