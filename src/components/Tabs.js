import React from 'react'

function Tabs(props) {
    return (
        <div>
            
            <ul>

                {
                    props.tab.map((element,index) => (
                        <li key ={index} onClick = {()=>{ props.setcontent(element.title)}} >{element.title}</li>
                    ))
                }
                </ul>
            
                   </div>
    )
}

export default Tabs