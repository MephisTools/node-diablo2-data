module.exports = {
  buildIndexFromArray:
        function (array, fieldToIndex) {
          if (array === undefined) { return undefined }
          return array.reduce((acc, object) => {
            acc[parseInt(object[fieldToIndex])] = object
            return acc
          }, {})
        }
}
