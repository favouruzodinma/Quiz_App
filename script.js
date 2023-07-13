let questions = document.getElementById("questions");
let ans1 = document.getElementById("ans1");
let ans2 = document.getElementById("ans2");
let ans3 = document.getElementById("ans3");
let ans4 = document.getElementById("ans4");
let insid = document.querySelector(".inside");
let loader = document.querySelector(".loader");
let buttons = document.querySelectorAll(".button");
let progress= document.getElementById("progress");

let arr =[];
let nextQuestion = 0;
let api ="https://opentdb.com/api.php?amount=20&category=9&difficulty=medium&type=multiple";
fetch(api)
.then((response)=> response.json())
.then((data)=>{
    let quiz = data.results;
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

    questions.innerHTML = arr[nextQuestion].question;
    ans1.innerHTML =arr[nextQuestion].options[0];
    ans2.innerHTML =arr[nextQuestion].options[1];
    ans3.innerHTML =arr[nextQuestion].options[2];
    ans4.innerHTML =arr[nextQuestion].options[3];
    loader.style.display="none";
    insid.style.display="flex";
    console.log(arr[nextQuestion].answer);

});
for (let i = 0; i < 19; i++) {
       console.log(i);
      }
for (const button of buttons){
    let btn =[ans1, ans2, ans3, ans4];
 button.onclick = function() {
    btn.map((butt)=> (butt.disabled=true));
        if(button.innerText === arr[nextQuestion].answer){
            button.style.backgroundColor ="green"
            button.style.color ="white";
            
            setTimeout(() => {
                button.style.backgroundColor ="rgba(0, 0, 0, 0.568)"
                button.style.color ="aliceblue";
            }, 1000);
        }else{
            button.style.backgroundColor ="red"
            button.style.color ="white";
                        
            setTimeout(() => {
                button.style.backgroundColor ="rgba(0, 0, 0, 0.568)"
                button.style.color ="aliceblue";
            }, 1000);
        }
        setTimeout(() => {
            nextQuestion = nextQuestion + 1;
            progress.innerText=`Question ${nextQuestion + 1} of 20`;
            btn.map((butt)=> (butt.disabled=false));
            questions.innerHTML = arr[nextQuestion].question;
            ans1.innerHTML =arr[nextQuestion].options[0];
            ans2.innerHTML =arr[nextQuestion].options[1];
            ans3.innerHTML =arr[nextQuestion].options[2];
            ans4.innerHTML =arr[nextQuestion].options[3];
        }, 3000);
    };
}