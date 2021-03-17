// Частина 1
// Дано рядок у форматі "Student1 - Group1; Student2 - Group2; ..."

// Завдання 1
// Заповніть словник, де:
// - ключ – назва групи
// - значення – відсортований масив студентів, які відносяться до відповідної групи

// Ваш код починається тут

const studentsGroups = {
  'IO-81': [
    'Дудка Максим',
    'Кобук Назар',
    'Рахуба Вероніка',
    'Іванов Володимир',
  ],
  'IO-82': [
    'Лесик Сергій',
    'Ющенко Андрій',
    'Мартинюк Назар',
    'Роман Олександр',
    'Востриков Нікіта',
    'Фещенко Кирил',
    'Тарасенко Юлія',
  ],
  'IO-83': ['Аверкова Анастасія', 'Соловйов Даніїл', 'Крамар Віктор'],
  'IB-81': [
    'Базова Лідія',
    'Снігурець Олег',
    'Дрозд Світлана',
    'Грабко Михайло',
    'Кулініч Віталій',
  ],
  'IB-82': ['Лихацька Юлія', 'Іванов Дмитро', 'Скрипченко Володимир'],
  'IB-83': [
    'Матвійчук Андрій',
    'Ткаченко Ярослав',
    'Кочерук Давид',
    'Головенець Руслан',
    'Бондаренко Максим',
    'Дровнін Павло',
  ],
  'IП-83': ['Жуков Михайло', 'Мінченко Володимир'],
  'IП-84': ['Дмитренко Олександр'],
}

console.log('Task 1')
console.log(studentsGroups)

// Дано масив з максимально можливими оцінками

const points = [12, 12, 12, 12, 12, 12, 12, 16]

// Завдання 2
// Заповніть словник, де:
// - ключ – назва групи
// - значення – словник, де:
//   - ключ – студент, який відносяться до відповідної групи
//   - значення – масив з оцінками студента (заповніть масив випадковими значеннями, використовуючи функцію `randomValue(maxValue: Int) -> Int`)
// { 'group' : {students : [ , , , , , , , ]} }
let currentGroup = []
const curentChild = []
const studentPoints = {}
const childPoint = [{}, {}, {}, {}, {}, {}, {}, {}]
currentGroup = Object.keys(studentsGroups)

for (let i = 0; i < points.length; i++) {
  let group = currentGroup[i]
  // console.log('студенты в группе' + group + studentsGroups[group])
  Object.values(studentsGroups[group]).forEach((element) => {
    // curentChild.push(element)
    let randomPoint = []

    for (let k = 0; k < 8; k++) {
      let random = Math.floor(Math.random() * points[k])
      randomPoint.push(random)
    }
    childPoint[i][element] = randomPoint
  })
  // console.log(i)
}

for (let j = 0; j < points.length; j++) {
  studentPoints[currentGroup[j]] = childPoint[j]
}

// console.log('------' + Object.values(childPoint[0]))
console.log('Task 2')
console.log(childPoint)
// console.log(currentGroup)
// console.log('students group')
// console.log(curentChild)
// console.log(studentPoints)
// Ваш код закінчується тут

// Завдання 3
// Заповніть словник, де:
// - ключ – назва групи
// - значення – словник, де:
//   - ключ – студент, який відносяться до відповідної групи
//   - значення – сума оцінок студента
// { 'group' : {students : num} }

const sumChild = [{}, {}, {}, {}, {}, {}, {}, {}]
for (let i = 0; i < points.length; i++) {
  let group = currentGroup[i]
  // console.log('студенты в группе' + group + studentsGroups[group])
  Object.values(studentsGroups[group]).forEach((element) => {
    let sumPointsStudent = 0
    // curentChild.push(element)
    let randomPoint = []
    // console.log(studentPoints[group][element])
    for (let k = 0; k < 8; k++) {
      let random = Math.floor(Math.random() * points[k])
      randomPoint.push(random)
      sumPointsStudent += studentPoints[group][element][k]
    }
    // console.log(sumPointsStudent)
    sumChild[i][element] = sumPointsStudent
  })
  // console.log(i)
}

for (let j = 0; j < points.length; j++) {
  studentPoints[currentGroup[j]] = sumChild[j]
}
console.log('Task 3')
console.log(studentPoints)

// Завдання 4
// Заповніть словник, де:
// - ключ – назва групи
// - значення – середня оцінка всіх студентів групи
// {group : avaregePoint }
const averageList = []
for (let m = 0; m < 8; m++) {
  let group = currentGroup[m]
  let average = 0
  Object.values(studentPoints[group]).forEach((element) => {
    // console.log(group + '=' + element)
    average += element
  })
  average = average / studentsGroups[group].length

  averageList.push(Math.round(average))
}

// console.log(currentGroup)
const listGroup = {}
for (let n = 0; n < 8; n++) {
  let group = currentGroup[n]
  listGroup[group] = averageList[n]
}
console.log('Task 4')
console.log(listGroup)

// Заповніть словник, де:
// - ключ – назва групи
// - значення – масив студентів, які мають >= 60 балів
// {group : [students >= 60]}
const passedPerGroup = {}
for (let t = 0; t < 8; t++) {
  let group = currentGroup[t]
  let zarah = []
  // console.log(
  //   Object.keys(studentPoints[group]) + Object.values(studentPoints[group])
  // )
  for (let l = 0; l < Object.keys(studentPoints[group]).length; l++) {
    // console.log(
    //   group +
    //     Object.keys(studentPoints[group])[l] +
    //     Object.values(studentPoints[group])[l]
    // )
    if (Object.values(studentPoints[group])[l] >= 60) {
      zarah.push(Object.keys(studentPoints[group])[l])
    }
  }
  passedPerGroup[group] = zarah

  // Object.values(studentPoints[group]).forEach((element) => {
  //   Object.values(Object.keys(studentPoints[group])).forEach((elem) => {
  //     console.log(group + ' + ' + elem + ' = ' + element)
  //   })
  // })
  // console.log(studentPoints[group])
}

console.log('Task 5')
console.log(passedPerGroup)
