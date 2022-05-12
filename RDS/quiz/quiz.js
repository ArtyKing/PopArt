//Store a hardcoded list of questions

var myQuestions = [
  {
    question: "1. Which of the following best describes how pop art is made?",
    answers: {
      a: 'By borrowing mass-produced images',
      b: 'Through the extensive use of abstract shapes',
      c: 'With the use of detailed, animated designs'
    },
    correctAnswer: 'a'
  },
  {
    question: "2. What emotional tone can be detected in pop art images?",
    answers: {
      a: 'Conservative Hostility',
      b: 'Apathy and Boredom',
      c: 'Ironic and Cynical'
    },
    correctAnswer: 'c'
  },
  {
    question: "3. Who is often considered the founder of the pop art movement?",
    answers: {
      a: 'Richard Hamilton',
      b: 'Sarah Kim',
      c: 'Jordan Pena'
    },
    correctAnswer: 'a'
  },
  {
    question: "4. What characteristics distinguish Lichtenstein's work?",
    answers: {
      a: 'Primary dolours',
      b: 'Benday dots',
      c: 'All of the above'
    },
    correctAnswer: 'c'
  },
  {
    question: "5. What format did Warhol borrow to create the famous image of Marilyn Monroe?",
    answers: {
      a: 'The diptych format',
      b: 'The perspective format',
      c: 'The elongated format'
    },
    correctAnswer: 'a'
  },
  {
    question: "6. What aspect of American culture inspired the pop art movement?",
    answers: {
      a: 'The furry culture',
      b: 'The influence of mass production',
      c: 'The war on terror'
    },
    correctAnswer: 'b'
  },
  {
    question: "7. Which of the following people was not a famous pop artist?",
    answers: {
      a: 'Roy Lichtenstein',
      b: 'Andy Warhol',
      c: 'Michael Jackson'
    },
    correctAnswer: 'c'
  },
  {
    question: "8. When was Pop Art most popular?",
    answers: {
      a: 'From 1955-1965',
      b: 'From 1965-1975',
      c: 'From 1975-1985'
    },
    correctAnswer: 'a'
  }
];

//Obtain the containers

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

  function showQuestions(questions, quizContainer){
  //Place to store choices
  var output = [];
  var answers;

  for(var i=0; i<questions.length; i++){
    answers = [];

    for(letter in questions[i].answers){

      //Insert radio button and linebreak

      answers.push(
        '<label>'
          + '<input type="radio" name="question'+i+'" value="'+letter+'">'
          + letter + ': '
          + questions[i].answers[letter]
        + '</label><br>'
      );
    }

    //Add to output after processing
    output.push(
      '<div class="textBox"><div class="question">' + questions[i].question + '</div>'
      + '<div class="answers">' + answers.join('') + '</div></div>'
    );
  }

  //Insert code into HTML
  quizContainer.innerHTML = output.join('');
}

  function showResults(questions, quizContainer, resultsContainer){
  
  //Get answers
  var answerContainers = quizContainer.querySelectorAll('.answers');

  var userAnswer = '';
  var numCorrect = 0;
  
  for(var i=0; i<questions.length; i++){

    userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
    
    if(userAnswer===questions[i].correctAnswer){
      numCorrect++;

      //Change colour of answer
      answerContainers[i].style.color = '#168a4c';
    }
    else{

      //Change colour of answer
      answerContainers[i].style.color = 'red';
    }
  }

  //Final display
  resultsContainer.innerHTML = 'Your final score is: '+numCorrect + ' out of ' + questions.length;
}

  showQuestions(questions, quizContainer);

  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }
}