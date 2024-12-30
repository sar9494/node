import cowsay from 'cowsay'
import figlet from 'figlet'
import ora from 'ora';
import chalk from 'chalk';
import pokemon from 'pokemon';
import { faker } from '@faker-js/faker';
import qrImage from 'qr-image';
import inquirer from 'inquirer';
figlet.text(
    "Boo!",
    {
      font: "Ghost",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    },
    function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
    }
  );
const spinner = ora(`Loading ${chalk.red('unicorns')}`).stop();
console.log(pokemon.getName(100,'ko'));
faker.seed("email");
const firstRandom = faker.number.int();
console.log(firstRandom);
console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "T T",
    T : "U "
}));

const questions = [
  {
    type: 'input', // 'input' is for text input
    name: 'name',
    message: 'What is your name?'
  },
  {
    type: 'input', // 'input' is for numeric or text input
    name: 'age',
    message: 'How old are you?',
    validate: function(value) {
      if (isNaN(value) || value < 0) {
        return 'Please enter a valid age';
      }
      return true;
    }
  },
  {
    type: 'confirm', // 'confirm' is for yes/no question
    name: 'likeProgramming',
    message: 'Do you like programming?',
    default: true
  }
];
inquirer.prompt(questions).then(answers => {
  console.log(`Hello ${answers.name}, you are ${answers.age} years old.`);
  console.log(`It's ${answers.likeProgramming ? 'great' : 'sad'} that you like programming!`);
});