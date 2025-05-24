function solve(input) {
    const meetings = {};

    for (const info of input) {
        const [weekDay, personName] = info.split(' ');
        if (meetings.hasOwnProperty(weekDay)) {
            console.log(`Conflict on ${weekDay}!`);
        } else {
            meetings[weekDay] = personName;
            console.log(`Scheduled for ${weekDay}`);
        }
    }

    Object.keys(meetings).forEach(meeting => {
        console.log(`${meeting} -> ${meetings[meeting]}`);
    });
}


solve(['Monday Peter',
    'Wednesday Bill', 
    'Monday Tim', 
    'Friday Tim']);

console.log('');

solve(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']);
