/** 有a的概率返回true，默认a=0.5 */
const random: (a?: number) => boolean = (a = 0.5) => {
  return Math.random() < a
}

/** 返回0-a之间的随机数字 */
const randomNumber: (a: number) => number = (a) => {
  return Math.floor((Math.random() * a)) + 1

}

/** 返回传入数组钟随机一项 */
const randomOne: (list: Array<string>) => string = (list) => {
  return list[randomNumber(list.length) - 1]
}

const randomTime: <T extends (...arg: any) => any>(fc: T, count: number) => any = (fc, count) => {
  console.log(fc)
  const resultList = [];
  for (let i = 0; i < count; i++) {
    resultList.push(fc())
  }
  return resultList;
}

const randomValue: () => string = () => {
  const type = randomOne(typeList);
  let result
  switch (type) {
    case 'list':
      const list = []
      for (let i = 0; i < randomNumber(10); i++) {
        list.push(randomOne(firstNameList))
      }
      result = list
      break
    case 'object':
      let obj: Record<any, any> = {};
      for (let i = 0; i < randomNumber(10); i++) {
        obj[randomOne(firstNameList)] = randomOne(firstNameList)
      }
      result = obj;
      break;
    case 'string':
      result = randomOne(firstNameList)
      break
    case 'number':
      result = randomNumber(9999999);
      break
    default:
      result = randomOne(firstNameList)
      break
  }
  return JSON.stringify(result);
}

const declareList = ['const', 'var', 'let'];
const firstNameList = ['wtf', 'codeForever', 'tm', 'apple', 'people', 'cookie', 'code', 'electrical', 'car', 'darkMatter', 'force']
const LastNameList = ['List', 'Count', 'EngList', 'Cancer', 'Number', 'Name',
  'Vite', 'Random', 'Object'];
const typeList = ['list', 'object', 'number', 'string']

const generater = () => {
  const declare = randomOne(declareList);
  const name = randomOne(firstNameList) + randomOne(LastNameList) + '';
  const value = randomValue();
  return `${declare} ${name} = ${value}`;
}

export default generater;