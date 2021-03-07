import React from 'react'
import CategoryDetails from '../CategoryDetails/CategoryDetails'

const Catagories = (props) => {
    const {count} = props;

    return (
        <div>
            <h4>select your catagories</h4>
            <CategoryDetails count={count}/>
        </div>
    )
}

export default Catagories
