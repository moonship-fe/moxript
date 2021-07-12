#! /usr/bin/env node
const {Command} = require('commander');
const program = new Command();

program
    .version('0.0.1')
    .description('Create React Project Cli')
    .command('init [name]', 'create new project use template', {executableFile: 'init/index'})
    .command('build', 'build project', {executableFile: 'build/index'})
    .command('config', 'export config', {executableFile: 'config/index'})
    .command('settings', 'validate settings', {executableFile: 'settings/index'});

program.parse(process.argv);