import React from "react";
import formStyles from "../../styles/formStyles.module.scss";

export default function Awards({ eventData, setEventData, formStep, nextFormStep }) {

    const eventAwards = [];

    const addAward = () => {
        const name = document.querySelector('#awardName').value;
        const value = document.querySelector('#awardValue').value;
        const maxRec = document.querySelector('#maxRecipients').value;

        var award = {
            awardName: name,
            awardValue: value,
            maxRecipients: maxRec
        }

        eventAwards.push(award);

        setEventData({
            ...eventData,
            awards: eventAwards
        })

        document.querySelector('#awardName').value = "";
        document.querySelector('#awardValue').value = "";
        document.querySelector('#maxRecipients').value = "";

    }

    
    return (
        <div className={formStep === 2 ? formStyles.showForm : formStyles.hideForm}>
            <h2 className="uppercase text-[0.75em] sm:text-[1.5em] md:text-[2.5em] tracking-[0.1em] py-2">
                Awards
            </h2>
            <div className="mt-8">
            <div className="grid grid-cols-1 gap-6">
                <form className="flex flex-col" >
                <pre>{JSON.stringify(eventData.awards)}</pre>
                <label className="block" htmlFor="awardName">
                    <span className="text-gray-700 font-bold">Award Name</span>
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
                        placeholder="Award"
                        id="awardName"
                        name="awardName"
                    />
                </label> 
                <label className="block" htmlFor="eventDate">
                    <span className="text-gray-700 font-bold">Award Value</span>
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
                        placeholder="Value"
                        id="awardValue"
                        name="awardValue"
                    />
                </label>
                <label className="block" htmlFor="maxRecipients">
                    <span className="text-gray-700 font-bold">Max Recipients</span>
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
                        placeholder="Recipients"
                        id="maxRecipients"
                        name="maxRecipients"
                    />
                </label> 
                </form>
                <button type="button" onClick={addAward} className="bg-[#200263] hover:bg-[#c6b9fe] py-2 my-4"> 
                    Add Award
                </button>
                <button type="button" onClick={nextFormStep} className="bg-[#200263] hover:bg-[#c6b9fe] py-2 my-4"> 
                    Next
                </button>
            </div>
            </div>
        </div>
    )
}