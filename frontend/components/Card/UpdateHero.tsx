import { useContext } from "react";
import { CardContext } from ".";
import style from "./style.module.scss";
import { useCard } from "./useCard";

export function UpdateHero() {
  const { hero, updateHero, setModify } = useContext(CardContext);
  const { heroToUpdate, change } = useCard(hero);

  return (
    <div className={style.Card}>
      <div className={style.headder}>
        <h3>Name {hero.name}</h3>
        <label>PV </label>{" "}
        <label>
          <input defaultValue={heroToUpdate.lifepoint} />/{hero.lifepoint}
        </label>
        <label>Race </label> <label>{heroToUpdate.race}</label>
      </div>

      <div className={style.stat}>
        <label>force </label>{" "}
        <input id="force" value={heroToUpdate.force} onChange={change} />
        <label>mod </label>
        <label>{Math.trunc((heroToUpdate.force - 10) / 2)}</label>
        <label>vitesse </label>
        <input id="vitesse" value={heroToUpdate.vitesse} onChange={change} />
        <label>mod </label>
        <label>{Math.trunc((heroToUpdate.vitesse - 10) / 2)}</label>
        <label>constitution </label>
        <input
          id="constitution"
          value={heroToUpdate.constitution}
          onChange={change}
        />
        <label>mod </label>
        <label>{Math.trunc((heroToUpdate.constitution - 10) / 2)}</label>
        <label>magie </label>{" "}
        <input id="magie" value={heroToUpdate.magie} onChange={change} />
        <label>contrôle </label>
        <label>
          <input
            id="controle"
            value={heroToUpdate.controle}
            onChange={change}
          />
        </label>
        <label>sagesse </label>
        <input id="sagesse" value={heroToUpdate.sagesse} onChange={change} />
        <label>mod </label>
        <label>{Math.trunc((heroToUpdate.sagesse - 10) / 2)}</label>
        <label>intel </label>
        <input
          id="inteligence"
          value={heroToUpdate.inteligence}
          onChange={change}
        />
        <label>mod </label>
        <label>{Math.trunc((heroToUpdate.inteligence - 10) / 2)}</label>
        <label>charisme </label>
        <input id="charisme" value={heroToUpdate.charisme} onChange={change} />
        <label>mod </label>
        <label>{Math.trunc((heroToUpdate.charisme - 10) / 2)}</label>
      </div>
      <button
        onClick={() => {
          updateHero(heroToUpdate);
          setModify(false);
        }}
      >
        Save
      </button>
    </div>
  );
}
