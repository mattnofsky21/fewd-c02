const getSleepHours = day => {
    if (day === 'Monday') {
        return 8;
    } else if (day === 'Tuesday') {
        return 7;
    } else if (day === 'Wedenesday') {
        return 6;
    } else if (day === 'Thursday') {
        return 5;
    } else if (day === 'Friday') {
        return 4;
    } else if (day === 'Saturday') {
        return 3;
    } else if (day === 'Sunday') {
        return 10;
    } else {
        return 0;
    }
};

console.log(getSleepHours('Monday'));
console.log(getSleepHours('Tuesday'));
console.log(getSleepHours('Sunday'));
console.log(getSleepHours('Everyday'));

const getActulaSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');


const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
}
getIdealSleepHours();

// Task8 //

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
};

if (actualSleepHours === idealSleepHours) {
    console.log('You have got the perfect amount of sleep');
} else if (actualSleepHours > idealSleepHours) {
    console.log('You have got more sleep than needed.');
} else if (actualSleepHours < idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep then you need. You should get some rest.');
} else {
    console.log('Sleeping is good.');
}

calculateSleepDebt()