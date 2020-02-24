import React from 'react'

const Avatarlist = (props) => {
    return (

<div className= "AvatarClass ma4 bg-light-green dib pa3 tc">
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt='' />
        <h3 className=''>{props.name}</h3>
        <p>{props.work}</p>
</div>
        )   
}
export default Avatarlist 
// ma4 in line 5 means margin=4 and bg-light-green means background color is light green
//dib means display-inline-block
//tc means text align :centred