// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [

];

inquirer
.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your current location?',
        name: 'location',
    },
    {
        type: 'input',
        message: 'Tell us about yourself.',
        name: 'bio',
    },
    {
        type: 'input',
        message: 'What is your LinkedIn username?',
        name: 'linkedInUser',
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'gitHubUser',
    },
])
.then((data) => {
    const prompt = {
        title: data.title,
        description: data.description,
        contents: data.contents,
        installation: data.installation,
        usage: data.usage,
        license: data.license,
        contributing: data.contributing,
        test: data.test,
        questions: data.questions
    }

    const html = writeHTML(prompt);

    // writeHTMLFile(html);

});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
