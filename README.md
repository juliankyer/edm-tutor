# EDMTut.r

EDMTut.r is an app designed to teach people about different genres of EDM.
Built with React, Router, Redux, Create React App, CSS3 and HTML5.

### Julian Kyer 
##### Tax Day, 2017

This is the first project I've ever been willing to stay up all night for. Multiple nights in a row. 

The opening video gives me chills, and my ears hurt after being covered without a break in maxed-out headphones. My body wants exercise, sleep, and food, but my heart wants to keep making this project better. The opening page loads, and no matter how tired I am, I can't turn the volume down. I can't stop thinking about how I can make this app better for my users.

Maybe I'm just excited to be back under the electric sky. Maybe I'm just so sleepy that all I can dream about is the feeling of bass hitting me in the chest like a fist. All I know is that I want to share that feeling with you. That feeling of music connecting you to something bigger than yourself. The feeling that no speakers in the world are loud enough.

Below are some notes, mostly for me. The markdown below will be updated as the app develops. But from here up, the message stays the same. 
### I want to help find what makes you move.

## DEVELOPMENT NOTES 

First, I know. Autoplay. It's on purpose.

##### Testing:
* I want to keep testing this app, but 1/5 nights not being an all-nighter === my brain is fucked

* How do you test Router?

* Passing in mock props to test components

* Why doesn't it like the conditional render in Favorites?

* How would you test that the email button opens default email?

##### UI/UX
* Add CSS styles/Redux functionality to loved videos
* Let's make this shit responsive for mobile/tablet
* A logo.
* ...and a better font.

##### Publishing 
* Heroku?
* GH Pages? 
* Firebase?



-PropTypes warning--do more research. Or do what everone on stackoverflow seems
 to be doing, which is wait until PRs are closed and things get updated
 
-Heroku? GH Pages? Firebase?

-Eject? 

--Maybe that helps some of the testing problems???

--Brenna and I talked about publishing on Heroku, but it seems like you need
  a back-end to push to Heroku. When I tried pushing to Heroku, I got a 503 error, 
  which means the site's server isn't available right now. I don't have a server.
  --I can eject and publish to GH Pages
  --I also read something about a PHP file you can add to a static page that will
    make Heroku think there's a back-end
  --It might also be nice to eventually have a back-end that handles data so that 
    my app doesn't depend on mocked data
    --That said, at this point, why? I don't want people to be able to contribute w/o
      their data being validated, and the whole point of this app is that EDM genre 
      data is hard to validate.
    --I don't know that I want users either
    --But I do want a feature that will email users a playlist
      --Based on my research, that requires a back-end
      
--Why does the opening page do that weird block of color before it renders fully?

PS THERE ARE DEVTOOLS IN ATOM???!!!

