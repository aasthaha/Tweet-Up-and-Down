import React,{useState} from 'react'


const handleDownVote = () => {


}



const Tweet = props => {
    console.log(props)
   return (
        <div className="card">
            <div className="cardbody">
                <h5 className="card-title">{props.tweet.name}</h5>
            <h6 className="card-subtile mb-2 text-muted">{props.tweet.handle}</h6>
            <p className="card-text">{props.tweet.tweet}</p>
            <a href="" className="card-link">
                {props.tweet.phoneNumber}
            </a>
            <a href="" className="card-link">
                {props.tweet.email}
            </a>
            <button onClick={() => props.handleDownVote(props.tweet.id)} className="card-link btn btn-danger">
            <i className="fas fa-arrow-down"></i>
            </button>
            <button
            onClick={() => props.handleUpvote(props.tweet.id)}
             className="card-link btn btn-primary">
                <i className="fas fa-arrow-up"></i>
            </button>
            <span className="card-link badge badge-info">{props.tweet.likes}</span>

            </div>
        </div>
            
        
    )
}
export default Tweet;
