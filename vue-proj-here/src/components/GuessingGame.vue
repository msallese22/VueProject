<template>
  <h1>Guess A Random Number</h1>
  <header>
    Or else &#128013;
  </header>
  <div>
    <form>
      <label for="how-many-guesses">How many tries will you allow yourself?</label>
      <input id="how-many-guesses" type="number" min="1" max="100" v-model="numberOfGuesses" required>

      <label for="highest-value">What will your max value be?</label>
      <input id="highest-value" type="number" min="1" v-model="highestNumber" required>

      <label for="guessy-guess"> Put your guess here: </label>
      <input id="guessy-guess" type="number" min="1" v-model="guessyGuess" required>

      <button @click.prevent="checkGuess()" type="submit" class="btn btn-primary" id="submit-guess-btn">Submit</button>
    </form>
    <div> {{ resultMessage }} </div>
  </div>
</template>

<script>
import {h} from "vue";

export default {
  name: "GuessingGame",
mounted(){
    this.createNumber();
    this.decideGuesses();
},
  data()
  {
    return {
      highestNumber: 100,//default is 100
      randomNumber: 0,
      listOfGuesses: [],
      numberOfGuesses: 1,
      guessyGuess: undefined,
      resultMessage: ""
    }
  },
  methods: {
    createNumber()
    {
      this.randomNumber =  Math.floor(Math.random() * (this.highestNumber - 1) ) + 1;
    }
    },
    decideGuesses()
    {
      this.numberOfGuesses = this.highestNumber/20;
    },
    checkGuess()
    {
      if(this.numberOfGuesses > 0)
      {
        if (this.guessyGuess === this.randomNumber)
        {
          this.resultMessage = "Yay! You did it! The snake will not bite you."
        }
        else if (this.guessyGuess > this.randomNumber)
        {
          this.resultMessage = "Too high, wise guy. Snake's gettin' hungry!"
        }
        else if (this.guessyGuess < this.randomNumber)
        {
          this.resultMessage = "Too low, bozo. Snake's gonna get you!"
        }
      }
      else
      {
        this.resultMessage = "He's free! And he eats losers!"
      }
    }
}
</script>

<style scoped>

</style>