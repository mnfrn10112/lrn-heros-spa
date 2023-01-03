import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/";
import queryString from 'query-string';
import { getHerosByName } from "../helpers";


export const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const heroes = getHerosByName(q);

    const { searchText, onInputChange } = useForm({
        searchText: q
    });

    const handleSumit = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
    };

    const showSearch = () => q === '';
    const showError = () => (q !== '' && heroes.length === 0);

    return (<>
        <h1>SearchPage</h1>
        <hr />
        <div className="row">
            <div className="col-5">
                <h4>Searching</h4>
                <hr />
                <form onSubmit={handleSumit} >
                    <input type="text"
                        placeholder="Search a hero"
                        className="form-control"
                        name="searchText"
                        autoComplete="off"
                        value={searchText}
                        onChange={onInputChange} />
                    <button type="submit" className="btn btn-outline-primary mt-1">Search</button>
                </form>
            </div>
            <div className="col-7">
                <h4>Results</h4>
                {showSearch() &&
                    (<div className="alert alert-primary animate__animated animate__fadeIn">
                        Search hero
                    </div>)}
                {showError() &&
                    (<div className="alert alert-danger animate__animated animate__fadeIn">
                        No hero with <b>{q}</b>
                    </div>)
                }

                {heroes.map(h => (
                    <HeroCard key={h.id} {...h} className="mt-1" />
                ))}
            </div>
        </div>
    </>);
};
