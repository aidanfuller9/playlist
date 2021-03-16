let playlist=["Song1","Song2","Song3"]
let songArtists=["Conan Gray","Clinton Kane","Zach Hood"]
let songLengths=["2:33","3:43","4:06"]
let songImages=[]
let songLinks=[]


  
  for(let song of playlist) {
    $(".display").append(song + " ") 
  }
  for(let artist of songArtists){
    $(".display").append(artist + " ")
  }
  for(let length of songLengths) {
   $(".display").append(length + " ")
 }

$("button").click(function(){
  let songName = $(".name").val()
  let songArtist = $(".artist").val()
  let songImage = $(".image").val()
  let songLength = $(".length").val()
  let songLink = $(".link").val()
  
  playlist.push(songName)
  songArtists.push(songArtist)
  songLengths.push(songImage)
  songImages.push(songLength)
  songLinks.push(songLink)
  
 
})

// Day 3 

// Goal: Add song information to your list using .push()
// 1. Create a working click handler that retrieves user input [x]
// 2. push new items to your song arrays, 
// 3. displays the result to the screen

// $(".name").val() 