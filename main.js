const quizQuestion = [
    {
        question : 'What is the most used Programming Language in 2019 ?',
        a:'Java',
        b:'python',
        c:'Ruby',
        d:'JavaScript',
        correct:'d'
    },{
        question : 'Who owns Instagram ?',
        a:'Microsoft',
        b:'Instagram',
        c:'SnapChat',
        d:'Facebook',
        correct:'d'  
    },{
        question : 'Galileo was an astronomer who',
        a:'developed the telescope',
        b:'discovered four satellites of Jupiter',
        c:'discovered that the movement of pendulum produces a regular time measurement ',
        d:'All the above.',
        correct:'b'  
    },{
        question : 'The currency notes are printed in',
        a:'New Delhi ',
        b:'Nagpur',
        c:'Nasik',
        d:'Bombay',
        correct:'c'  
    },{
        question : 'The Indian, who holds the pride of beating the computers in mathematical wizard is:',
        a:'Shakuntala Devi',
        b:'Raja Ramanna',
        c:'Ramanujam',
        d:'Rina PanigrahiBombay',
        correct:'a'  
    },{
        question : 'Name the best-selling book series of the 21st century? ',
        a:'A Song Of Ice And Fire',
        b:'Harry Potter',
        c:'Lord Of The Rings',
        d:'Robert Langdon Series',
        correct:'b'  
    }
];



const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currQuiz=0;
let score= 0;

loadQuiz();

function loadQuiz() {
    const currQuizData = quizQuestion[currQuiz]
    questionEl.innerText = currQuizData.question;
    a_text.innerText = currQuizData.a;
    b_text.innerText = currQuizData.b;
    c_text.innerText = currQuizData.c;
    d_text.innerText = currQuizData.d;
}

submitBtn.addEventListener('click',()=>{
    currQuiz++;


    if(currQuiz < quizQuestion.length){
        loadQuiz();
    }else {
        
        alert("quiz over");
    }
   
    
});

