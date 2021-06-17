export const PLAYER_1 = "1";
export const PLAYER_2 = "2";

export default class FigureData {
    constructor(name, backside, player_side) {
        this.currentName = name;
        this.name = name;
        this.backside = backside;
        this.player_side = player_side;
        this.text_color = "black";
        this.selected = false;
        
        this.updateColor();
    }

    updateColor() {
        this.color = this.player_side == PLAYER_1 ? "#dfe6e9" : "#ffeaa7";
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

    select() { this.selected = true; }
    unselect() { this.selected = false; }

    switchSide() {
        this.player_side = this.player_side == PLAYER_1 ? PLAYER_2 : PLAYER_1;
        this.updateColor();
    }

    makeCopy() {
        return new FigureData(this.name, this.backside, this.player_side);
    }
}