const fileURL = "";
fetch(fileURL)
    .then( r => r.text())
    .then( t => console.log(t));   
class Word{

    constructor(id){
        this.state = 0;
        this.id = id;
        this.noun = randNouns();
        this.self = document.getElementById(this.id);
    }
    getWord(){
        this.self.innerHTML = this.noun;
    }
    cycleState(){
        this.state = this.state+1;
        if (this.state > 4){
            this.state = 0;
        }
        switch (this.state){
            case 0:
                this.self.style.backgroundColor = "white";
                break;
            case 1:
                this.self.style.backgroundColor = "blue";
                break;
            case 2:
                this.self.style.backgroundColor = "red";
                break;
            case 3:
                this.self.style.backgroundColor = "yellow";
                break;
            case 4:
                this.self.style.backgroundColor = "black";
                break;
        }

    }

}
var wordsOnThePage =  document.getElementsByClassName("word");
var words = [];
for(var i = 0; i<wordsOnThePage.length; i++){
    words.push(new Word(wordsOnThePage[i].id))
    words[i].getWord();
}

function randNouns(){
    const n = 6801;
    var r = Math.ceil(Math.random()*n);

}