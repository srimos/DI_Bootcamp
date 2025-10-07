import chalk from "chalk";

export function colourfulMessage (words) {
    console.log(chalk.bgRed.bold(words));
}