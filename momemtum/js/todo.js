const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");


// 2. 전달받은 value를 화면에 출력시키기
function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");

    // li의 뒤에 자식요소로 span태그를 추가한다
    li.appendChild(span);

    // 추가한 span태그 안에 최종적으로 아래에서 받은 전달변수를 출력시킨다!
    span.innerText = newTodo;
    
    // 출력확인하기
    // console.log(li);

    toDoList.appendChild(li);
}

// 1. input 창에서 입력받은 value값 셋팅하고 전달하기
function handleToDoSubmit(event) {
    event.preventDefault();

    const newTodo = toDoInput.value;
    toDoInput.value = "";

    // 다른 함수를 호출하고 거기에 인수를 전달한다
    paintToDo(newTodo);
}
    

toDoForm.addEventListener("submit", handleToDoSubmit);