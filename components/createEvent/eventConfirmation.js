import React from "react";
import formStyles from "../../styles/formStyles.module.scss"

export default function EventConfirmation({ eventData, setEventData, formStep, nextFormStep }) {

    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const eventBaseUrl = "https://cwcx0z4ffe.execute-api.us-east-1.amazonaws.com/Prod/createEvent";

    function create(){
        const eventJSON = JSON.stringify(eventData);

        await fetch(`${proxyUrl}${individualBaseUrl}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: eventJSON
        })
            .then((response) =>  {
                if (response.ok) {
                    response.json().then((json) => {
                        console.log(json);
                    })
                }
            })
            .catch((error) => {
                console.log("err", error);
            });

        console.log(eventData);
        nextFormStep();
    }

    return (
        <div className={formStep === 3 ? formStyles.showForm : formStyles.hideForm}>
            <div>
                <h2 className="uppercase text-[0.75em] sm:text-[1.5em] md:text-[2.5em] tracking-[0.1em] py-2">
                    Confirm Event
                </h2>
                <p>{JSON.stringify(eventData)}</p>
                <span className="text-gray-700 font-bold">Info</span>
                <p>Event Name: {eventData.title} </p>
                <p>Location: {eventData.location}</p>
                <p>Description: {eventData.description}</p>
                <p>ID: {eventData.event_id}</p>
                <span className="text-gray-700 font-bold">Tags</span>
                <p>{eventData.tags}</p>
                <span className="text-gray-700 font-bold">Is Active</span>
                <p>{eventData.is_active}</p>
            </div>
            <button type="button" onClick={create} className="bg-[#200263] hover:bg-[#c6b9fe] py-2 my-4">
                Confirm 
            </button>
        </div>
    )

}