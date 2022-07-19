import React from "react";
import { useFormData } from "../../context";
import formStyles from "../../styles/formStyles.module.scss"

export default function Confirmation({ formStep, nextFormStep }) {
    
    const { setFormValues } = useFormData();

    const handleSubmit = (values) => {
        setFormValues(values);
        nextFormStep();
    };

    return (
        <div className={formStep === 3 ? formStyles.showForm : formStyles.hideForm}>
            <div>
                <h2 className="uppercase text-[0.75em] sm:text-[1.5em] md:text-[2.5em] tracking-[0.1em] py-2">
                    Confirm Team
                </h2>
                <span className="text-gray-700 font-bold">Player One</span>
                <p>First Name: {player1FirstName.value} </p>
                <p>Last Name: {player1LastName.value}</p>
                <p>Student Number: {player1StudentNum.value}</p>
                <p>Email: {player1Email.value}</p>
                <span className="text-gray-700 font-bold">Player Two</span>
                <p>First Name: {player2FirstName.value} </p>
                <p>Last Name: {player2LastName.value}</p>
                <p>Student Number: {player2StudentNum.value}</p>
                <p>Email: {player2Email.value}</p>
                <span className="text-gray-700 font-bold">Team Name: {teamName.value}</span>
            </div>
            <button type="button" onClick={nextFormStep} className="bg-[#200263] hover:bg-[#c6b9fe] py-2 my-4">
                Confirm 
            </button>
        </div>
    )

}