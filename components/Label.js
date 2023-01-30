import React from 'react'

function Label({classes,text,color,size}) {
  return (
    <label className={classes} style={{color:color, fontSize:size}}>{text}</label>
  )
}

export default Label