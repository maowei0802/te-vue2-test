/**
 * 类型别名
 */
type callback1<T> = (n: T, i: number) => boolean;
function filter1<T> (arr: T[], callback1: callback1<T>): T[] {
  const newArr: T[] = []
  arr.forEach((n, i) => {
    if (callback1(n, i)) {
      newArr.push(n)
    }
  })
  return newArr
}
console.log(filter1([1, 2, 3], n => n % 2 !== 0))
/**
 * 接口
 */
interface callback2<T> { (n: T, i: number): boolean}
function filter2<T> (arr: T[], callback2: callback2<T>): T[] {
  const newArr: T[] = []
  arr.forEach((n, i) => {
    if (callback2(n, i)) {
      newArr.push(n)
    }
  })
  return newArr
}
console.log(filter2([1, 2, 3], n => n % 2 !== 0))
/**
 * 类
 * 如果class里面写了泛型，那么作用于全局
 */
class ArrayHelper<T> {
  constructor(private arr: T[]) {}
  take(n: number): T[] {
    if (n >= this.arr.length) {
      return this.arr
    }
    const newArr: T[] = []
    const len = this.arr.length
    for (let i = 0; i < len; i++) {
      newArr.push(this.arr[i])
    }
    return newArr
  }
}
const helper = new ArrayHelper([1])
