/**
 * Функция, которая выводит, что сделал колобок после встречи с персонажем
 *
 * @param characterName
 * @returns {string}
 */
function kolobok(characterName) {
    switch (characterName) {
        case 'дедушка':
            return 'Я от дедушки ушёл'
        case 'заяц':
            return 'Я от заяца ушёл'
        case 'лиса':
            return 'Меня съели'
        default:
            return 'Я колобок'
    }
}

/**
 * Функция, которая выводит призыв новогоднего персонажа
 *
 * @param characterName
 * @returns {string}
 */
function newYear(characterName) {
    if (characterName === 'Дед Мороз' || characterName === 'Снегурочка') {
        console.log(characterName + '! ' + characterName + '! ' + characterName + '!');
    } else {
        console.log('Передай новогоднего персонажа')
    }
}
