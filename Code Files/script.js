const startBtn = document.querySelector('.start-button');
const popupInfo = document.querySelector('.Popup-info');
const existBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgain = document.querySelector('.tryagain-btn');
const homeBtn = document.querySelector('.gohome-btn');


startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

existBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

continueBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestions(0);
    questionCounter(1);
    headerScore();
}

tryAgain.onclick = () => {
    quizBox.classList.add('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionCount + 1);

    headerScore();
}

homeBtn.onclick = () => {
    quizSection.classList.remove('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionCount + 1);

  
}


let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

const nextBtn = document.querySelector('.next-button');

nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);
        questionCounter(questionCount + 1);
        
        nextBtn.classList.remove('active');


    } else {
        showResultBox();
    }
};


const optionList = document.querySelector('.option-list');

function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>
    <div class="option"><span>${questions[index].options[2]}</span></div>
    <div class="option"><span>${questions[index].options[3]}</span></div>`;

    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    for (let i = 0;i < option.length; i++ ){
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let alloptions = optionList.children.length;
    
    if (userAnswer == correctAnswer) {
        answer.classList.add('correct');
        userScore =  userScore + 1;
        headerScore();
    }

    else {
        answer.classList.add('incorrect');

        for(let i = 0; i < alloptions; i++) {
           if(optionList.children[i].textContent == correctAnswer){

              optionList.children[i].setAttribute('class','option correct');

        }
      }
    }
    for (let i = 0; i< alloptions; i++ ) {
        optionList.children[i].classList.add('disabled');
    }

    nextBtn.classList.add('active'); 

}


function questionCounter(index){
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} Questions`;
}

function headerScore() {
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Score: ${userScore} / ${questions.length}`;
}

function showResultBox() {
    quizBox.classList.remove('active');
    resultBox.classList.add('active');

    const scoreText = document.querySelector('.score-test');
    scoreText.textContent = `Your Score ${userScore} out of ${questions.length}`;

    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');
    
    let progressStartValue = -1 ;
    let progressEndValue = (userScore / questions.length) * 100 ;

    let speed = 20;

    let progress = setInterval(() => {
        progressStartValue++;
        
        progressValue.textContent = `${progressStartValue}%`;

        circularProgress.style.background = `conic-gradient( rgb(34, 119, 176) ${progressStartValue * 3.6}deg, rgba(255, 255, 255,.1) 0deg)`;

        if (progressStartValue == progressEndValue){
            clearInterval(progress);
        }
  
    }, speed);

}


let questions = [
    {
        numb: 1,
        question: "What does HTML stand for?",
        answer: "3. Hyper Text Markup Language",
        options: [
            "1. Hyper Type Multi language",
            "2. Hyper Text Multiple Language",
            "3. Hyper Text Markup Language",
            "4. Home Text Multi Language",
        ]
    },
    {
        numb: 2,
        question: "What does CSS stand for?",
        answer: "3. Cascading Style Sheets",
        options: [
            "1. Computer Style Sheets",
            "2. Colorful Style Sheets",
            "3. Cascading Style Sheets",
            "4. Creative Style Sheets",
        ]
    },
    {
        numb: 3,
        question: "Which CSS property is used to specify the background color of an element?",
        answer: "1. background-color",
        options: [
            "1. background-color",
            "2. color",
            "3. background",
            "4. bgcolor",
        ]
    },
    {
        numb: 4,
        question: "Where in an HTML document is the correct place to refer to an external style sheet? ",
        answer: "2. In the body section ",
        options: [
            "1. At the end of the document",
            "2. In the body section ",
            "3. In the head section ",
            "4. In a division class ",
        ]
        
    },
    {
        numb: 5,
        question: "Which keyword is used to declare a variable in JavaScript?",
        answer: "2. var",
        options: [
            "1. let",
            "2. var",
            "3. const",
            "4. int",
        ]
    }
];
