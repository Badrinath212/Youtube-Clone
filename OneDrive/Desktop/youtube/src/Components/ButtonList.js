import React from 'react'
import Button from './Button';

const ButtonList = () => {
    const buttonData=["All","Telugu cinema","Songs","Politics","Cricket","Java","React","Comedy","Cyber Security","IPL20","Namstay React","Python","Take You Farward","TailwindCSS"];
  return (
    <div className=' scroll-smooth h-16'>
        {buttonData.map((a,index)=>(
            <Button key={index} data={a}/>
        ))}
    </div>
  )
}

export default ButtonList;