import React from "react";
import formStyles from "../../styles/formStyles.module.scss";

export default function BasicInfo({ eventData, setEventData, formStep, nextFormStep }) {

    const handleSubmit = () => {
        const eventTitle = document.querySelector('#eventTitle').value;
        const eventDate = document.querySelector('#eventDate').value;
        const eventLocation = document.querySelector('#eventLocation').value;
        const eventDescription = document.querySelector('#eventDescription').value;
        const eventId = document.querySelector('#eventId').value

        if (!eventTitle || !eventDate || !eventLocation || !eventDescription){
            alert("All input fields are required.");
        }
        else {
            setEventData({
                ...eventData,
                title: eventTitle,
                date: eventDate,
                location: eventLocation,
                description: eventDescription,
                event_id: eventId
            })
            nextFormStep();
        }
        
    };
    
    return (
        <div className={formStep === 0 ? formStyles.showForm : formStyles.hideForm}>
            <h2 className="uppercase text-[0.75em] sm:text-[1.5em] md:text-[2.5em] tracking-[0.1em] py-2">
            Event Information 
            </h2>
            <div className="mt-8">
            <div className="grid grid-cols-1 gap-6">
                <form className="flex flex-col" >
                <label className="block" htmlFor="eventTitle">
                    <span className="text-gray-700 font-bold">Event Title</span>
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
                        placeholder="Title"
                        id="eventTitle"
                        name="eventTitle"
                    />
                </label> 
                <label className="block" htmlFor="eventDate">
                    <span className="text-gray-700 font-bold">Date</span>
                    <input
                        type="datetime-local"
                        className="
                            mt-1
                            block
                            w-full
                            rounded-md
                            border-gray-300
                            shadow-sm
                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                        "
                        placeholder="Date"
                        id="eventDate"
                        name="eventDate"
                    />
                </label> 
                <label className="block" htmlFor="eventLocation">
                    <span className="text-gray-700 font-bold">Location</span>
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
                        placeholder="Location"
                        id="eventLocation"
                        name="eventLocation"
                    />
                </label> 
                <label className="block" htmlFor="eventDescription">
                    <span className="text-gray-700 font-bold">Description</span>
                    <textarea
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
                        placeholder="Description"
                        id="eventDescription"
                        name="eventDescription"
                    />
                </label>
                <label className="block" htmlFor="eventId">
                    <span className="text-gray-700 font-bold">ID</span>
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
                        placeholder="ID"
                        id="eventId"
                        name="eventId"
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