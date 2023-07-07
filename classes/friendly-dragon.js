//Imports Dragon class.
const Dragon = require(`./dragon`);

//Declares a FriendlyDragon class extending Dragon.
class FriendlyDragon extends Dragon {
    //Inherits `name` and `color` from Dragon, declares an empty Array 'lifeGoals', and initializes 'friend'.
    constructor(name, color, lifeGoals = [], friend) {
        super(name, color);
        this.lifeGoals = lifeGoals;
        this.friend = friend;
    }
    //Iterates through each element of lifeGoals and logs it to the console.
    hasLifeGoals() {
        for (let i = 0; i < this.lifeGoals.length; i++) {
            let lifeGoal = this.lifeGoals[i];
            console.log(`${this.name} likes to ${lifeGoal}`);
        }
    }
    //Returns a string containing the FriendlyDragon object's `name` and their `friend`.
    helpsPeople() {
        return `${this.name} helps their friend ${this.friend}`;
    }
}

module.exports = FriendlyDragon;
