import React from 'react'
import './Avatarstyle.css'
import 'tachyons';
import Avatarlist from './Avatarlist'
const Avatar = (props) => {
    const avatarlist = [
        {
            id: 1,
            name: 'Adnan waheed',
            work: 'Front-End Developer'
        },
        {
            id: 2,
            name: 'Imran Khan',
            work: 'Data Scientist'
        },
        {
            id: 3,
            name: 'Taimoor Taimoor',
            work: 'Computer Engineer'
        },
        {
            id: 4,
            name: 'Taimoor Kakakhel',
            work: 'Chemical Engineer'
        }
    ]
 const avatarcard =avatarlist.map((avatarcard ,i) => {
     return <Avatarlist id='name={avatarlist[i].name}'
     name={avatarlist[i].name}
     work={avatarlist[i].work} />
 })

    return (<div className='mainpage'>
        <h1 className= "banner ma2 pa1 grow tc"> Welcome to My avatar world</h1>
        <h3 className= "card">{avatarcard}</h3>
        <h2><button className= "button ma2 grow tc">Subscribe</button></h2>
    </div>)
}
export default Avatar
