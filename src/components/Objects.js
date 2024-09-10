class PlayerModel {
  constructor(name, isComputer = false) {
    this.name = name;
    this.balance = 1000;
    this.currentPos = 0;
    this.isComputer = isComputer;
    this.missedTurns = 0;
  }

  getBalance() {
    return this.balance;
  }

  rewardPlayer(amount) {
    this.balance += amount;
  }

  penalizePlayer(amount) {
    this.balance -= amount;
  }
}

class Box {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

class QuestionBox extends Box {
  constructor(name, questions) {
    super(name, "question");
    this.questions = questions;
  }

  getQuestion() {
    const len = this.questions.length;
    if (len < 1) return null;
    const randomNumber = Math.floor(Math.random() * len);
    return this.questions[randomNumber];
  }
}

class ChanceBox extends Box {
  constructor(name) {
    super(name, "chance");
  }
}

class TrapBox extends Box {
  constructor(name) {
    super(name, "trap");
  }
}

class Game {
  constructor(players, boxes) {
    this.players = players;
    this.boxes = boxes;
    this.currentPlayerIndex = 0;
    this.diceValue = 0;
  }

  initializeGame() {
    this.currentPlayerIndex = 0;
    this.diceValue = 0;
    this.players.forEach((player) => {
      player.currentPos = 0;
      player.balance = 1000;
    });
  }

  // Roll dice
  rollDice() {
    this.diceValue = Math.floor(Math.random() * 6) + 1;
    return this.diceValue;
  }

  // Move player
  movePlayer() {
    const player = this.players[this.currentPlayerIndex];
    player.currentPos =
      (player.currentPos + this.diceValue) % this.boxes.length;
    this.handleLanding(player);
  }

  // Handle landing on a box
  handleLanding(player) {
    const box = this.boxes[player.currentPos];
    if (box.type === "question") {
      const question = box.getQuestion();
      this.askQuestion(player, question, box);
    } else if (box.type === "trap") {
      player.missedTurns += 2;
    }
  }

  // Ask question and handle response
  askQuestion(player, question) {
    const correct = Math.random() < 0.5; // Simulate 50% chance of getting it right
    if (correct) {
      player.rewardPlayer(question.reward);
    } else {
      player.penalizePlayer(question.penalty);
    }
  }

  // End turn and move to next player
  endTurn() {
    this.currentPlayerIndex =
      (this.currentPlayerIndex + 1) % this.players.length;
  }

  // Check game state
  checkGameState() {
    return this.players.some(
      (player) => player.currentPos === this.boxes.length - 1
    );
  }
}

export { PlayerModel, QuestionBox, ChanceBox, TrapBox, Game };
