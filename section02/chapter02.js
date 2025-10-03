// 단락 평가 활용 사례

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName(); // undefined 값이라 person의 값이 없음이 출력
printName({ name: "김도연" }); // person 값이 포함되어 있기에 김도연이 출력됨