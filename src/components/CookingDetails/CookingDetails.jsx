import PropTypes from 'prop-types';

const CookingDetails = ({ cookingList }) => {
    return (
        <div className="border rounded-2xl p-4">
            <h2
                className="text-2xl border-b-2 font-semibold text-center pb-4"
            >Want to Cook: {cookingList.length}</h2>
            <div>
                <table className='table-auto w-full border-collapse'>
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
                                className='bg-gray-100 text-gray-500 border-2'>
                                <td className="p-4 m-3">{idx + 1}</td>
                                <td className="p-4 m-3  ">{recipe.recipe_name}</td>
                                <td className="p-4 m-3">{recipe.preparing_time} minutes</td>
                                <td className="p-4 m-3">{recipe.calories} calories</td>
                                <td className="p-4 m-3"><button className='bg-violet-700 px-4 py-3 rounded-3xl text-gray-50'>Preparing</button></td>
                            </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};
CookingDetails.propTypes = {
    cookingList: PropTypes.array.isRequired,
}
export default CookingDetails;