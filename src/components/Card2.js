import React from "react";

function Card2({ picture, description, job, logo, comment }) {
    return (
        <div className="border border-green-400 p-6 shadow-lg max-w-ful space-x-2">
            <div className="">
                <div className="flex flex-row justify-between">
                    <div className="w-20 h-20 rounded-full !important p-1">{picture}</div>
                    <div className="flex flex-col">
                        <h3 className="text-lg font-semibold">{description}</h3>
                        <p className="text-gray-500 text-sm">{job}</p>
                    </div>
                    <div className="ml-auto" >{logo}</div>

                </div>
            </div>
            <p className="text-left py-1 text-gray-500">{comment}</p>

        </div>

    );
}

export default Card2;
