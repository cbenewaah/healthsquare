import React from "react";

function Card({ icon, title, description, buttonText }) {
    return (
        <div className="border border-green-400 p-6 rounded-none shadow-lg relative">
            <div className=" mb-10 ">
                <div className="w-20 h-20 border-2 border-green-400 rounded-full flex justify-center items-center mx-auto mb-6 ">
                    {icon}
                </div>
            </div>
            <div className="text-left">
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <p className="text-gray-600 mb-6">{description}</p>
                <button className=" bg-green-400 text-white px-6 py-2 rounded-none hover:bg-green-800 transition duration-300 w-full"><a href="/services" class="button w-button">Learn More</a></button>
            </div>
        </div>

    );
}

export default Card;
