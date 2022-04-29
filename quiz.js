/* Code was borrowed from: https://simplestepscode.com/javascript-quiz-tutorial/ */




(function(){

  function buildQuiz(){

    const output = [];


    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

       
        const answers = [];


        for(letter in currentQuestion.answers){

          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );


    quizContainer.innerHTML = output.join('');
  }

  function showResults(){


    const answerContainers = quizContainer.querySelectorAll('.answers');


    let numCorrect = 0;


    myQuestions.forEach( (currentQuestion, questionNumber) => {


      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;


      if(userAnswer === currentQuestion.correctAnswer){

        numCorrect++;


        answerContainers[questionNumber].style.color = 'lightgreen';
      }

      else{

        answerContainers[questionNumber].style.color = 'red';
      }
    });


    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'inline-block';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Do you have firewall enabled on your router?",
      answers: {
        a: "Yes",
        b: "No",
        c: "Not sure"
      },
      correctAnswer: "a"
    },
    {
      question: "Do you have firewalls enabled on all of your computers and laptops?",
      answers: {
        a: "Yes",
        b: "No",
        c: "Not sure"
      },
      correctAnswer: "a"
    },
        {
      question: "Do you use account with administrative privileges for day to day work on your devices?",
      answers: {
        a: "Yes",
        b: "No",
        c: "Not sure"
      },
      correctAnswer: "b"
    },
        {
      question: "Is the password to your laptop/computer at least 8 characters long and difficult go guess?",
      answers: {
        a: "Yes",
        b: "No",
        c: "Not sure"
      },
      correctAnswer: "a"
    },
        {
      question: "Have you enabled multi factor authentication to all of the services where it is possible?",
      answers: {
        a: "Yes",
        b: "No",
        c: "Not sure"
      },
      correctAnswer: "a"
    },
        {
      question: "Do you use use the same password for all of your services?",
      answers: {
        a: "Yes",
        b: "No",
        c: "Not sure"
      },
      correctAnswer: "c"
    },
        {
      question: "Do you download only applications from legitimate sources e.g. App Store, Google Play Store?",
      answers: {
        a: "Yes",
        b: "No",
        c: "Not sure"
      },
      correctAnswer: "c"
    },
        {
      question: "Is your anti-malware set to scan web pages you visit and warn you about potentially maliciuous sites you want to visit?",
      answers: {
        a: "Yes",
        b: "No",
        c: "Not sure"
      },
      correctAnswer: "c"
    },
        {
      question: "Is your anti-malware software scanning daily for malicious programs?",
      answers: {
        a: "Yes",
        b: "No",
        c: "Not sure"
      },
      correctAnswer: "c"
    },
        {
      question: "Have you changed default password on your router?",
      answers: {
        a: "Yes",
        b: "No",
        c: "Not sure"
      },
      correctAnswer: "c"
    },
        {
      question: "Is an auto-play or auto-run disabled on all of your systems?",
      answers: {
        a: "Yes",
        b: "No",
        c: "Not sure"
      },
      correctAnswer: "c"
    },
        {
      question: "Is all of your software licensed with accordance to recommendations from the publisher?",
      answers: {
        a: "Yes",
        b: "No",
        c: "Not sure"
      },
      correctAnswer: "c"
    },
        {
      question: "Do you install security updates within a 14 days days of release?",
      answers: {
        a: "Yes",
        b: "No",
        c: "Not sure"
      },
      correctAnswer: "c"
 }];


  buildQuiz();


  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;


  showSlide(currentSlide);


  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
