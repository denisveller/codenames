const fileURL = "https://denisveller.github.io/codenames/nounlist.txt";
let uArr = [];
fetch(fileURL)
    .then( r => r.text())
    .then( t => assign(t.toString().split('\n')));

class Word{
    constructor(id, file){
        this.state = 0;
        this.id = id;
        this.noun = this.randNouns(file);
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

     randNouns(file){
        var r = Math.floor(Math.random()*file.length);
        /*while (uArr.includes(r)){
            r = Math.floor(Math.random()*file.length);
        }*/
        uArr.push(r);
        var w = file[r];
        return w;
    }

}
var words = [];
function assign(file){
    console.log(file);

    while (file.length === 1){
        console.log("twiddling thumbs");
    }
    var wordsOnThePage =  document.getElementsByClassName("word");
    for(var i = 0; i<wordsOnThePage.length; i++){
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
