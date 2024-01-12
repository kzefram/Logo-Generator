# Logo-Generator

## Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Lincense](#license)
- [Contribution](#contribution)
- [Testing](#testing)

## Description

This application will ask a series of question and from those, it will create/generate a logo. The size will be 300 x 200 and saved as a .svg type file.

User Story

- AS a freelance web developer
- I WANT to generate a simple logo for my projects
- SO THAT I don't have to pay a graphic designer

Acceptance Criteria

- GIVEN a command-line application that accepts user input
- WHEN I am prompted for text
- THEN I can enter up to three characters
- WHEN I am prompted for the text color
- THEN I can enter a color keyword (OR a hexadecimal number)
- WHEN I am prompted for a shape
- THEN I am presented with a list of shapes to choose from: circle, triangle, and square
- WHEN I am prompted for the shape's color
- THEN I can enter a color keyword (OR a hexadecimal number)
![Picture of app finished running](runningapp.png)
- WHEN I have entered input for all the prompts
- THEN an SVG file is created named `logo.svg`
- AND the output text "Generated logo.svg" is printed in the command line
- WHEN I open the `logo.svg` file in a browser
- THEN I am shown a 300x200 pixel image that matches the criteria I entered

-Other Pictures
![The code for the test](testcodepic.png)
![After the text was executed](testrunning.png)

## Installation

You will need to install node modules.
- type <npm install> at the command line.

## Usage

The usage of this application is help developers make logos for their clients. It also demonstrates my abillity to do the coding and testing. I used iquirer, node, Jest and JSON.
- to start the app, at the command line, type <node index.js>
- Then answer the questions

## Credits

Karen Bourgeois https://github.com/kzefram

## License

MIT https://github.com/kzefram/Logo-Generator?tab=MIT-1-ov-file

## Contribution

N/A

## Testing

I have written some test with Jest. 