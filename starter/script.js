'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Lec 145 Creating DOM Elements ^
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">
        ${i + 1}
        ${type}
      </div>
      <div class="movements__value">${mov}</div>
    </div>
  `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// Lec 149 Computing Usernames
displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} €`;
};
calcDisplayBalance(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const movements = [
  200,
  450,
  -400,
  3000,
  -650,
  -130,
  70,
  1300,
]; /*
// Lec 150 The Filter Method
const deposites = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(movements);
console.log(deposites);

// const depositesFor = [];
// for (const mov of movements) if (mov > 0) depositesFor.push(mov);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// Lec 151 The Reduce Method
// accumulator -------> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Moximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
*/

/*
// Lec 147 Data Transformations: map, filter, reduce pg no 50
// Lec 148 The map Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
// const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
  `Movement ${i + 1}: You ${
    mov > 0 ? 'deposited' : 'withdrew'
  } ${Math.abs(mov)}`
  );
  
  console.log(movementsDescriptions);

  // const movementsDescriptions = movements.map((mov, i, arr) => {
//   return `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${
//     mov > 0 ? mov : Math.abs(mov)
//   }`;
// });
*/

/*
// Jonas method
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const dogs = dogsJuliaCorrected.concat(dogsKate);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old.`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

// Lec 144 PROJECT: "Bankist" App (intro about project)

/*
// Lec 143 forEach with Maps and Sets
// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
// Lec 142 Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('------------------FOR EACH------------------');
// doesn't have continue or break statements.
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});
// 0: funtion(200)
// 1: funtion(450)
// 2: funtion(400)
// ...
*/

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
// Lec 141 Simple Array Methods
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE (doesn't alter the orginal array)
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE (alters the original array)
// console.log(arr.splice(2));
arr.splice(-1); // mutates the original array
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE (alters the original array)
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // mutates the original array
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));
*/
/*
// Lec 146 Coding Challenge 1

const checkDogs = function (arr1, arr2) {
  const dogsJulia = arr1;
  const dogsKate = arr2;
  const shallowJulia = dogsJulia.splice(1, 2);
  const combinedArray = shallowJulia.concat(dogsKate);
  combinedArray.forEach(function (age, i) {
    if (age < 3) {
      console.log(`Dog number ${i + 1} is still a puppy`);
    } else {
      console.log(`Dog number ${i + 1} is an adult, and is ${age} years old.`);
    }
  });
};
// console.log(`----------------TEST DATA 1--------------`);
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// console.log(`----------------TEST DATA 2--------------`);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// Lec 152 Coding Challenge 2
// My method

const calcAverageHumanAge = function (ages) {
  const dogAges = ages;
  dogAges.forEach(function (age, i) {
    if (age <= 2) {
      dogAges[i] = 2 * age;
    } else if (age > 2) {
      dogAges[i] = 16 + age * 4;
    }
  });
  console.log(dogAges);
  const adults = dogAges.filter(function (ele, i) {
    return ele >= 18;
  });
  console.log(adults);
  const avg = adults.reduce(function (acc, cur, i, arr) {
    return acc + cur;
  }, 0) / adults.length;
  return avg;
};
console.log(`--------------TEST DATA 1-------------`);
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(`--------------TEST DATA 2-------------`);
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// Jonas method

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  // 2 3. (2+3)/2 = 2.5 === 2/2 + 3/2 = 2.5

  return average;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1);
console.log(avg2);
*/
// Lec 153 The Magic of Chaining Methods
