
# node-diablo2-data

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![NPM version][npm-shield]][npm-url]
[![Build Status][build-shield]][build-url]
[![Discord][discord-shield]][discord-url]

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->
## About The Project

The goal of this project is to provide an easy-to-use lib to get Diablo 2 related data

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

* nodejs, npm

### Installation

```bash
npm i diablo2-data
```

<!-- USAGE EXAMPLES -->
## Usage

```js
const diabloData = require('diablo2-data')('pod_1.13d')

console.log(JSON.stringify(diabloData.skills[50]))
console.log(JSON.stringify(diabloData.areas[101]))
console.log(JSON.stringify(diabloData.npcsByName['Akara']))
console.log(JSON.stringify(diabloData.objectsByName['StoneTheta']))
console.log(JSON.stringify(diabloData.itemEnums.Action))
console.log(JSON.stringify(diabloData.itemPropertiesByName['Maximum Damage']))
console.log(JSON.stringify(diabloData.itemDataByName['Ring Mail']))
console.log(JSON.stringify(diabloData.itemTypesByName['Amulet']))
console.log(JSON.stringify(diabloData.uniqueItemsByName['Shako']))
console.log(JSON.stringify(diabloData.responses[41]))
```

Or run the example

```bash
sudo node examples/basic.js
```

## Roadmap

See the [open issues](https://github.com/Mephistools/node-diablo2-data/issues) for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Mephistools/node-diablo2-data.svg?style=flat-square
[contributors-url]: https://github.com/Mephistools/node-diablo2-data/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Mephistools/node-diablo2-data.svg?style=flat-square
[forks-url]: https://github.com/Mephistools/node-diablo2-data/network/members
[stars-shield]: https://img.shields.io/github/stars/Mephistools/node-diablo2-data.svg?style=flat-square
[stars-url]: https://github.com/Mephistools/node-diablo2-data/stargazers
[issues-shield]: https://img.shields.io/github/issues/Mephistools/node-diablo2-data.svg?style=flat-square
[issues-url]: https://github.com/Mephistools/node-diablo2-data/issues
[license-shield]: https://img.shields.io/github/license/Mephistools/node-diablo2-data.svg?style=flat-square
[license-url]: https://github.com/Mephistools/node-diablo2-data/blob/master/LICENSE.txt
[npm-shield]: https://img.shields.io/npm/v/diablo2-data.svg
[npm-url]: http://npmjs.com/package/diablo2-data
[build-shield]: https://github.com/Mephistools/node-diablo2-data/workflows/CI/badge.svg
[build-url]: https://github.com/Mephistools/node-diablo2-data/actions?query=workflow%3A%22CI%22
[discord-shield]: https://img.shields.io/badge/chat-on%20discord-brightgreen.svg
[discord-url]: https://discord.gg/9RqtApv
