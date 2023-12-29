const PLAYFIELD_COLUMNS = 10;
const PLAYFIELD_ROWS = 20;

const TETROMINO_NAMES = [
    'O',
    'L',
    'J',
    'S',
    'Z',
    'T'
];

const TETROMINOES = {
    'O': [
        [1, 1],
        [1, 1]
    ],
    'L': [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0],
    ]
};

let playfield;
let tetromino;

function convertPositionToIndex(row, column){
    return row * PLAYFIELD_COLUMNS + column;
}

function generatePlayfield(){
    for(let i = 0; i < PLAYFIELD_ROWS * PLAYFIELD_COLUMNS; i++){
        const div = document.createElement('div');
        document.querySelector('.tetris').append(div);
    }

    playfield = new Array(PLAYFIELD_ROWS).fill()
      .map(()=> new Array(PLAYFIELD_COLUMNS).fill(0))
    // console.log(playfield);
}