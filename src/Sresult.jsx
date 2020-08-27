import React from 'react'

const Sresult=(props)=>{
    const im=`https://source.unsplash.com/600x400/?${props.name}`
    return (
        <React.Fragment>
            <div>
                <img src={im} alt="KUCHV"/>
            </div>
        </React.Fragment>
    )   
}
export default Sresult;