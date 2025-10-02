import chalk from "chalk";

console.log(chalk.blue('Hello world!'));

console.log(chalk.blue.bgRed.bold('Hello world!'));

console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

console.log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

console.log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
console.log(chalk.hex('#DEADED').bold('Bold gray!'));