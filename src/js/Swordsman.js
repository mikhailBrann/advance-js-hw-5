import Character from './Character.js';

export default class Swordsman extends Character {
    constructor(name) {
        super(name, "Swordsman");
        this.weapon = 'sword';
        this.rage = 100;
    }
}