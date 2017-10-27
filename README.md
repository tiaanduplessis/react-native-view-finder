
<h1 align="center">react-native-view-finder</h1>
<div align="center">
  <strong>A flexible little View Finder component to be used in conjunction with react-native-camera</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/react-native-view-finder">
    <img src="https://img.shields.io/npm/v/react-native-view-finder.svg?style=flat-square" alt="npm package version" />
  </a>
  <a href="https://npmjs.org/package/react-native-view-finder">
  <img src="https://img.shields.io/npm/dm/react-native-view-finder.svg?style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="standard JS linter" />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square" alt="prettier code formatting" />
     <a href="hhttps://greenkeeper.io/">
    <img src="https://badges.greenkeeper.io/tiaanduplessis/react-native-view-finder.svg" alt="Greenkeeper" />
  </a>
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/react-native-view-finder">
    <img src="https://img.shields.io/travis/tiaanduplessis/react-native-view-finder.svg?style=flat-square" alt="travis ci build status" />
  </a>
  <a href="https://github.com/tiaanduplessis/react-native-view-finder/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/react-native-view-finder.svg?style=flat-square" alt="project license" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="make a pull request" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/react-native-view-finder/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/react-native-view-finder.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/react-native-view-finder/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/react-native-view-finder.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20react-native-view-finder!%20https://github.com/tiaanduplessis/react-native-view-finder%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/react-native-view-finder.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="https://github.com/tiaanduplessis">tiaanduplessis</a> and <a href="https://github.com/tiaanduplessis/react-native-view-finder/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Install

```sh
$ npm install react-native-view-finder
# OR
$ yarn add react-native-view-finder
```

## Usage

```jsx
import {View, StyleSheet} from 'react-native'
import ViewFinder from 'react-native-view-finder'

const Example = () => (
  <View style={styles.container}>
    <ViewFinder backgroundColor="#333" loading />
  </View>
)

const styles = StyleSheet.create({
  container: { flex: 1 }
})
```

This will result in:

<div align="center">
  <img src="example.png" alt="">
</div>

## Props

Prop | Description | Type | Defualt
------ | ------ | ------ | ------
**`containerStyle`** | Array Container Styles | Array |  **`{}`**
**`backgroundColor`** | String for Background color of View Finder. | String | **`transparent`**
**`color`** | String for Color of the View finder edges | String | **`#FFF`**
**`height`** | Number for Height of View Finder | Number | **`200`**
**`width`** | Number for Width of View Finder | Number | **`200`**
**`borderWidth`** | Number for Border with of View Finder edges | Number | **`3`**
**`borderRadius`** | Number for Border Radius of View Finder edges | Number | **`0`**
**`borderLength `** | Number for Border length of View Finder edges | Number | **`25`**
**`loading`** | Bool for the indicate if loading indicator should be shown | Bool | **`false`**
**`loadingColor`** | String for Color of the loading indicator | String | **`#FFF`**
**`loadingBelowVF`** | Bool for the indicate if loading indicator should be shown under View Finder | Bool | **`false`**


## Contributing

Contributions are welcome!

1. Fork it.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Or open up [a issue](https://github.com/tiaanduplessis/react-native-view-finder/issues).

## License

Licensed under the MIT License.
