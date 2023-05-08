import React from 'react'
import {useState} from 'react'
import '../styles/settings.scss'


const Settings = ({color,uppertext,lowertext,uploadImage,textSize,textColor}) => {
  const [image,setImage] = useState(null);
  const uploadFile =()=>{
    if(image.name == null)
    {
      return <div>Loading....</div>
    }
    else{

      console.log(image.name);
    }
  }
  return (
    <div className="change">
      <h3 className="text-center">Settings</h3>
      <h4>Change Hoodie Color</h4>
      <div className='hoodie-color'>
        <img onClick={color} src="https://i.ibb.co/TwNBT0r/bluehoodie.png" alt='blue hoodie' id="TwNBT0r/bluehoodie.png"/>
        <img onClick={color} src="https://i.ibb.co/26VC6QP/whitehoodie.png" alt='white hoodie' id="26VC6QP/whitehoodie.png"/>
        <img onClick={color} src= "https://i.ibb.co/VB9pD3c/purplehoodie.png"alt='purple hoodie' id="VB9pD3c/purplehoodie.png"/>
      </div>
      <h4></h4>
      <h4></h4>
      
      <h4>Write Text</h4>
      <input onChange={uppertext} type="text" className="uppertext" placeholder="Upper-text"></input>
      <h4></h4>
      <input onChange={lowertext} type="text" className="lowertext" placeholder="Lower-text"></input>
      <h4></h4>

      <h4>Upload Image</h4>
      <input type="file" className='image' id="image-upload"
      accept="image/*"
      onChange={uploadImage}
      />
      <button className="button" onClick={uploadFile}>Upload</button>
      <br/>
      
      <h4>Text-size</h4>
      <input className="slider" onChange={textSize} type="range" min="12" max="33"/>

      <h4>Text-color</h4>
      <select onChange={textColor}className='text-color'>
        <option>White</option>
        <option>Black</option>
        <option>Red</option>
        <option>Blue</option>
      </select>
      <h4></h4>
      <button className='button'>Save</button>
    </div>
  )
}

export default Settings
