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