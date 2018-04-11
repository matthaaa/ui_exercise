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
    queueQuestion: function () {
      const questionNumber = Object.keys(this.questions).length + 1;
      this.newQuestion = false;
      this.newAnswer = true;
      console.log(this.questions);
      console.log(this.formQuestion);
    },

    saveAnswer: function () {
      this.formQuestion.answers.push(this.formAnswer);
      console.log(this.formQuestion);
    },

    saveQuestion: function () {
      this.questions[questionNumber] = this.formQuestion;
      this.formQuestion = "";
    }
  }
})
