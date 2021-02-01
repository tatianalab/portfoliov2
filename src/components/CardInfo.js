import React from 'react'
import {useSpring, animated} from 'react-spring'
import { Link } from 'react-router-dom';

function CardInfo(props) {

  const icons = props.tools

  const makeIcons = icons.map(icon => {
    return <img key={icon} src={icon} className="g-card-tool-icon" alt="tool-icon" />
  })

  const style = useSpring({opacity:1, from:{opacity:0}})

  return(
    <animated.div className ="g-card-info" style={style}>
      <p className ="g-card-title">{props.title}</p>
      <p>{makeIcons}</p>
      <p className ="g-card-sub-title">{props.subTitle}</p>
      <a href={props.link} target="_blank" rel="noopener noreferrer" className="g-card-link">Visit app >> </a>
      <p><Link to={props.path} className="g-card-link">View project details</Link></p>
    </animated.div>

    )
}

export default CardInfo;
