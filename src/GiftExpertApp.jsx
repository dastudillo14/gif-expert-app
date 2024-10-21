import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState([]);


    /**
     * Event for add new category
     * @param {*} newCategory 
     */
    const onAddCategory = (newCategory) => {
        console.log(newCategory)
        const categoryExist = categories.find(cat => cat.toLowerCase() === newCategory.toLowerCase());
        if (!categoryExist) {
            setCategories([newCategory, ...categories,]);
        }
        //otra forma de agg elementos
        //setCategories( cat=> [ ...cat, 'nueva']);
    };

    return (
        <>
            <h1>GitExpertApp</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />

            {
                categories.map((element, i) =>
                    <GifGrid key={element} category={element} />
                )
            }

        </>
    )
}
