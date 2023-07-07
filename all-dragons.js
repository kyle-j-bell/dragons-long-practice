//Imports FriendlyDragon, EvilDragon, and Dragon classes.
const FriendlyDragon = require(`./classes/friendly-dragon`);
const EvilDragon = require(`./classes/evil-dragon`);
const Dragon = require("./classes/dragon");

//Declares a FriendlyDragon object and an EvilDragon object.
const falkor = new FriendlyDragon("Falkor", "white", lifeGoals = ["save Atreyu from the swamp", "save Atreyu from the Nothing", "scare the local bullies into a dumpster"], "Bastian");
const smaug = new EvilDragon("Smaug", "black", lifeGoals = ["take over your mountain kingdom", "steal all your dwarven gold", "burn down your floating village"], "Dwarf King");

//Calls Dragon.getDragons on our new FriendlyDragon and EvilDragon objects and saves the method to a variable.
const allDragons = Dragon.getDragons(falkor, smaug);


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports.falkor = falkor
  module.exports.smaug = smaug
  module.exports.allDragons = allDragons;
} catch {
  module.exports = null;
}
