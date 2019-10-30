import React from "react";

const FilmCard = props => {
    const {title, description, director, producer, release_date} = props.film;
    return (
        <article className="col-md-6">
            <div className="card m-1">
                <div className="card-body text-center">
                    <div className="card-header text-center">
                        <h3 className="">{title}</h3>
                    </div>
                        <h6 className="mt-2">Film Synopsis:</h6>
                        <p className="card-text text-justify">{description}</p>
                </div>
                <div className="card-footer text-muted text-center">
                        <p className="mt-2">Director: {director}</p> 
                        <p>Producer: {producer}</p>
                        <p>Release Date: {release_date}</p>
                </div>
            </div>
        </article>
    )
}

export default FilmCard;