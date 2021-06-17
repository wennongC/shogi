export const PLAYER_1 = "1";
export const PLAYER_2 = "2";

export default class CellData {
    constructor(name, backside, player_side) {
        this.currentName = name;
        this.name = name;
        this.backside = backside;
        this.player_side = player_side;
        this.text_color = "black";
        
        if (player_side == PLAYER_1) {
            this.color = "#dfe6e9";
        } else if (player_side == PLAYER_2) {
            this.color = "#ffeaa7";
        } else {
            throw Error("Constructor Exception of CellData: player_side value is wrong");
        }
    }

    flip() {
        if (this.backside == null) return;
        else {
            if (this.currentName == this.name) {
                this.currentName = this.backside;
                this.text_color = "red";
            } else {
                this.currentName = this.name;
                this.text_color = "black";
            }
        }
    }

    makeCopy() {
        return new CellData(this.name, this.player_side);
    }
}