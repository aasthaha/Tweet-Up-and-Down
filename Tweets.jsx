import React,{useState} from 'react'
import Tweet from "./Tweet"

const Tweets = () => {

const [tweets,setTweets] = useState([
    {
        id: 1,
        name: "johnson john",
        handle: "@jbala",
        tweet: " hello",
        phoneNumber: "11223344",
        email: "jjson@gmail.com",
        likes: 0
    },
    {
        id: 2,
        name: "peter parker",
        handle: "@ppapa",
        tweet: " hello",
        phoneNumber: "11223344",
        email: "pp@gmail.com",
        likes: 0
    },
    {
        id: 3,
        name: "mark joe",
        handle: "@jmark",
        tweet: " hello",
        phoneNumber: "11223344",
        email: "jmark@gmail.com",
        likes: 0
    },
    {
        id: 4,
        name: "jane ada",
        handle: "@jada",
        tweet: " hello",
        phoneNumber: "11223344",
        email: "jada@gmail.com",
        likes: 0
    }
]);
const handleUpvote =  (id) => {
    const newState = [...tweets];
    const index = tweets.findIndex(el => el.id === id)
    newState[index].likes += 1;
    setTweets(newState);
}
const handleDownvote = (id) => {
    const newState = [...tweets];
    const index = tweets.findIndex(el => el.id === id)
    if (newState[index].likes > 0)
    {
    newState[index].likes -= 1;
    setTweets(newState);
    }
}


const renderTweets = () => {
    return tweets.map(el => {
        return <Tweet 
        handleDownVote={handleDownvote}
        handleUpvote={handleUpvote} tweet={el}/>
    })
}


    return (
        <div>
            {renderTweets()}
        </div>
    )
}
export default Tweets;
