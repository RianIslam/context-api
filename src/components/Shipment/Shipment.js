import React, { useContext } from 'react'
import { CategoryContext } from '../../App'

const Shipment = () => {
    const [category,setCategory] = useContext(CategoryContext)
    return (
        <div>
            <h1>This is the shipment</h1>
            <button onClick={() =>setCategory(category+1)}>Increment</button>
        </div>
    )
}

export default Shipment
