import {prompt, QuestionCollection} from 'inquirer';
// import {UserOptions} from './interface';

const questions: QuestionCollection<any> = [
    {
        name: 'packageManager',
        message: 'Choose your package manager',
        type: 'list',
        choices: ['npm', 'yarn'],
    },
    {
        name: 'packageName',
        message: 'Enter your package name, this will be set to package.json',
        type: 'input',
        validate: (value: string) => !!value.length,
    },
    {
        name: 'appTitle',
        message: 'Enter your application title in browser tab',
        type: 'input',
        validate: (value: string) => !!value.length,
    },
    {
        name: 'gerrit',
        message: 'Are you developing on Gerrit which creates a Change-Id line in your commit',
        type: 'confirm',
    },
    {
        name: 'devServerPort',
        message: 'Choose a port for dev server',
        type: 'number',
        default: 8788,
        validate: (value: number) => !!value,
    },
];

export default () => {
    prompt(questions)
};