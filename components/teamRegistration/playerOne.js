import React from "react";
import { useFormData } from "../../context";
import formStyles from "../../styles/formStyles.module.scss";

export default function PlayerOne({ formStep, nextFormStep }) {
    
    const { setFormValues } = useFormData();

    const handleSubmit = (values) => {
        const first = document.querySelector('#player1FirstName').value;
        const last = document.querySelector('#player1LastName').value;
        const number = document.querySelector('#player1StudentNum').value;
        const email = document.querySelector('#player1Email').value;

        if (!first || !last || !email){
            alert("All input fields are required.");
        }
        else if (number.length != 8){
            alert("Hmmm that student number should have 8 digits...");
        }
        else {
            setFormValues(values);
            nextFormStep();
        }
        
    };

    return (
        <div className={formStep === 0 ? formStyles.showForm : formStyles.hideForm}>
            <h2 className="uppercase text-[0.75em] sm:text-[1.5em] md:text-[2.5em] tracking-[0.1em] py-2">
            Team Member 1 
            </h2>
            <div className="mt-8 max-w-md">
            <div className="grid grid-cols-1 gap-6">
                <form className="flex flex-col">
                <label className="block" htmlFor="player1FirstName">
                    <span className="text-gray-700 font-bold">First Name</span>
                    <input
                        type="text"
                        className="
                            mt-1
                            block
                            w-full
                            rounded-md
                            border-gray-300
                            shadow-sm
                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                        "
                        placeholder="First name"
                        id="player1FirstName"
                        name="player1FirstName"
                    />
                </label>
                <label className="block" htmlFor="player1LastName">
                    <span className="text-gray-700 font-bold">Last Name</span>
                    <input
                        type="text"
                        className="
                            mt-1
                            block
                            w-full
                            rounded-md
                            border-gray-300
                            shadow-sm
                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                        "
                        placeholder="Last name"
                        id="player1LastName"
                        name="player1LastName"
                    />
                </label>
                <label className="block" htmlFor="player1StudentNum">
                    <span className="text-gray-700 font-bold">Student Number</span>
                    <input
                        type="text"
                        className="
                            mt-1
                            block
                            w-full
                            rounded-md
                            border-gray-300
                            shadow-sm
                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                        "
                        placeholder=""
                        id="player1StudentNum"
                        name="player1StudentNum"
                    />
                </label>
                <label className="block" htmlFor="player1Email">
                    <span className="text-gray-700 font-bold">Queen's Email</span>
                    <input
                    type="email"
                    className="
                        mt-1
                        block
                        w-full
                        rounded-md
                        border-gray-300
                        shadow-sm
                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                    "
                    placeholder=""
                    id="player1Email"
                    name="player1Email"
                    />
                </label>
                <button type="button" onClick={handleSubmit} className="bg-[#200263] hover:bg-[#c6b9fe] py-2 my-4"> 
                    Next
                </button>
                </form>
            </div>
            </div>
        </div>
    )
}