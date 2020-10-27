/**
 * @desc 比较对象是否相等
 * @param {any} x 传入比较的第一个值
 * @param {any} y 传入比较的第二个值
 * @return {boolean} true or false
 */
export const isObjectEqual = (x, y) => {
  let ox = x instanceof Object
  let oy = y instanceof Object
  if (!ox || !oy) {
    return x === y
  }
  if (Object.keys(x).length !== Object.keys(y).length) return false
  for (let key in x) {
    let xKey = Object.prototype.toString.call(x[key]) === '[object Object]'
    let yKey = Object.prototype.toString.call(y[key]) === '[object Object]'
    let xArr = Object.prototype.toString.call(x[key]) === '[object Array]'
    if (xKey && yKey) {
      return isObjectEqual(x[key], y[key])
    } else if (xArr) {
      if (x[key].toString() !== y[key].toString()) {
        return false
      }
    } else if (x[key] !== y[key]) {
      return false
    }
  }
  return true
}
/**
 * @desc 数组去重包括复杂对象 数组AND对象
 * @param {Array} arr 传入要去重的数组 
 * @return 返回去重后的数组
 */
export const uniqe = (arr) => {
  let tmp = new Set(arr.map(item => JSON.stringify(item)))
  return Array.from(tmp).map(item => JSON.parse(item))
}