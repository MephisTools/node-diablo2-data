# node-diablo2-data
expose diablo 2 data in NodeJS

## Features

For example it's often useful to : 

* find areas by id
* find items by name
* find monster by name

## Example

```js
const diabloData=require('node-diablo2-data')('pod_1.13d')

console.log(diabloData.skills[50])
console.log(diabloData.areas[101])
console.log(diabloData.npcsByName['Akara'])
console.log(diabloData.objectsByName['StoneTheta'])
```