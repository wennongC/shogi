import FigureData, {PLAYER_1, PLAYER_2} from './FigureData';

const initialBoard = () => {
    var res = []
    for (let a = 0; a < 9; a++) {
        var row = [];
        for (let b = 0; b < 9; b++) {
            row.push(null);
        }
        res.push(row);
    }

    res[8][0] = new FigureData("香車", "成香", PLAYER_1);
    res[8][1] = new FigureData("桂馬", "成桂", PLAYER_1);
    res[8][2] = new FigureData("銀将", "成銀", PLAYER_1);
    res[8][3] = new FigureData("金将", null, PLAYER_1);
    res[8][4] = new FigureData("王将", null, PLAYER_1);
    res[8][5] = new FigureData("金将", null, PLAYER_1);
    res[8][6] = new FigureData("銀将", "成銀", PLAYER_1);
    res[8][7] = new FigureData("桂馬", "成桂", PLAYER_1);
    res[8][8] = new FigureData("香車", "成香", PLAYER_1);

    res[7][1] = new FigureData("角行", "龍馬", PLAYER_1);
    res[7][7] = new FigureData("飛車", "龍王", PLAYER_1);

    res[0][0] = new FigureData("香車", "成香", PLAYER_2);
    res[0][1] = new FigureData("桂馬", "成桂", PLAYER_2);
    res[0][2] = new FigureData("銀将", "成銀", PLAYER_2);
    res[0][3] = new FigureData("金将", null, PLAYER_2);
    res[0][4] = new FigureData("王将", null, PLAYER_2);
    res[0][5] = new FigureData("金将", null, PLAYER_2);
    res[0][6] = new FigureData("銀将", "成銀", PLAYER_2);
    res[0][7] = new FigureData("桂馬", "成桂", PLAYER_2);
    res[0][8] = new FigureData("香車", "成香", PLAYER_2);

    res[1][1] = new FigureData("飛車", "龍王", PLAYER_2);
    res[1][7] = new FigureData("角行", "龍馬", PLAYER_2);

    for (let i = 0; i < 9; i++) {
        res[6][i] = new FigureData("歩兵", "と金", PLAYER_1);
        res[2][i] = new FigureData("歩兵", "と金", PLAYER_2);
    }

    return res;
}

export default initialBoard;