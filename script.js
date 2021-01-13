// // <!-- 
// // Задание: (Рандомные примеры)
// //     Пользователь вводит колличество решаемых им примеров
// //     И функций. Пользователю отдают рандомные числа и рандомные знаки для решаемых примеров
// //     После примера отдается сообщение:
// //         Ваш ответ верный - 2 
// //             или
// //         Ваш ответ не верный - 2! Правильный ответ - 3!
// // -->



function random(min, max) {
    let randomNumber = Math.floor(Math.random() * (max + 1 - min) + min );
    return randomNumber;
}

let minNumber = +prompt  ('Введите минимальное число', 1),
   maxNumber = +prompt  ('Введите максимальное число', 15);


for (let i = 0; i < 10; i++) {
    let  num1 = random(minNumber, maxNumber);
    let  num2 = random(minNumber, maxNumber);



    let equasion =+ prompt (num1 +' + '+ num2 +' =? ');
    let answer = (num1+num2) == equasion ? ' Молодец, это правильный ответ <br><br>'  :  'К сожалению ваш ответ "'+ equasion + '" неправильный. <br><br>';  
    document.write(num1+' + '+ num2 + '=' +' ' +(num1 + num2) + '     Ваш ответ ' + equasion + '    ' + answer) ;
    
}
