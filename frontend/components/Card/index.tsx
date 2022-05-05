import { Hero } from "../../domain/hero";
import style from "./style.module.scss";
import { useCard } from "./useCard";

interface Props {
  hero: Hero;
  updateHero: (hero: Hero) => void;
}

export function Card({ hero, updateHero }: Props) {
  const { heroCopy, change } = useCard(hero);

  return (
    <div className={style.Card}>
      <div className={style.headder}>
        <h3>Name : {hero.name}</h3>
        <label>PV :</label>{" "}
        <label>
          <input defaultValue={heroCopy.lifepoint} />/{hero.lifepoint}
        </label>
        <label>Race :</label> <label>{heroCopy.race}</label>
      </div>

      <div className={style.stat}>
        <label>force :</label> <label>{heroCopy.force}</label>
        <label>mod : </label>
        <label>{Math.trunc((heroCopy.force - 10) / 2)}</label>
        <label>vitesse : </label>
        <label>{heroCopy.vitesse}</label>
        <label>mod : </label>
        <label>{Math.trunc((heroCopy.vitesse - 10) / 2)}</label>
        <label>constitution : </label>
        <label>{heroCopy.constitution}</label>
        <label>mod :</label>
        <label>{Math.trunc((heroCopy.constitution - 10) / 2)}</label>
        <label>magie : </label>
        <label>{heroCopy.magie}</label>
        <label>contrôle :</label>
        <label>
          <input defaultValue={heroCopy.controle} /> /{heroCopy.controle}
        </label>
        <label>sagesse : </label>
        <label>{heroCopy.sagesse}</label>
        <label>mod : </label>
        <label>{Math.trunc((heroCopy.sagesse - 10) / 2)}</label>
        <label>intel : </label>
        <label>{heroCopy.inteligence}</label>
        <label>mod :</label>
        <label>{Math.trunc((heroCopy.inteligence - 10) / 2)}</label>
        <label>charisme : </label>
        {heroCopy.charisme}
        <label>mod : </label>
        <label>{Math.trunc((heroCopy.charisme - 10) / 2)}</label>
        <button
          onClick={() => {
            updateHero(heroCopy);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}
