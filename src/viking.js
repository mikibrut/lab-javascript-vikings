// Soldier
class Soldier {
    constructor (health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health = this.health - damage;
    }

    battleCry(){
        return "Odin Owns You All!";
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength){
        super (health, strength)
        this.name = name;
    }
    receiveDamage(damage){
        this.health = this.health - damage;
        
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        }
        if (this.health === 0){
            return `${this.name} has died in act of combat`;
        }
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health = this.health - damage;
        
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }
        if (this.health === 0){
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
   constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
   }

   addViking(Viking){
     this.vikingArmy.push(Viking);
   }

   addSaxon(Saxon){
    this.saxonArmy.push(Saxon);
  }

  vikingAttack(){
    let vikRandom = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let saxRandom = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let result = saxRandom.receiveDamage(vikRandom.strength);
    if (saxRandom.health <= 0){
        let newindex = this.saxonArmy.indexOf(saxRandom)
        this.saxonArmy.splice(newindex,1)
    };
    return result;
  };
}

