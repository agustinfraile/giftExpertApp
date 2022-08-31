import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

const GiftExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return; 
        setCategories([newCategory, ...categories]); //forma recomendada

    }; 
    
    return (
        <>
            <h1>GiftExpertApp</h1>

            <AddCategory
                onNewCategory = { (value) => onAddCategory(value) }
            />
                
            {
                categories.map( categories=> 
                    (
                        <GifGrid key={categories} categor={categories}/>
                    )
                )
            }
                
        </>
    )
}

export default GiftExpertApp