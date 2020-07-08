export const loadQuestions = async (
  amount = 10,
  category = 9,
  difficulty = "medium",
  type = "multiple"
) => {
  const API = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;

  //----change the category numbers bto desired question categories----

  //  interesting question category numbers:

  // Comics : 32
  // Vehicles : 28
  // Animals : 27
  // Celebrities : 26
  // History : 23
  // Geography : 22
  // Science and nature : 17
  // Video Games : 15
  // Television : 14
  // Music : 12
  // Films : 11
  // General knowledge : 9

  //---------change difficulty-------

  //easy
  //medium
  //hard

  //------change amount of questions-----

  //change amount 1 through 10

  try {
    const res = await fetch(API);
    const { results } = await res.json();
    return convertQuestionsFromAPI(results);
  } catch (err) {
    console.log(err);
  }
};

const convertQuestionsFromAPI = (rawQuestions) => {
  return rawQuestions.map((loadedQuestion) => {
    const formatQuestion = {
      question: loadedQuestion.question,
      answerChoices: [...loadedQuestion.incorrect_answers],
    };
    formatQuestion.answer = Math.floor(Math.random() * 4);

    formatQuestion.answerChoices.splice(
      formatQuestion.answer,
      0,
      loadedQuestion.correct_answer
    );

    return formatQuestion;
  });
};
