const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date()
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock() // 시계를 바로 호출하기 위해서
setInterval(getClock, 1000); // 1초 뒤부터 실행 반복
