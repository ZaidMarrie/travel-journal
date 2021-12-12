# Quizzical Trivia App (React)

## Overview

A travel journal app created with React using the create-react-app(CRA) npm command.

### The challenge
- Create a card component for each card
- Pass props to each component
- Style and polish the app as in the Figma design

### Screenshot

![Start Screen](https://user-images.githubusercontent.com/84665360/145670761-bebd9130-ea1f-4dea-9f38-e4fd3aed1c64.png)
![Quiz Screen](https://user-images.githubusercontent.com/84665360/145670794-dc8b761f-29e8-4d70-b779-6ddc988cd5b6.png)



### Links

- [Live App Demo](https://zaidmarrie.github.io/travel-journal/)
- [Source Code](https://github.com/ZaidMarrie/travel-journal)

## My Process

### Built with

- HTML
- CSS
- JavaScript
- React (create-react-app)

### What I learned

I learned and practiced the following concepts:

- React Props
- React State
- Conditional Rendering

**A snippet of the code I used**
```javascript
import React from 'react'
import pindropIcon from './img/pindrop.png'

function Card(props) {
    console.log(props)
    return (
        <div className='card flex'>
            <div className='card__img'>
                <img src={props.item.imageUrl} alt={props.item.title} />
            </div>
            <div className='card__content'>
                <div className='location flex'>
                    <img src={pindropIcon} alt='pindrop icon' className='pindrop-icon' />
                    <p className='location__country'>{props.item.location}</p>
                    <a href={props.item.googleMapsUrl} className='location__url'>View on Google Maps</a>
                </div>
                <h2 className='card__title'>{props.item.title}</h2>
                <p className='card__date'>{props.item.startDate} - {props.item.endDate}</p>
                <p className='card__desc'>{props.item.description}</p>
            </div>
        </div>
    )
}

export default Card
```

## Author

- Github - [@ZaidMarrie](https://github.com/ZaidMarrie)
- Twitter - [@LeKoels27](https://twitter.com/LeKoels27)

## Contributing
Pull requests are very welcome and you may freely fork this repository.

## Supporting Scrimba

Since 2017, scrimba has created over 20 free courses and continue's launching free courses. If you perhaps are interested in learning or maybe just would like to up your skills try out their courses at [scrimba.com](www.scrimba.com).

- [Become a professional React developer](https://scrimba.com/course/greact)
- [The Responsive Web Design Bootcamp](https://scrimba.com/course/gresponsive)
- [The Ultimate JavaScript Bootcamp](https://scrimba.com/course/gjavascript)  

Happy Coding!

## License
[MIT](https://choosealicense.com/licenses/mit/)
