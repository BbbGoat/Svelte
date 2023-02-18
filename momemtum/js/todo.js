const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

// 로컬저장소에 넣을 배열값 저장해두는 변수
// 업데이트가 가능하게 let변수로 만든다!
let toDos = [];

// 4. 로컬저장소에 todo list 저장하는 함수
function saveToDos() {
    // 로컬저장소에 해당 key, 값을 저장하는 의미인데
    // 순서상 이미 들어가있는 toDos 안의 array를 불러와 로컬저장소에 찍어주는것
    localStorage.setItem("todos", JSON.stringify(toDos));
    // JSON.stringify() 객체나 배열을 string으로 변환해주는 브라우저 기능 
    // >>> 로컬저장소 저장방식을 stringify화 해서 key의 value을 저장해준다!!!!

    /***************************************************** 
    
        [ JSON.stringify(), JSON.parse()를 사용한 이유 ]


        localStorage에 array로 저장이 안되기 때문에
        JSON.stringify로 array처럼 생긴 string으로 저장한 후
        다시 JSON.parse를 이용해 array로 꺼내는 방법이다.
        (JSON.parse는 string을 객체화 시킨다.)

        array.forEach()는 받아온 array를 for 반복문 없이
        item 하나씩 function에 넣을 수 있는 객체를 위한 메서드다!
        
    
    *****************************************************/
    
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


// 5. 만약 로컬저장소에 저장된 todos key가 있으면 아래 조건 진행해라
// 목적: 새로고침하면 리스트가 사라지는것을 막아보자!
const savedToDos = localStorage.getItem("todos");
// stringify된 value값들을 불러와 변수에 담는다

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);

    // toDos 배열변수에 parsedToDos를 넣어서 전에 있는 리스트들을 복원한다.
    // (새로고침시 이전 데이터 초기화 방지)
    toDos = parsedToDos;

    // 받아온 string을 array로 변환시켜주기
    parsedToDos.forEach(paintToDo);
    // forEach를 사용해서 array item들을 하나씩 paintToDo 함수로 돌려준다
    // 그럼 이전과 동일한 리스트들이 새로고침에도 화면에 그대로 출력된다!
}

// 6. 로컬저장소에 저장된 값 삭제버튼 클릭시 제거하기
// 목적: 리스트 삭제 후 새로고침시 다시 원래대로 돌아오는것을 막아보자!
