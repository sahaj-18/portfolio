import html from '../assets/svg/skills/html.svg'
import css from '../assets/svg/skills/css.svg'
import angular from '../assets/svg/skills/angular.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import react from '../assets/svg/skills/react.svg'
import typescript from '../assets/svg/skills/typescript.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import git from '../assets/svg/skills/git.svg'
import nginx from '../assets/svg/skills/nginx.svg'
import figma from '../assets/svg/skills/figma.svg'
import nodejs from '../assets/svg/skills/nodejs.svg'
import expressjs from '../assets/svg/skills/express.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'css':
            return css;
        case 'angular':
            return angular;
        case 'node js':
            return nodejs;
        case 'javascript':
            return javascript;
        case 'express js':
            return expressjs;
        case 'react':
            return react;
        case 'bootstrap':
            return bootstrap;
        case 'mongodb':
            return mongoDB;
        case 'git':
            return git;
        case 'nginx':
            return nginx;
        case 'figma':
            return figma;
        default:
            break;
    }
}
