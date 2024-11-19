import React from "react";

function Message() {
    return (
        <div className="bg-slate-200 font-[Poppins] min-h-screen px-4 py-10">
            <h1 className="pt-6 text-2xl font-bold text-center text-textBlueColor">
                Please leave your contact details and inquiry below
            </h1>
            <div className="mt-10 max-w-8xl staxl mx-auto md:px-32 ">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    <input 
                        className="bg-gray-300 px-5 w-full h-14 rounded-2xl" 
                        type="text" 
                        placeholder="Name" 
                    />
                    <input 
                        className="bg-gray-300 px-5 w-full h-14 rounded-2xl" 
                        type="text" 
                        placeholder="Email" 
                    />
                    <input 
                        className="bg-gray-300 px-5 w-full h-14 rounded-2xl" 
                        type="text" 
                        placeholder="Phone" 
                    />
                    <input 
                        className="bg-gray-300 px-5 w-full h-14 rounded-2xl" 
                        type="text" 
                        placeholder="Address" 
                    />
                    
                    <textarea 
                        className="bg-gray-300 px-5 py-3 w-full h-52 rounded-2xl col-span-1 md:col-span-2 mt-4" 
                        placeholder="Enter your comments" 
                    />

                    <div className="col-span-1 md:col-span-2 flex items-center gap-2 mt-4">
                        <input type="checkbox" id="terms" className="w-5 h-5" />
                        <label htmlFor="terms" className="text-sm text-textBlueColor">
                            Read Terms and Conditions
                        </label>
                    </div>

                    <button 
                        type="submit" 
                        className="bg-textBlueColor text-white py-3 px-6 rounded-2xl mt-4 w-full md:w-48 col-span-1 md:col-span-2 text-center"
                    >
                        Send a message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Message;
