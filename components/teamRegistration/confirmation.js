import React from "react";
import formStyles from "../../styles/formStyles.module.scss"

export default function Confirmation({ formStep, nextFormStep }) {

    const individualBaseUrl = "https://cwcx0z4ffe.execute-api.us-east-1.amazonaws.com/Prod/createIndividual";
    const pairBaseUrl = "https://cwcx0z4ffe.execute-api.us-east-1.amazonaws.com/Prod/createPair";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";

    const createPair = async() => {
        const player1 = {
            "first_name": player1FirstName.value,
            "last_name": player1LastName.value,
            "id": player1NetId.value,
            "email": player1Email.value,
            "admin_events": [],
        }

        const player2 = {
            "first_name": player2FirstName.value,
            "last_name": player2LastName.value,
            "id": player2NetId.value,
            "email": player2Email.value,
            "admin_events": []
        }

        const pair = {
            "person_a_id": player1NetId.value,
            "person_b_id": player2NetId.value,
            "pair_name": teamName.value,
            "school_year": "2022",
            "total_points": 0,
            "awards": []
        }

        const jsonP1 = JSON.stringify(player1);
        const jsonP2 = JSON.stringify(player2);
        const jsonTeam = JSON.stringify(pair);

        await fetch(`${proxyUrl}${individualBaseUrl}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonP1
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

        await fetch(`${proxyUrl}${individualBaseUrl}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonP2
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

        await fetch(`${proxyUrl}${pairBaseUrl}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonTeam
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

        nextFormStep();
    }

    return (
        <div className={formStep === 3 ? formStyles.showForm : formStyles.hideForm}>
            <div>
                <h2 className="uppercase text-[0.75em] sm:text-[1.5em] md:text-[2.5em] tracking-[0.1em] py-2">
                    Confirm Team
                </h2>
                <span className="text-gray-700 font-bold">Player One</span>
                <p>First Name: {player1FirstName.value} </p>
                <p>Last Name: {player1LastName.value}</p>
                <p>Student Number: {player1NetId.value}</p>
                <p>Email: {player1Email.value}</p>
                <span className="text-gray-700 font-bold">Player Two</span>
                <p>First Name: {player2FirstName.value} </p>
                <p>Last Name: {player2LastName.value}</p>
                <p>Student Number: {player2NetId.value}</p>
                <p>Email: {player2Email.value}</p>
                <span className="text-gray-700 font-bold">Team Name: {teamName.value}</span>
            </div>
            <button type="button" onClick={createPair} className="bg-[#200263] hover:bg-[#c6b9fe] py-2 my-4">
                Confirm 
            </button>
        </div>
    )

}