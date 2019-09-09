import React from 'react'

export default (props) => {
 const {_toggleEditColorCard, _updateEditedColor, editKey, editedColor, color, title} = props
  return (
    <div style={{ height: 200, width: 400, margin: 20, border: '1px black solid', display: 'flex', flexDirection: 'row', overflow: 'scroll' }}>
      <div style={{ height: '100%', width: '30%', background: color }} onClick={()=>_toggleEditColorCard(title)}></div>
      <div style={{ marginLeft: 15, display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <h2>Title: {title}</h2>
        {/* {editKey === title?(
          <input 
            onChange={(e)=> _updateEditedColor(e.target.value)} 
            value={editedColor||color} 
          />
        ):( */}
          <h2>Color: {color}</h2>
        {/* )} */}
      </div>
    </div>
  )
}
