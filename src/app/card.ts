export class Card {
    set: string;
    card1!: string;
    card2!: string;
    selected: Boolean = false;
    picked: Boolean = false;
    
    constructor(
        set: string,
        card1: string,
        card2: string
    ) {
        this.set = set;
        this.card1 = card1;
        this.card2 = card2;
    }
}
