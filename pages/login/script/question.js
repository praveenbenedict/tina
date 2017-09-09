function Question(text, choices, answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.correctAnswer = function(choice){
    console.log(choice);
    console.log(this.answer);
    return choice === this.answer;
};