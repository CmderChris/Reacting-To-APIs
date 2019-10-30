import React from "react";
import FilmCard from "./FilmCard";
import NavButton from './NavButton';
import NavLayout from './NavLayout';
import PersonCard from "./PersonCard";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isFilmsLoaded: false,
            isPeopleLoaded: false,
            films: [],
            people: []
        };
		this.handleFilmsLoaded = this.handleFilmsLoaded.bind(this);
        this.handlePeopleLoaded = this.handlePeopleLoaded.bind(this);
		this.handleHomeLoad = this.handleHomeLoad.bind(this);
    }

    componentDidMount() {
        fetch('http://ghibliapi.herokuapp.com/films')
        .then(r => r.json())
        .then(films => this.setState({ films }));
        fetch('https://ghibliapi.herokuapp.com/people')
        .then(r => r.json())
        .then(people => this.setState({ people }));
    }

    handleFilmsLoaded() {
		this.setState({
			isFilmsLoaded: true,
			isPeopleLoaded: false
		});
	}

	handlePeopleLoaded() {
		this.setState({
			isFilmsLoaded: false,
			isPeopleLoaded: true
		});
	}

	handleHomeLoad() {
		this.setState({
			isFilmsLoaded: false,
			isPeopleLoaded: false
		});
	}

    render() {
        if (!this.state.isFilmsLoaded && !this.state.isPeopleLoaded) {
            //Home Page!
            return (
                <>
                <img className="w-75 mx-auto d-block mt-5" src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png" alt="logo"/>
                <NavLayout>
                    <NavButton text="Home Page" handleClick={this.handleHomeLoad} />
                    <NavButton text="Films Page" handleClick={this.handleFilmsLoaded} />
                    <NavButton text="People Page" handleClick={this.handlePeopleLoaded} />
                </NavLayout>
                </>
            );

        } else if (this.state.isFilmsLoaded && !this.state.isPeopleLoaded) {
            //Films Page!
            return (
                <>
                <img className="w-75 mx-auto d-block mt-5" src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png" alt="logo"/>
                <NavLayout>
                    <NavButton text="Home Page" handleClick={this.handleHomeLoad} />
                    <NavButton text="Films Page" handleClick={this.handleFilmsLoaded} />
                    <NavButton text="People Page" handleClick={this.handlePeopleLoaded} />
                </NavLayout>
                <main className='container'>
                    <section className='row my-2 justify-content-center'>
                        {this.state.films.map(film => {
                        return(
                            <FilmCard key={`film-${film.id}`} film={film} />
                            );
                        })}
                    </section>
                </main>
                </>
            );
        
        } else if (!this.state.isFilmsLoaded && this.state.isPeopleLoaded) {
            //People Page!
            return (
                <>
                <img className="w-75 mx-auto d-block mt-5" src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png" alt="logo"/>
                <NavLayout>
                    <NavButton text="Home Page" handleClick={this.handleHomeLoad} />
                    <NavButton text="Films Page" handleClick={this.handleFilmsLoaded} />
                    <NavButton text="People Page" handleClick={this.handlePeopleLoaded} />
                </NavLayout>
                <main className='container'>
                    <section className='row my-2 justify-content-center'>
                        {this.state.people.map(person => {
                        return(
                            <PersonCard key={`person-${person.id}`} person={person} />
                            );
                        })}
                    </section>
                </main>
                </>
            );

        } else {
            return <h1 className="text-center">404 Not Found</h1>
        }
    }
}

export default App;