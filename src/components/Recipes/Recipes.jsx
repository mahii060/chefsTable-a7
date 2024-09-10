import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import CookingDetails from "../CookingDetails/CookingDetails";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [cookingList, setCookingList] = useState([]);
    const [currentlyCooking, setCurrentlyCooking] = useState([]);
    const [time, setTime] = useState(0);
    const [calories, setCalories] = useState(0);

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
    };

    const handleCurrentlyCooking = (recipe, preparingTime, foodCalories) => {
        // Adding to currently cooking list
        const newCurrentlyCooking = [...currentlyCooking, recipe];
        setCurrentlyCooking(newCurrentlyCooking)
        toast.success("Successfully added to the currently cooking list")

        // Adding the preparing time
        setTime(time + preparingTime)

        // Adding the calories
        setCalories(calories + foodCalories)

        // Filtering the cooking list
        const newCookingList = cookingList.filter(cookingItem => cookingItem.recipe_id !== recipe.recipe_id);
        setCookingList(newCookingList)
    }

    return (
        <div className="max-w-7xl mx-auto my-20">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">Our Recipes</h1>
                <p className="text-xl text-gray-600 mt-6 font-normal">Explore our collection of delectable recipes, each crafted to delight your taste buds. From savory dishes to sweet treats,<br /> discover easy-to-follow instructions and fresh ingredients for a perfect meal every time.</p>
            </div>
            <div className="md:flex gap-5 recipes-container">
                <div className="md:w-3/5 grid md:grid-cols-2 gap-4">
                    {
                        recipes.map((recipe) => <Recipe
                            key={recipe.recipe_id}
                            recipe={recipe}
                            handleCooking={handleCooking}
                        />)
                    }
                </div>
                <div className="md:w-2/5">
                    <CookingDetails
                        cookingList={cookingList}
                        handleCurrentlyCooking={handleCurrentlyCooking}
                        currentlyCooking={currentlyCooking}
                        time={time}
                        calories={calories}

                    />
                </div>
            </div>
        </div>
    );
};

export default Recipes;