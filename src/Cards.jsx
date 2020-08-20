import React from 'react'

function Cards(props){
    return(
        <React.Fragment>
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt="myPic" className="card__img"/>
                    <div className="card__info">
                        <span className="card_category">{props.title} </span>
                        <h3 className="card__title">{props.sname}</h3>
                        <a href={props.link} target="_">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
      </React.Fragment>
      )
}
export default Cards;