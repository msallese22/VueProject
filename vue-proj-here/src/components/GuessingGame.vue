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
      <input id="highest-value" type="number" min="1" v-model="highestNumber" @input="decideGuesses()" required>

      <label for="guessy-guess"> Put your guess here: </label>
      <input id="guessy-guess" type="number" min="1" v-model="guessyGuess" required>

      <button @click.prevent="checkGuess()" type="submit" class="btn btn-primary" id="submit-guess-btn" :disabled="listOfGuesses.length === numberOfGuesses || numbersGood">Submit</button>
    </form>
    <div> {{ resultMessage }} </div>
    <div><p>Here are your failed guesses: </p></div>
    <div v-for="guess in listOfGuesses" :key="guess">
      {{ guess }}</div>
  </div>
</template>

<script>

export default {
  name: "GuessingGame",
  mounted()
  {
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
      resultMessage: "",
      numbersGood: false
    }
  },
  methods: {
    createNumber()
    {
      this.randomNumber = Math.floor(Math.random() * (this.highestNumber - 1)) + 1;
      //console.log(this.randomNumber); it's for debugging
    },
    decideGuesses()
    {

      this.numberOfGuesses = this.highestNumber / 20;
       this.numberOfGuesses = Math.round(this.numberOfGuesses);
    },
    checkGuess()
    {
      this.listOfGuesses.push(this.guessyGuess)


      if (this.numberOfGuesses > 0)
      {
        if (this.guessyGuess === this.randomNumber)
        {
          this.resultMessage = "Yay! You did it! The snake will not bite you."
          this.numbersGood = true;

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
}
</script>

<style scoped>

</style>