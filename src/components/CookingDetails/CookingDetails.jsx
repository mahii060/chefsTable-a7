import PropTypes from 'prop-types';

const CookingDetails = ({ cookingList, handleCurrentlyCooking, currentlyCooking, time, calories }) => {
    return (
        <div className="border rounded-2xl p-4">
            <h2
                className="text-2xl border-b-2 font-semibold text-center pb-4"
            >Want to Cook: {cookingList.length}</h2>
            <div className='overflow-x-auto md:overflow-x-hidden'>
                <table className='table-auto min-w-full border-collapse'>
                    <thead>
                        <tr>
                            <th className="py-5">No.</th>
                            <th className="py-5">Name</th>
                            <th className="py-5">Time</th>
                            <th className="py-5">Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cookingList.map((recipe, idx) => <tr
                                key={idx}
                                className='bg-gray-100 text-gray-500 '>
                                <td className="p-4 m-3">{idx + 1}</td>
                                <td className="p-4 m-3  ">{recipe.recipe_name}</td>
                                <td className="p-4 m-3">{recipe.preparing_time} minutes</td>
                                <td className="p-4 m-3">{recipe.calories} calories</td>
                                <td className="p-4 m-3">
                                    <button className='bg-violet-700 px-4 py-3 
                                    rounded-3xl text-gray-50'
                                        onClick={() => handleCurrentlyCooking(recipe,
                                            recipe.preparing_time, recipe.calories)}
                                    >Preparing</button>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div className='my-5 overflow-x-auto md:overflow-x-hidden'>
                <h2
                    className="text-2xl border-b-2 font-semibold text-center pb-4"
                >Currently Cooking: {currentlyCooking.length}</h2>
                <table className='table-auto w-full border-collapse'>
                    <thead>
                        <tr>
                            <th className="py-5">No.</th>
                            <th className="py-5">Name</th>
                            <th className="py-5">Preparing Time</th>
                            <th className="py-5">Calories</th>
                        </tr>
                    </thead>
                    <tbody className='border'>
                        {
                            currentlyCooking.map((recipe, idx) => <tr
                                key={idx}
                                className='bg-gray-100 text-gray-500 border'>
                                <td className="p-4 m-3 border">{idx + 1}</td>
                                <td className="p-4 m-3 border">{recipe.recipe_name}</td>
                                <td className="p-4 m-3 border">{recipe.preparing_time} minutes</td>
                                <td className="p-4 m-3 border">{recipe.calories} calories</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className='mt-4 flex justify-end '>
                    <div>
                        <h3 className="text-gray-500 text-2xl font-semibold"
                        >Total Time= {time} minutes</h3>
                        <h3 className="text-gray-500 text-2xl font-semibold"
                        >Total Calories= {calories}</h3>
                    </div>
                </div>
            </div>
        </div >
    );
};
CookingDetails.propTypes = {
    cookingList: PropTypes.array.isRequired,
    currentlyCooking: PropTypes.array.isRequired,
    handleCurrentlyCooking: PropTypes.func.isRequired,
    time: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
}
export default CookingDetails;