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

interface hasNameProperty {
  name: string
}
/**
 * 将某个对象的name属性的每个单词的首字母大写，然后将该对象返回
 */
function nameToUpperCase<T extends hasNameProperty>(obj: T): T {
  obj.name = obj.name.split(' ').map(item => item[0].toUpperCase() + item.substring(1)).join(' ')
  return obj
}
const a = {
  name: 'mao wei'
}
nameToUpperCase(a)
/**
 * 将两个数组混合
 */
function mixinArray<T, K>(arr1: T[], arr2: K[]): (T | K)[] {
  if (arr1.length !== arr2.length) {
    throw new Error('数组的长度必须一致')
  }
  const result: (T | K)[] = []
  const len = arr1.length
  for (let i = 0; i < len; i++) {
    result.push(arr1[i], arr2[i])
  }
  return result
}
mixinArray([1, 2, 3], ['a', 'b', 'c'])
