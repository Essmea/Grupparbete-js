
const lyricsOutput = document.getElementById("lyrics");


const artistInput = document.getElementById("artist");
const songInput = document.getElementById("song");

const songErr = document.getElementById("songError");

const button = document.getElementById("myButton");

//Fetch
button.addEventListener("click", async function() {
    const artist = artistInput.value;
    const song = songInput.value;
    const errorMsg = errorMessage()
    
    if(errorMsg === true) {  
    const response = await fetch(`http://ianertson.com:3500/${artist}/${song}`);
    const data = await response.json();

    const value = data[0];

    const lyrics = value.lyrics;
    lyricsOutput.innerText = lyrics;

    button.removeAttribute("disabled");

    } else {
    lyricsOutput.innerText=== "Lyrics not found.";
}
})

//Error message
function errorMessage(){
    let msg = ""

    if (songInput.value === '' || songInput === null) {
        msg = 'Song title is required.'
      } 
    
      if (msg.length > 0) {
        lyricsOutput.innerText = msg  
        return false
      } 

      return true
}
//Keyup function
artistInput.addEventListener("keyup", function(event){
    const value = event.target.value 
  
    if (value.length >=1 && value != " "){
      lyricsOutput.innerText= "";
      button.removeAttribute("disabled")
    } else {
      lyricsOutput.innerText= "Artist is required"
      button.setAttribute("disabled",1) 
    }
  })

