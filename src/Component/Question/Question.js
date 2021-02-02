import React from 'react'
import moment from 'moment'
import '../../index.css'

function Question(props) {
    return (
        <div className="popUp">
            <p className="title">Question : {props.title}</p>
            <p>Author : {props.owner.display_name} </p>
            <p>Creation Date : {moment.unix(props.creation_date).format('dddd MMMM Do YYYY, h:mm:ss a')} </p>
        </div>
    )
}

export default Question
