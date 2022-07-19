import React from "react";
import { useFormData } from "../../context";
import formStyles from "../../styles/formStyles.module.scss";

export default function Team({ formStep, nextFormStep }) {
    
    const { setFormValues } = useFormData();

    const handleSubmit = (values) => {
        const name = document.querySelector('#teamName').value;
        if (!name){
            alert("Team name is required.");
        }
        else {
            setFormValues(values);
            nextFormStep();
        }
    };

    return (
        <div className={formStep === 2 ? formStyles.showForm : formStyles.hideForm}>
            <h2 className="uppercase text-[0.75em] sm:text-[1.5em] md:text-[2.5em] tracking-[0.1em] py-2">
                Team Information
            </h2>
            <div className="mt-8 max-w-md">
                <div className="grid grid-cols-1 gap-6">
                
                    <label className="block" htmlFor="teamName">
                    <span className="text-gray-700 font-bold">Team Name</span>
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
                        required
                        id="teamName"
                        name="teamName"
                    />
                    </label>
                    <button type="button" onClick={handleSubmit} className="bg-[#200263] hover:bg-[#c6b9fe] py-2 my-4"> 
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}