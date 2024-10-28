function play() {

    // hide the home scrren
    const homeScreen = document.getElementById("home-screen")

    homeScreen.classList.add('hidden')

    // show the playGround

    const playGround = document.getElementById('play-ground ')

    playGround.classList.remove('hidden')

    continueGame()


}


function  getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';

    const alphabets = alphabetString.split("")

    console.log(alphabets)

    // get a random index between 0 - 25

    const randomNumber = Math.random()*25;

    const index = Math.round(randomNumber)


    const alphabet = alphabets[index]



    return alphabet;


}


function setBackgroundColorById(elementId){

    const element  = document.getElementById(elementId);
    element.classList.add('bg-orange-400')

}

function removeBackgroundColorById(elementId){

    const element = document.getElementById(elementId)

    element.classList.remove("bg-orange-400");
}

function continueGame(){

    const alphabet = getARandomAlphabet()
    console.log(alphabet)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerHTML = alphabet;
    // set background color 
    setBackgroundColorById(alphabet)

}

