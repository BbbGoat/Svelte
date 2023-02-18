const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

// 로컬저장소에 넣을 배열값 저장해두는 변수
const toDos = [];

// 4. 로컬저장소에 todo list 저장하는 함수
function saveToDos() {
    // 로컬저장소에 해당 key, 값을 저장하는 의미인데
    // 순서상 이미 들어가있는 toDos 안의 array를 불러와 로컬저장소에 찍어주는것
    localStorage.setItem("todos", JSON.stringify(toDos));
    // JSON.stringify() 객체나 배열을 string으로 변환해주는 브라우저 기능 
}

// 3. 버튼 클릭시 해당 버튼 지우기 함수
function deleteToDo(event) {
    // 이벤트가 발생한 타겟의 부모요소를 선택한다 -> 타겟 버튼의 부모요소인 li 선택
    const li = event.target.parentElement;
    li.remove();
}

// 2. 전달받은 value를 화면에 출력시키기
function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    
    // 추가한 span태그 안에 아래에서 받은 전달변수를 출력시킨다!
    span.innerText = newTodo;
    button.innerText = "👻";
    button.addEventListener("click", deleteToDo);

    // li의 뒤에 자식요소로 span, button 태그를 추가한다
    li.appendChild(span);
    li.appendChild(button);
    
    // 출력확인하기
    // console.log(li);

    toDoList.appendChild(li);
}

// 1. input 창에서 입력받은 value값 셋팅하고 전달하기
function handleToDoSubmit(event) {
    event.preventDefault();

    const newTodo = toDoInput.value;
    toDoInput.value = "";

    // 입력받은 텍스트를 로컬저장 배열변수에 추가하기
    toDos.push(newTodo);
    
    // 함수 호출하기
    // 1. 다른 함수를 호출하고 거기에 인수를 전달한다
    paintToDo(newTodo);
    // 2. 로컬저장소 함수 호출
    // 호출되는 시점에는 이미 newTodo는 toDos의 array에 들어있다
    saveToDos();

}
    

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) { // argument로 로컬저장소의 value값들 하나씩 전달
    console.log("this is the turn of", item);
}

const savedToDos = localStorage.getItem("todos");

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(sayHello);
}