let playlist=["Song1","Song2","Song3"]
let songArtist=["Conan Gray","Clinton Kane","Zach Hood"]
let songLength=["2:33","3:43","4:06"]
let songImage=[]
let songLink=[]


  
  for(let song of playlist) {
    $(".display").append(song + " ") 
  }
  for(let artist of songArtist){
    $(".display").append(artist + " ")
  }
  for(let length of songLength) {
   $(".display").append(length + " ")
 }
