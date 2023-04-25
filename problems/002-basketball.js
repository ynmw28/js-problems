/**
 * Известны результаты каждой из 4х четвертей баскетбольной встречи.
 * Нужно определить победителя матча. Побеждает команда,
 * набравшая больше очков в течение всего матча.
 *
 * Напишите функцию getWinner(points) возвращающую номер победившей команды,
 * либо undefined в случае ничьей.
 *
 * Пример:

 * getWinner(['23-26', '24-30', '30-27', '35-31']) === 2
 * getWinner(['36-32', '32-24', '20-28', '30-26']) === 1
 * getWinner(['36-18', '22-31', '27-21', '19-34']) === undefined
 *
 * @param {string[]} points
 * @returns {(number|undefined)}
 */
function getWinner(points) {
let newAr = points.join('-').split('-').map(Number)
let count = 0
let secondCount = 0

for (let i = 0; i < newAr.length;i++) {
  if(i % 2 === 0) {
    count += newAr[i]
  } else {
    secondCount += newAr[i]
}
}
if (count === secondCount)
return undefined;
return count > secondCount ? 1:2
}

module.exports = getWinner;
