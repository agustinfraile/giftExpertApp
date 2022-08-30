import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

const GiftExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => setCategories([newCategory, ...categories]); //forma recomendada
    // const onAddCategory = () => setCategories( cate => [...cate, 'Peru']); //otra manera
    
    return (
        <> 
            {/* titulo */}
            <h1>GiftExpertApp</h1>
        
            {/* input */}
            <AddCategory
                // setCategories = {setCategories} 
                onNewCategory = { (value) => onAddCategory(value) }
            />

            {/* listado de gifs */}
                {/* gif item */}
                <ol>
                    {categories.map( category => 
                        <li key={category}>
                            {category}
                        </li>
                    )}
                </ol>
        </>
    )
}

export default GiftExpertApp