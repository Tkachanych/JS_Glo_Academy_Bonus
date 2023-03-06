import { findText } from './helpers';

const getCard = (person) => {
  fetch('./db/dbheroes.json')
    .then((response) => response.json())
    .then((data) => data.filter((hero) => findText(hero.name, person.name)))
    .then((data) => data.filter((hero) => findText(hero.realName, person.realName)))
    .then((data) => data.filter((hero) => findText(hero.species, person.species)))
    .then((data) => data.filter((hero) => findText(hero.citizenship, person.citizenship)))
    .then((data) => data.filter((hero) => findText(hero.gender, person.gender)))
    .then((data) => data.filter((hero) => findText(hero.status, person.status)))
    .then((data) => data.filter((hero) => findText(hero.actors, person.actors)))
    .then((data) => { console.log(data); })
    .catch((err) => console.log(err));
};

export default getCard;
