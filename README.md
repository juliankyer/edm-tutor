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
set up actions to actually do a thing
bindActionCreators(actions, dispatch)
import * as actions
does each genre category need an action?
add onClick to genre cards

define mutating state

Why not just do something like state.data = action.payload.body.data? Back when we talked about the three core principles of Redux, I mentioned the importance of never mutating the state directly. Writing ...state, data: action.payload.body.data allows us to save a new copy of the state with only the data property updated, essentially granting us "Save As" functionality.

mapStateToProps store -> data -> container
mapDispatchToProps container -> data -> store
