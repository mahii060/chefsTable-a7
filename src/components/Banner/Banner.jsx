import chef from '../../assets/chef.jpg'
const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto mt-12'>
            <div className="h-[576px] bg-no-repeat bg-cover bg-center rounded-2xl flex justify-center items-center relative"
                style={{ backgroundImage: `url(${chef})` }}>
                {/* Background overlay */}
                <div className="absolute inset-0 bg-black opacity-60 rounded-2xl"></div>

                {/* Content */}
                <div className="relative space-y-12 z-10">
                    <h1 className="text-4xl font-bold text-gray-200 text-center">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="text-gray-200 text-center">
                        Welcome to Chefs Table, where culinary excellence meets a warm, inviting atmosphere. Enjoy our carefully crafted menu of delicious,
                        <br /> fresh dishes inspired by global flavors. Reserve your table today!
                    </p>
                    <div className="flex justify-center items-center my-4">
                        <button className="bg-violet-600 px-4 py-3 rounded-3xl text-gray-200 hover:bg-transparent hover:border hover:border-violet-700 transition">
                            Explore Now
                        </button>
                        <button className="text-gray-200 px-4 py-3 border border-violet-800 rounded-3xl ml-4 hover:bg-violet-700 transition">
                            Our Feedback
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;