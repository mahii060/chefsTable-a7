import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import CookingDetails from "../CookingDetails/CookingDetails";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [cookingList, setCookingList] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);

    const handleCooking = (recipe, id) => {
        const newCooking = [...cookingList, recipe];
        const isExist = cookingList.find(recipe => recipe.recipe_id === id)
        if (!isExist) {
            setCookingList(newCooking)
            toast.success('Successfully added to the cooking list!')
        }
        else {
            toast.error("This recipe is already the in list!")
        }
    }

    return (
        <div className="max-w-7xl mx-auto my-20">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">Our Recipes</h1>
                <p className="text-xl text-gray-600 mt-6 font-normal">Explore our collection of delectable recipes, each crafted to delight your taste buds. From savory dishes to sweet treats,<br /> discover easy-to-follow instructions and fresh ingredients for a perfect meal every time.</p>
            </div>
            <div className="flex gap-5 recipes-container">
                <div className="w-3/5 grid grid-cols-2 gap-4">
                    {
                        recipes.map((recipe) => <Recipe
                            key={recipe.recipe_id}
                            recipe={recipe}
                            handleCooking={handleCooking}
                        />)
                    }
                </div>
                <div className="w-2/5">
                    <CookingDetails cookingList={cookingList} />
                </div>
            </div>
        </div>
    );
};

export default Recipes;