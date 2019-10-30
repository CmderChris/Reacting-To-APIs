import React from "react";

const PersonCard = props => {
    const {name, gender, age, eye_color, hair_color} = props.person;
    return (
        <article className="col-md-6">
            <div className="card m-1">
                <div className="card-body text-center">
                    <div className="card-header text-center">
                        <h2 className="">{name}</h2>
                    </div>
                        <h6 className="mt-2">Age: {age}</h6>
                        <h6 className="mt-2">Gender: {gender}</h6>
                        <h6 className="mt-2">Eye Color: {eye_color}</h6>
                        <h6 className="mt-2">Hair Color: {hair_color}</h6>
                    </div>
            </div>
        </article>
    )
}

export default PersonCard;