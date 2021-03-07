import React, { useContext } from 'react'
import { CategoryContext } from '../../App';
import Catagories from '../Catagories/Catagories';

const Home = () => {

    const category= useContext(CategoryContext)
    

    return (
        <div style={{border: '1px solid pink'}}>
            <h1>this is home {category}</h1>
            <Catagories />
        </div>
    )
}

export default Home
