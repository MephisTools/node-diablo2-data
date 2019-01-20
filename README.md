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
const diabloData=require('diablo2-data')('pod_1.13d')

console.log(diabloData.skills[50])
console.log(diabloData.areas[101])
console.log(diabloData.npcsByName['Akara'])
console.log(diabloData.objectsByName['StoneTheta'])
```