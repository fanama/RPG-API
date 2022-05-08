import { Hero } from "../../domain/hero";
import style from "./style.module.scss";
import { useCard } from "./useCard";

interface Props {
  createHero: (hero: Hero) => void;
}

export function CreateHero({ createHero }: Props) {
  const { heroToUpdate, change } = useCard({} as Hero);

  return (
    <div className={[style.Card, style.Creator].join(" ")}>
      <div className={style.headder}>
        <h3>
          Name <input value={heroToUpdate.name} id="name" onChange={change} />
        </h3>
        <label>PV </label>{" "}
        <input
          value={heroToUpdate.lifepoint}
          id="lifepoint"
          onChange={change}
        />
        <label>Race </label>{" "}
        <input value={heroToUpdate.race} id="race" onChange={change} />
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
        <input id="controle" value={heroToUpdate.controle} onChange={change} />
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
          createHero(heroToUpdate);
        }}
      >
        create hero
      </button>
    </div>
  );
}
