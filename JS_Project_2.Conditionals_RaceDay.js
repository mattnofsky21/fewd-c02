// Task1 1000->2000
let raceNumber = Math.floor(Math.random() * 2000);
console.log(raceNumber);

if (raceNumber < 1000) {
    console.log('early registrants');
} else if (raceNumber => 1000) {
    console.log('late registrants');
}

// Task2
const registeredEarly = false;
const registeredLate = true;

if (raceNumber < 1000) {
    console.log(registeredEarly);
} else if (raceNumber => 1000) {
    console.log(registeredLate);
}

// Task 3-4
let runnerAge = Math.floor(Math.random() * 50);
console.log(runnerAge);

if (raceNumber <= 1000 && runnerAge < 18) {
    console.log('non-adult AND registered late');
} else {
    console.log('adult AND registered early');
}

//Task 5-9

if (raceNumber <= 1000 && runnerAge > 18) {
    console.log(raceNumber + 'race at 9:30 am');
} else if (raceNumber >= 1000 && runnerAge > 18) {
    console.log(raceNumber + 'late adults run at 11:00 am');
} else if (runnerAge < 18) {
    console.log(raceNumber + 'Youth registrants run at 12:30 pm (regardless of registration');
}