new Vue({
  el: '#survey',
  data: {
    newQuestion: true,
    newAnswers: false,
    review: false,
    complete: false,
    formQuestion: "",
    questions: {},
  },
  methods: {
    saveQuestion: function () {
      const questionNumber = Object.keys(this.questions).length + 1;
      this.questions[questionNumber] = this.formQuestion;
      this.formQuestion = "";
      this.newQuestion = false;
      this.newAnswers = true;
      console.log(this.questions);
      console.log();
    }
  }
})
