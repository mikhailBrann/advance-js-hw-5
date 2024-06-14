import Character from './Character.js';

export default class Zombie extends Character {
    constructor(name) {
        super(name, "Zombie");
        this.speed = 0.5;
    }
}