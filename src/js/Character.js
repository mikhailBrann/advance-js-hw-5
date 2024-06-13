export const types = {
    "Bowman": {
        "attack": 25,
        "defence": 25
    },
    "Swordsman": {
        "attack": 40,
        "defence": 10
    },
    "Magician": {
        "attack": 10,
        "defence": 40
    },
    "Undead": {
        "attack": 25,
        "defence": 25
    },
    "Zombie": {
        "attack": 40,
        "defence": 10
    },
    "Daemon": {
        "attack": 10,
        "defence": 40
    }
};

export default class Character {
    constructor(name, type) {
        if(typeof name !== "string" || (name.length < 2 || name.length > 10)) {
            throw new Error("Сharacter name must be a string between 2 and 10 characters long");
        }

        if(typeof type !== "string" || !(type in types)) {
            throw new Error("Сharacter type incorrect");
        }


        this.name = name;
        this.type = type;
        this.attack = types[this.type].attack;
        this.defence = types[this.type].defence;
        this.health = 100;
        this.level = 1;
    }

    levelUp() {
        if(this.health > 0) {
            this.level += 1;
            this.attack += (this.attack / 100 * 20);
            this.defence += (this.defence / 100 * 20);
        } else {
            throw new Error("Сharacter is dead"); 
        }
    }

    damage(points) {
        if(this.health > 0) {
            this.health = points < this.health ? this.health - points : 0; 
        } else {
            throw new Error("Сharacter is dead");
        }
    }
}