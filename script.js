let questions = document.getElementById("questions");
let ans1 = document.getElementById("ans1");
let ans2 = document.getElementById("ans2");
let ans3 = document.getElementById("ans3");
let ans4 = document.getElementById("ans4");

let api ="https://opentdb.com/api.php?amount=20&category=9&difficulty=medium&type=multiple";
fetch(api)
.then((response)=> response.json())
.then((data)=>{
    let quiz = data.results;
    let arr =[];
    quiz.map((item)=>{
        let quizObj ={
            question: item.question,
            options:[...item.incorrect_answers, item.correct_answer],
            answer: item.correct_answer,
        };
        quizObj.options.sort(a => Math.random() - 0.5);
        arr.push(quizObj);
    });
    arr.sort(a => Math.random() - 0.5);
    questions.innerHTML = arr[0].question;
    ans1.innerHTML =arr[0].options[0];
    ans2.innerHTML =arr[0].options[1];
    ans3.innerHTML =arr[0].options[2];
    ans4.innerHTML =arr[0].options[3];
    console.log(arr);

})