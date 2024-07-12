import inquirer from 'inquirer';
async function main() {
    const answers = await inquirer.prompt([
        {
            name: "sentence",
            type: "input",
            message: "Enter the sentence to count the words:"
        }
    ]);
    const words = answers.sentence.trim().split(/\s+/); // Using a regex to handle multiple spaces
    console.log(words);
    console.log(`Your sentence word count is ${words.length}`);
}
main().catch((error) => {
    console.error("An error occurred:", error);
});
