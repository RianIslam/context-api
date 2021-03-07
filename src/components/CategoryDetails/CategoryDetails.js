import React, { useContext } from 'react'
import { CategoryContext } from '../../App';



const CategoryDetails = (props) => {

    const {name} = props.product;
    const category = useContext(CategoryContext)
    
    return (
        <div>
            <h5>This is categoryDetails </h5>
            <h6>Selected Product : {name}</h6>
        </div>
    )
}

export default CategoryDetails
