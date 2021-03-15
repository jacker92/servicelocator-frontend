import _ from 'lodash'

export const removeDuplicates = (arr) => {
  const flag = {}
  const unique = []

  arr.forEach(elem => {
    if (!flag[elem.id]) {
      flag[elem.id] = true
      unique.push(elem)
    }
  })
  return unique
}

export const sortServicesByName = (services, sortedByName) => {
  const result = _.sortBy(services, ['name'])
  if (sortedByName) {
    result.reverse()
  }
  return result
}
