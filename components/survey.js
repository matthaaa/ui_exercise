new Vue({
  el: '#survey',
  data: {
    formQuestion: "",
    questions: {},
  },
  methods: {
    saveQuestion: function () {
      const questionNumber = Object.keys(this.questions).length + 1;
      this.questions[questionNumber] = this.formQuestion;
      formQuestion = "";
      console.log(this.questions);
    }
  }
})
