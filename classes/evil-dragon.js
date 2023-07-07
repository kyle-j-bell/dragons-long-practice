const Dragon = require(`./dragon`);

class EvilDragon extends Dragon {
    constructor(name, color, evilDoings = [], nemesis) {
        super(name, color);
        this.evilDoings = evilDoings;
        this.nemesis = nemesis;
    }
    dontInviteThemOverForDinner() {
        for (let i = 0; i < this.evilDoings.length; i++) {
            let evilDoing = this.evilDoings[i];
            console.log(`${this.name} will ${evilDoing}`)
        }
    }
    burnsNemesis() {
        return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`
    }
}

module.exports = EvilDragon;
