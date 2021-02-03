const students = [
    {id : 12 , name : "Rohit"},
    {id : 28 , name : "Rahul"},
    {id : 32 , name : "Ragib"}
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter (s => s.id >20);
console.log(bigger);