# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Challenges](#challenges)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./screenshots/mobile-preview.png)

### Links

- Solution URL: https://www.frontendmentor.io/solutions/base-apparel-coming-soon-page-dtif4v84EI/
- Live Site URL: https://pyaethein.github.io/Base-Apparel-Coming-Soon/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SCSS
- Vanilla JavaScript

### Challenges

- background image was a bit tricky

```css
body{

  @include lg-min{
    position: relative;

    &::before{
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 55%;
      height: 100%;
      background-image: url("../images/bg-pattern-desktop.svg");
      background-repeat: no-repeat;
      background-size: cover;
    }
    &::after{
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 45%;
      height: 100%;
      background-image: url("../images/hero-desktop.jpg");
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
}
```

## Author

- Frontend Mentor - [@pyaetheiN](https://www.frontendmentor.io/profile/pyaetheiN)
- Twitter - [@pt_boyyy](https://www.twitter.com/pt_boyyy)