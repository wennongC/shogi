import CellData, {PLAYER_1, PLAYER_2} from './CellData';

const initialBoard = () => {
    var res = []
    for (let a = 0; a < 9; a++) {
        var row = [];
        for (let b = 0; b < 9; b++) {
            row.push(null);
        }
        res.push(row);
    }

    res[8][0] = new CellData("香車", "成香", PLAYER_1);
    res[8][1] = new CellData("桂馬", "成桂", PLAYER_1);
    res[8][2] = new CellData("銀将", "成銀", PLAYER_1);
    res[8][3] = new CellData("金将", null, PLAYER_1);
    res[8][4] = new CellData("王将", null, PLAYER_1);
    res[8][5] = new CellData("金将", null, PLAYER_1);
    res[8][6] = new CellData("銀将", "成銀", PLAYER_1);
    res[8][7] = new CellData("桂馬", "成桂", PLAYER_1);
    res[8][8] = new CellData("香車", "成香", PLAYER_1);

    res[7][1] = new CellData("角行", "龍馬", PLAYER_1);
    res[7][7] = new CellData("飛車", "龍王", PLAYER_1);

    res[0][0] = new CellData("香車", "成香", PLAYER_2);
    res[0][1] = new CellData("桂馬", "成桂", PLAYER_2);
    res[0][2] = new CellData("銀将", "成銀", PLAYER_2);
    res[0][3] = new CellData("金将", null, PLAYER_2);
    res[0][4] = new CellData("王将", null, PLAYER_2);
    res[0][5] = new CellData("金将", null, PLAYER_2);
    res[0][6] = new CellData("銀将", "成銀", PLAYER_2);
    res[0][7] = new CellData("桂馬", "成桂", PLAYER_2);
    res[0][8] = new CellData("香車", "成香", PLAYER_2);

    res[1][1] = new CellData("飛車", "龍王", PLAYER_2);
    res[1][7] = new CellData("角行", "龍馬", PLAYER_2);

    for (let i = 0; i < 9; i++) {
        res[6][i] = new CellData("歩兵", "と金", PLAYER_1);
        res[2][i] = new CellData("歩兵", "と金", PLAYER_2);
    }

    return res;
}

export default initialBoard;