import { getHeroesByPublish } from "../helpers";

export const HerosList = ({ publisher }) => {
    const heros = getHeroesByPublish(publisher);
    return (<>
        <ul>
            {heros.map(({ id, superhero }) => (
                <li key={id}>{superhero}</li>
            ))}
        </ul>
    </>);
};
