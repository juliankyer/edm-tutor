In Video.js src, just change src to loop through id's (add into playlist objects), and do some yung backticks to just insert the id there instead of jumping through all kinds of hoops to split a url up. Use Home.js 's src= to get that lit autoplay in there.

<iframe frameBorder="0" 
        src=`https://youtube.com/embed/${IDfromData}?autoplay=1&controls=0&showinfo=0&autohide=1`>
        {...htmlTags}
</iframe>


state/store = {
  videoIndex,
  genre from genres.js,
  
  favorites: [],
}

actions:
  -clicked card
  -clicked favorite 
  
destructure genre.js coming into video 