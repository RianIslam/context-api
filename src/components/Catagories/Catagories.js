import React, { useContext, useEffect, useState } from 'react'
import { CategoryContext } from '../../App'
import CategoryDetails from '../CategoryDetails/CategoryDetails'

const allProducts =[{name:'Lenovo',category:'laptop'},{name:'Asus',category:'laptop'},{name:'Hp',category:'laptop'},
{name:'apple',category:'mobile'},{name:'Nokia',category:'mobile'},{name:'Samsung',category:'mobile'},
{name:'Nikkon',category:'Camra'},{name:'Canon',category:'Camra'},{name:'Sony',category:'Camra'}

]



const Catagories = () => {
    
const category = useContext(CategoryContext)
const [products,setproducts]  = useState([])

useEffect(() => {
    const matchProducts = allProducts.filter(pd => pd.category === category && category.toLowerCase())
    setproducts(matchProducts)
},[category])

    return (
        <div>
            <h4>select your catagories :{category}</h4>
            <h2>
                {
                    products.map(pd => <categoryDetails product={pd}/>)
                }
            </h2>
            <CategoryDetails />
        </div>
    )
}

export default Catagories
