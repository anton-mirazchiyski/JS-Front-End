function solve() {
  const questionSectionElements = document.querySelectorAll('#quizzie > section');
  const resultElement = document.querySelector('#results h1');

  let correctAnswers = 0, questionsAnswered = 0;

  const questionsAndAnswers = {
    'Question #1: Which event occurs when the user clicks on an HTML element?': 'onclick',
    'Question #2: Which function converting JSON to string?': 'JSON.stringify()',
    'Question #3: What is DOM?': 'A programming API for HTML and XML documents',
  };

  const questionsCount = Object.keys(questionsAndAnswers).length;

  Array.from(questionSectionElements).forEach(sectionElement => {
    const listElement = sectionElement.querySelector('ul.quiz-step');
    const questionElement = listElement.querySelector('li.question');
    const answerElements = listElement.querySelectorAll('li.quiz-answer');

    const correctAnswer = questionsAndAnswers[questionElement.querySelector('h2').textContent];

    Array.from(answerElements).forEach(answerElement => {
      answerElement.addEventListener('click', () => {
        if (answerElement.querySelector('p').textContent === correctAnswer) {
          correctAnswers++;
        }
        questionsAnswered++;
        
        const nextSectionElement = sectionElement.nextElementSibling;
        sectionElement.style.display = 'none';
        nextSectionElement.style.display = 'block';

        if (questionsAnswered === questionsCount) {
          displayScore();
        }
      });
    });
  });

  function displayScore() {
    correctAnswers === questionsCount 
      ? resultElement.textContent = 'You are recognized as top JavaScript fan!'
      : resultElement.textContent = `You have ${correctAnswers} right answers`;
  }  
}
