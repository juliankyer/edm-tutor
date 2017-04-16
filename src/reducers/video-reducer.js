

const videoReducer = (state={}, action) => {
    switch (action.type) {
      case 'NEXT_VIDEO':
        console.log(action.videoIndex++, state);
        return {...state, videoIndex: action.videoIndex++};
        
        
        
      case 'PREVIOUS_VIDEO':
        return state.videoIndex --;
      default: 
        return state;
    }
}

export default videoReducer;