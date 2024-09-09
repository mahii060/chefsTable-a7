import { CgProfile, } from "react-icons/cg";

const Header = () => {
    return (
        <div className="max-w-7xl md:mx-auto px-4 md:px-0 my-5">
            <div className="md:flex  justify-between items-center">
                <h3 className="text-2xl text-violet-700 font-extrabold tracking-wide">Chefs Table</h3>
                <ul className="md:flex gap-8">
                    <li>
                        <a className="text-lg text-gray-600" href="/">Home</a>
                    </li>
                    <li>
                        <a className="text-lg text-gray-600" href="">Recipes</a>
                    </li>
                    <li>
                        <a className="text-lg text-gray-600" href="">About</a>
                    </li>
                    <li>
                        <a className="text-lg text-gray-600" href="">Search</a>
                    </li>
                </ul>
                <div className="flex">
                    <input className="bg-gray-200 border border-violet-600 rounded-full px-2 py-2 mr-4" type="text" name="" id="" placeholder='Search' />
                    <span><CgProfile className="bg-violet-500 p-2 rounded-full  size-10" /></span>
                </div>
            </div>
        </div>
    );
};

export default Header;