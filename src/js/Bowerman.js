import Character from './Character.js';

export default class Bowerman extends Character {
    constructor(name) {
        super(name, "Bowman");
        this.weapon = 'bow';
        this.concentration = 100;
    }
}