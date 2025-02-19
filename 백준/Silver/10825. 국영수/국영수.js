const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const students = [];

for (let i = 1; i <= N; i++) {
    let [name, k, e, m] = input[i].split(' ');
    students.push({
        name,
        k: Number(k),
        e: Number(e),
        m: Number(m)
    });
}

students.sort((a, b) => {
    if (a.k !== b.k) return b.k - a.k; 
    if (a.e !== b.e) return a.e - b.e; 
    if (a.m !== b.m) return b.m - a.m; 
    return a.name < b.name ? -1 : 1;
});

console.log(students.map(student => student.name).join('\n'));
