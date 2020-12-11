const fileURL = "https://denisveller.github.io/codenames/nounlist3.txt";
let uArr = [];
fetch(fileURL)
    .then(r => r.text())
    .then(t => assign(t.toString().split('\n')));

class Word {
    constructor(id, file) {
        this.state = 0;
        this.id = id;
        this.noun = this.randNouns(file);
        this.self = document.getElementById(this.id);
        this.getWord();
        this.corner = document.getElementById(this.id+"c");
    }
    getWord() {
        var temp = "<p>" + this.noun + "</p>" + "<p class='upside-down'><i>" + this.noun + "</i></p>" + "<p class='corner' id='"+this.id+"c'>"+this.noun+'</p>';
        this.self.innerHTML = temp;
    }
    cycleState() {
        this.state = this.state + 1;
        if (this.state > 4) {
            this.state = 0;
        }
        switch (this.state) {
            case 0:
                this.self.style.backgroundColor = "wheat";
                this.self.style.color = 'rgba(0,0,0,1)';
                this.self.style.fontSize = '';
                this.corner.style.display = "none";
                break;
            case 1:
                this.self.style.backgroundImage = "url('blue.jpg')";
                this.self.style.color = 'rgba(255,255,255,0)';
                this.self.style.fontSize = '1pt';
                played[0] = played[0] + 1;
                drawcards();
                this.corner.style.display = "block";
                break;
            case 2:
                played[0] = played[0] - 1;
                played[1] = played[1] + 1;
                this.self.style.backgroundImage = "url('red.jpg')";
                drawcards();
                break;
            case 3:
                played[1] = played[1] - 1;
                this.self.style.backgroundImage = "url('neutral.jpeg')";
                drawcards();
                break;
            case 4:
                this.self.style.backgroundColor = "black";
                this.self.style.backgroundImage = "url('')";
                this.self.style.color = 'rgba(255,255,255,0)';
                break;
        }

    }
    randNouns(file) {
        var r = Math.floor(Math.random() * file.length);
        while (uArr.includes(r)){
            r = Math.floor(Math.random()*file.length);
        }
        uArr.push(r);
        var w = file[r];
        return w;
    }

}
var words = [];
var card = [];
var played = [0,0]; //blue, red
function cards(x){
    if (x === 0){
        card = [9,8];
    }
    else{
        card = [8,9];
    }
    btnarr = document.getElementsByClassName("playerBTN");
    btnarr[0].style.display = 'none';
    btnarr[1].style.display = 'none';
    drawcards();
}
function reset(){
    temp = document.getElementsByClassName("cards");
    for (i = 0; i<temp.length; i++){
        temp[i].style.display = 'none';
    }
}
function drawcards(){
    reset();
    var blue = card[0] - played[0];
    var red = card[1] - played[1];
    for (i = 0; i < blue; i++){
        var temp = "b" + i;
        document.getElementById(temp).style.display = 'block';
    }
    for (i = 0; i < red; i++){
        var temp = "r" + i;
        document.getElementById(temp).style.display = 'block';
    }
    document.getElementById('nb').style.display = 'block';
    document.getElementById('nb').innerHTML = blue;
    document.getElementById('nr').style.display = 'block';
    document.getElementById('nr').innerHTML = red;
}
function assign(file) {
    var wordsOnThePage = document.getElementsByClassName("word");
    for (var i = 0; i < wordsOnThePage.length; i++) {
        words.push(new Word(wordsOnThePage[i].id, file))
    }
}
