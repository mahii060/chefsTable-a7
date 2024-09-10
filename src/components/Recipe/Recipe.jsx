import PropTypes from 'prop-types';
import { HiClock } from "react-icons/hi2";
import { FaFireFlameCurved } from "react-icons/fa6";

const Recipe = ({ recipe, handleCooking }) => {
    const { recipe_id, recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe;

    return (
        <div className='flex flex-col border-2 rounded-2xl p-6 overflow-auto'>
            <img className='w-96 h-64 object-cover rounded-2xl' src={recipe_image} alt="" />
            <h2 className="text-xl font-semibold my-6">{recipe_name}</h2>
            <p className='text-gray-700 text-lg'>{short_description}</p>
            <hr className='border border-gray-400 my-4' />
            <h3 className='text-xl my-4 font-medium'>Ingredients: {ingredients.length}</h3>
            <ul className='list-disc pl-6'>
                {ingredients.map((ingredient, idx) => <li
                    className='text-lg text-gray-500'
                    key={idx}>{ingredient}</li>)}
            </ul>
            <hr className='border border-gray-400 my-4' />
            <div className="flex justify-between items-center mb-4">
                <div className='flex gap-2 items-center justify-center'>
                    <span><HiClock className='size-7 text-violet-600' /></span>
                    <span className='text-lg text-gray-500'>{preparing_time} minutes</span>
                </div>
                <div className='flex gap-2 items-center justify-center'>
                    <span><FaFireFlameCurved className='size-7 text-red-500' /></span>
                    <span className='text-lg text-gray-500'>{calories} calories</span>
                </div>
            </div>
            <button onClick={() => handleCooking(recipe, recipe_id)} className='bg-violet-700 py-3 px-4 rounded-full text-lg text-gray-100 font-semibold mt-auto'>Want to Cook</button>
        </div>
    );
};
Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleCooking: PropTypes.func.isRequired,
}

export default Recipe;