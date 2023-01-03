import { getHeroesByPublish } from "../helpers";
import { HeroCard } from "./HeroCard";

export const HerosList = ({ publisher }) => {
    const heros = getHeroesByPublish(publisher);
    return (<>
        <div className="row rows-cols-1 row-cols-md-3">
            {heros.map(h => (
                <HeroCard key={h.id} {...h}/>
            ))}
        </div>
    </>);
};
