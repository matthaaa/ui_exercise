new Vue({
  el: '#survey',
  data: {
    newQuestion: true,
    newAnswer: false,
    review: false,
    complete: false,

    questions: {},

    formQuestion: {
      question: "",
      answers: [],
    },

    formAnswer: "",
  },
  methods: {
    createQuestion: function() {
      if (this.newAnswer = true) {
        this.newAnswer = false;
        this.saveQuestion();
        console.log(this.questions);
      }
    },

    queueQuestion: function () {
      this.newQuestion = false;
      this.newAnswer = true;
      console.log(this.questions);
      console.log(this.formQuestion);
    },

    saveAnswer: function () {
      this.formQuestion.answers.unshift(this.formAnswer);
      this.formAnswer = "";
      console.log(this.formQuestion);
    },

    saveQuestion: function () {
      const questionNumber = Object.keys(this.questions).length + 1;
      this.questions[questionNumber] = this.formQuestion;
      this.formQuestion = "";
      console.log(this.questions);
    },

    saveSurvey: function () {

    }
  }
})
