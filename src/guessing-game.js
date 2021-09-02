class GuessingGame {
    constructor() {
        this.min = this.mid = this.max = 0;      
    }

    setRange(min, max) { 
        this.max = max;
        this.min = min;
    }

    guess() {
        return this.mid = Math.round(this.min + (this.max - this.min) / 2);
         
    }

    lower() {
        this.max = this.mid;
        return this.mid = Math.round(this.min + (this.max - this.min) / 2);
    }

    greater() {
        this.min = this.mid;
        this.mid = Math.round(this.min + (this.max - this.min) / 2);
    }
        
}

module.exports = GuessingGame;
