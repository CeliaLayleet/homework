// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

// 1

const person = {
  name: "Varvara",
  age: 19,
  number: 67,
};

console.log(person);

// 2

function isEmpty(object) {
  for (const key in object) {
    return false;
  }
  return true;
}

console.log(isEmpty(person));

// 3

const task = {
  name: "title",
  text: "description",
  isCompleted: true,
};

function cloneAndModify(object, modifications) {
  return { ...object, ...modifications };
}

const updatedTask = cloneAndModify(task, { isCompleted: false });

console.log(task);
console.log(updatedTask);

for (const key in updatedTask) {
  console.log(key, updatedTask[key]);
}

// 4

const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};

const callAllMethods = object => {
  for (const key in object) {
    if (typeof object[key] === "function") {
      object[key]();
    } else {
      console.log(`Поле ${key} не является функцией или отсутствует.`);
    }
  }
};

callAllMethods(myObject);
