import Character from './Character.js';

export default class Daemon extends Character {
    constructor(name) {
        super(name, "Daemon");
        this.summoningFamiliars = true;
    }
}