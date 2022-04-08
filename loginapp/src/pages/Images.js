import React, { useState } from 'react'
import imgA from '../Images/main1.png'
export default function Images() {
    const [image,setImage] = useState(false);
    const HideClickHandler =(e) =>{
        setImage(!image)

    }
  return (
    <div>
        <button onClick={HideClickHandler}>
        {image ?"숨기기" : "보이기" }

        </button>
        {image && <img src={imgA} />}


    </div>
  )
}
