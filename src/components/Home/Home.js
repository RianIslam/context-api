import React from 'react'
import Catagories from '../Catagories/Catagories';

const Home = (props) => {

    const {count} = props;
    return (
        <div style={{border: '1px solid pink'}}>
            <h1>this is home {count}</h1>
            <Catagories count={count}/>
        </div>
    )
}

export default Home
