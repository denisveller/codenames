const fileURL = "https://denisveller.github.io/codenames/nounlist.txt";
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
    }
    getWord() {
        var temp = "<p>" + this.noun + "</p>" + "<p class='upside-down'>" + this.noun + "</p>";
        this.self.innerHTML = temp;
    }
    cycleState() {
        this.state = this.state + 1;
        if (this.state > 4) {
            this.state = 0;
        }
        switch (this.state) {
            case 0:
                this.self.style.backgroundColor = "white";
                this.self.style.color = 'rgba(0,0,0,1)';
                break;
            case 1:
                this.self.style.backgroundImage = "url('blue.jpg')";
                this.self.style.color = 'rgba(0,0,0,0)';
                break;
            case 2:
                this.self.style.backgroundImage = "url('red.jpg')";
                break;
            case 3:
                this.self.style.backgroundImage = "url('neutral.jpeg')";
                break;
            case 4:
                this.self.style.backgroundColor = "black";
                this.self.style.backgroundImage = "url('')";
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
function assign(file) {
    var wordsOnThePage = document.getElementsByClassName("word");
    for (var i = 0; i < wordsOnThePage.length; i++) {
        words.push(new Word(wordsOnThePage[i].id, file))
        words[i].getWord();
    }

    // function randNouns(){
    //     var r = Math.floor(Math.random()*file.length);
    //     /*while (uArr.includes(r)){
    //         r = Math.floor(Math.random()*file.length);
    //     }*/
    //     uArr.push(r);
    //     var w = file[r];
    //     return w;
    // }
}
