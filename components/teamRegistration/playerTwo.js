import React from "react";
import { useFormData } from "../../context";
import formStyles from "../../styles/formStyles.module.scss";

export default function PlayerTwo({ formStep, nextFormStep }) {
    
    const { setFormValues } = useFormData();

    const handleSubmit = (values) => {
        const first = document.querySelector('#player2FirstName').value;
        const last = document.querySelector('#player2LastName').value;
        const number = document.querySelector('#player2StudentNum').value;
        const email = document.querySelector('#player2Email').value;

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
        <div className={formStep === 1 ? formStyles.showForm : formStyles.hideForm}>
            <h2 className="uppercase text-[0.75em] sm:text-[1.5em] md:text-[2.5em] tracking-[0.1em] py-2">
            Team Member 2
            </h2>
            <div className="mt-8 max-w-md">
            <div className="grid grid-cols-1 gap-6">
                <form className="flex flex-col">
                <label className="block" htmlFor="player2FirstName">
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
                        id="player2FirstName"
                        name="player2FirstName"
                        required
                    />
                </label>
                <label className="block" htmlFor="player2LastName">
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
                        id="player2LastName"
                        name="player2LastName"
                    />
                </label>
                <label className="block" htmlFor="player2StudentNum">
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
                        id="player2StudentNum"
                        name="player2StudentNum"
                    />
                </label>
                <label className="block" htmlFor="player2Email">
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
                    id="player2Email"
                    name="player2Email"
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