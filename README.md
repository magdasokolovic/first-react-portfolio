# my first portfolio project built with react

- - -

### Dependencies I used: 
- Dynamic Routing: [React Router Dom](https://reactrouter.com/web/guides/quick-start)
- Animating elements: [gsap](https://greensock.com/gsap/)
- Animating elements: [framer motion](https://www.framer.com/motion/)
- CSS styling: [sass](https://sass-lang.com/)
- Animations: [lottieFiles](https://lottiefiles.com/)
- Icons: [FontAwesome](https://fontawesome.com/)

- - -

### Youtube tutorials I used: 
[Create lovely React 3D Animated Card | Beginner REACT.JS Animation with framer-motion](https://www.youtube.com/watch?v=cPKiilXlHAQ&list=LL&index=9)
[Code an Animated Menu using React and GSAP Tutorial](https://www.youtube.com/watch?v=K3eG8DtBjQ4&list=PLgcPxVODYXGJ4hDL6VYcYL2_exUd_gkhK)
[How To Code Animations in React.js with Greensock (GSAP) | Hero Section |](https://www.youtube.com/watch?v=H_VnkjiodO4list=UUqrxiLP9RHz2GxDJaZuTRBw&index=51)

***

### Animated Menu comments:
- good idea to disable menu button after clicking on it for ~1.2seconds and then enable it again (better user experience)
- z-indexes don't work unless you define a position
- in order for Header element to have an access to props.history we can use withRouter
***

### Hero Section comments: 
##### gsap: 
- in terms of easing use Power3
- TimelineLite allows to add the timeline to animations. (first come the photos, only then the text)
- 'to' - defines final state, 'from' defines initial state
- TweenMax is for animating just 1 item (in my case the whole hero section, with TweenMax we make the section visible)

***

### Things I learned while working on the project: 
- use ::selection CSS selector for customizing text highlight color
- use CSS ::placeholder Selector to give a styling to a placeholder text

> Add punctuation to your alt text

   >> Eric Bailey reminds us that we should always finish our alt text with punctuation, such as a full stop/period. This makes the screen reader voice pause slightly before announcing the next words in the sequence, which feels a lot more natural. Example code:

```html
    <img src="puppy.jpg" alt="A golden retriever puppy wearing a tiny raincoat." />
```

