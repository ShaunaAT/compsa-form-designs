import React from "react";
import formStyles from "../../styles/formStyles.module.scss";

export default function Details({eventData, setEventData, formStep, nextFormStep }) {

    var eTags = [];

    function handleKeyDown(e){
        if (e.key !== 'Enter') {
            return;
        }

        const value = e.target.value;

        if (!value.trim()) {
            return;
        }

        setEventData({
            ...eventData,
            tags: [...eventData.tags, value]
        })
        e.target.value = '';
    }

    function removeTag(index){
        setEventData({
            ...eventData,
            tags: eventData.tags.filter((el, i) => i !== index)
        })
    }

    function create(){
        const url = document.querySelector('#eventImageURL').value;
        const active = document.querySelector('#eventIsActive').checked;
        
        setEventData({
            ...eventData,
            tags: eTags
        });

        setEventData({
            ...eventData,
            image: url,
            is_active: active
        });
        nextFormStep();
    }

    return (
        <div className={formStep === 1 ? formStyles.showForm : formStyles.hideForm}>
            <h2 className="uppercase text-[0.75em] sm:text-[1.5em] md:text-[2.5em] tracking-[0.1em] py-2">
                Event Details
            </h2>
            <div className="mt-8 max-w-md">
            <div className="grid grid-cols-1 gap-6">
                <form className="flex flex-col" >
                    <span className="text-gray-700 font-bold">Event Tags</span>
                    { eventData.tags.map((tag, index) => (
                        <div className="tag-item" key={index}>
                            <span className="text">{tag}</span>
                            <span className="close" onClick={() => removeTag(index)}>&times;</span>
                        </div>
                        )) 
                    }
                    <input onKeyDown={handleKeyDown} type="text" placeholder="Add Tags" /> 
                    <label className="block" htmlFor="eventImageURL">
                    <span className="text-gray-700 font-bold">Event Image URL</span>
                    <input
                        type="url"
                        className="
                            mt-1
                            block
                            w-full
                            rounded-md
                            border-gray-300
                            shadow-sm
                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                        "
                        placeholder="Image URL"
                        id="eventImageURL"
                        name="eventImageURL"
                    />
                    </label>
                    <label htmlFor="eventIsActive"> Active
                        <input
                            type="checkbox"
                            id="eventIsActive"
                            name="eventIsActive"
                            value="false"
                        />
                    </label>
            <button type="button" onClick={create} className="bg-[#200263] hover:bg-[#c6b9fe] py-2 my-4"> 
                Next
            </button>
            </form>
            </div>
        </div>
        </div>
    )
}