// 1

function calculateFinalPrice(basePrice, discountPercentage, taxRate) {
  let discountAmount = (basePrice * discountPercentage) / 100;
  let discountedPrice = basePrice - discountAmount;
  let taxCost = discountedPrice * taxRate;
  let finalPrice = discountedPrice + taxCost;
  return finalPrice;
}

console.log(calculateFinalPrice(100, 50, 0.22));

// 2

function checkAccess(name, password) {
  if (name == "admin" && password == "123456") {
    return "Доступ разрешен";
  } else {
    return "Доступ запрещен";
  }
}

console.log(checkAccess("admin", "123456"));

// 3

const getTimeOfDay = function (currentTime) {
  if (currentTime < 0 || currentTime > 23) {
    return "Некорректное время";
  }
  if (currentTime <= 5) {
    return "Ночь";
  } else if (currentTime <= 11) {
    return "Утро";
  } else if (currentTime <= 17) {
    return "День";
  } else if (currentTime <= 23) {
    return "Вечер";
  }
};

console.log(getTimeOfDay(19));

// 4

const findFirstEven = (start, end) => {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      return i;
    }
  }
  return "Чётных чисел нет";
};

console.log(findFirstEven(7, 10));
