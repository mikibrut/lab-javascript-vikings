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
        let vikNewindex = this.saxonArmy.indexOf(saxRandom)
        this.saxonArmy.splice(vikNewindex,1)
        };
    return result;
  };
  
saxonAttack(){
    let vikRandom = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let saxRandom = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let result = vikRandom.receiveDamage(saxRandom.strength);
    if (vikRandom.health <= 0){
        let saxNewindex = this.vikingArmy.indexOf(vikRandom)
        this.vikingArmy.splice(saxNewindex,1)
        };
    return result;
  };
}

