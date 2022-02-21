const BaseBot = require("./baseBot");

class Ndrangheta extends BaseBot {
    constructor() {
        super();
        this.gameHistory = [1,1,1,1,1,1,1,0,0,0,0,1];

        this.behaveiour = -1;
    }


    play() {
        if (this.behaveiour === -1) {
            return 1;
        } else {
            return 0;
        }
    }


    newGame() {
        this.gameHistory=[];
        this.behaveiour = -1;
    }

    newGeneration() {
        super.newGeneration();
        this.gameHistory = [];
        this.behaveiour = -1;
    }


    memorize(number) {

        this.gameHistory.push(number);

        if (this.gameHistory.length >= 10) {

            let cooperativeHistory=this.gameHistory.filter(v => v === 1);

            let badHistory=this.gameHistory.filter(v => v === 0);

            if (badHistory.length > cooperativeHistory.length) {

                return this.behaveiour = 0;

            } else if (badHistory.length < cooperativeHistory.length) {

                return this.behaveiour = 1;

            } else {

                return this.behaveiour = -1;

            }

        }

        

    }

}


module.exports = Ndrangheta