import { useContext } from "react";
import { CardContext } from ".";
import style from "./style.module.scss";

export function DisplayHero() {
  const { hero, setModify } = useContext(CardContext);

  return (
    <div className={style.Card}>
      <div className={style.headder}>
        <h3>Name : {hero.name}</h3>
        <label>PV :</label>{" "}
        <label>
          <input defaultValue={hero.lifepoint} />/{hero.lifepoint}
        </label>
        <label>Race :</label> <label>{hero.race}</label>
      </div>

      <div className={style.stat}>
        <label>force :</label> <label>{hero.force}</label>
        <label>mod : </label>
        <label>{Math.trunc((hero.force - 10) / 2)}</label>
        <label>vitesse : </label>
        <label>{hero.vitesse}</label>
        <label>mod : </label>
        <label>{Math.trunc((hero.vitesse - 10) / 2)}</label>
        <label>constitution : </label>
        <label>{hero.constitution}</label>
        <label>mod :</label>
        <label>{Math.trunc((hero.constitution - 10) / 2)}</label>
        <label>magie : </label>
        <label>{hero.magie}</label>
        <label>contrôle :</label>
        <label>
          <input defaultValue={hero.controle} /> /{hero.controle}
        </label>
        <label>sagesse : </label>
        <label>{hero.sagesse}</label>
        <label>mod : </label>
        <label>{Math.trunc((hero.sagesse - 10) / 2)}</label>
        <label>intel : </label>
        <label>{hero.inteligence}</label>
        <label>mod :</label>
        <label>{Math.trunc((hero.inteligence - 10) / 2)}</label>
        <label>charisme : </label>
        {hero.charisme}
        <label>mod : </label>
        <label>{Math.trunc((hero.charisme - 10) / 2)}</label>
      </div>
      <button
        onClick={() => {
          setModify(true);
        }}
      >
        modify
      </button>
    </div>
  );
}
