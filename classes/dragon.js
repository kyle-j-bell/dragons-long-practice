//Declares a Dragon class with 'name' and 'color' properties.
class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  //When called on a Dragon object, returns a string.
  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }

  static getDragons(...dragons) {
    //Initializes an empty array.
    let dragonsArray = [];
    //Iterates through any number of arguments, checking if each is an instance of Dragon.
    for (let dragon of dragons) {
      //If True, the 'name' of the Dragon object is pushed to dragonsArray.
      if (dragon instanceof Dragon) {
        dragonsArray.push(dragon.name);
      }
    }
    //Returns array of names.
    return dragonsArray;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
