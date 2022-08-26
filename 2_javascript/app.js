const addBtn = document.querySelector('#addBtn');
const endBtn = document.querySelector('#endBtn');
const users = [];

const inputName = document.querySelector('#name');
const inputAge = document.querySelector('#age');

const playerFn = {
    sayHello: (param) => {
        console.log(`Hello my name is ${param.name} and age is ${param.age}`);
    },
};

const age = parseInt(prompt('How old are you?'));

if (isNaN(age)) {
    console.log('Please write a number');
} else if (age < 18) {
    console.log('You are too young.');
} else {
    console.log('You can drink.');
}
addBtn.addEventListener('click', () => {
    const player = {
        name: inputName.value,
        age: inputAge.value,
    };

    users.push(player);
});

endBtn.addEventListener('click', () => {
    users.forEach((name) => {
        playerFn.sayHello(name);
    });
});
