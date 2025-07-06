import React from 'react';
import { Link } from 'react-router-dom';
import Tooltip from '../../components/ToolTip/ToolTip'; // adjust this import if needed

const Home = () => {
return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white relative overflow-hidden bg-black">
        {/* Background radial glow */}
        <div className="absolute inset-0">
            <div className="w-full h-full bg-gradient-radial from-orange-700 via-black to-black opacity-80 blur-3xl" />
        </div>

        <div className="z-10 text-center px-4">
            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-bold mb-8">Learn</h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl max-w-3xl mx-auto font-medium mb-8">
                Reach the pinnacle of your coding potential with FireCode. Elevate your skills, conquer challenges, and excel in technical interviews, propelling your programming journey to new heights.
            </p>

            {/* Tooltip on Get Started */}
            <Tooltip >
                <Link to="/signup">
                    <button className="bg-black border-2 border-white text-white font-semibold px-6 py-2 rounded hover:bg-gradient-to-r from-green-500 to-green-600 hover:text-black transition hover:drop-shadow-[0_0_10px_orange] cursor-pointer">
                        Get Started
                    </button>
                </Link>
            </Tooltip>
        </div>
    </div>
);
};

export default Home;
