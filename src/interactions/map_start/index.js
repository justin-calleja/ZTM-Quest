import { interactionWithBruno } from './bruno.interaction';
import { enterMapCityInteraction } from './enterMapCity.interaction';
import { restroomInteractions } from './restroom.interactions';

const interactions = [
    restroomInteractions,
    interactionWithBruno,
    enterMapCityInteraction,
    // Add more interactions here
];

export const attachInteractions = (gameObj, k) => {
    const map = k.get('main_map')[0];

    interactions.forEach((cb) => cb(gameObj, k, map));
};
