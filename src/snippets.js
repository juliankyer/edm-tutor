<div className='splash'>
  <iframe frameBorder="0" 
          height="100%" 
          width="100%" 
          src="https://youtube.com/embed/LzuHNfzdx4I?autoplay=1&controls=0&showinfo=0&autohide=1">
  </iframe>
</div>

incrementVideo(index) {
  let videoIndex = index;
  if (index > this.state.videos[0].length - 1) {
    videoIndex = 0;
  } else {
    videoIndex = index + 1;
  }
  this.setState({videoIndex})
}

decrementVideo(index) {
  let videoIndex = index;
  if (index < 0) {
    videoIndex = 0;
  } else {
    videoIndex = index - 1;
  }
  this.setState({videoIndex})
}