const age = parseInt (prompt("몇살이야?"));

if (isNaN(age)) {
    console.log("숫자를 적어주세요");
}
else if (age < 18 && age > 0) {
    console.log("너무어립니다!");
}
else if (age <= 0) {
    console.log("시간여행을 하시는군요!");
}
else {
    console.log("음주가능!");
}
console.log(age);
// console.log(typeof age, parseInt(age));
