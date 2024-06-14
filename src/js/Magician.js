import Character from './Character.js';

export default class Magician extends Character {
    constructor(name) {
        super(name, "Magician");
        this.weapon = 'magic';
        this.manna = 100;
    }
}