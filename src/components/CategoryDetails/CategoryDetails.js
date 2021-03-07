import React, { useContext } from 'react'
import { CategoryContext } from '../../App';



const CategoryDetails = () => {

    const category = useContext(CategoryContext)
    
    return (
        <div>
            <h5>This is categoryDetails </h5>
            <h6>Selected Category : {category}</h6>
        </div>
    )
}

export default CategoryDetails
