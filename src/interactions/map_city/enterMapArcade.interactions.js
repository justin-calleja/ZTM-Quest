import { displayDialogue } from '../../utils';

export const enterMapArcadeInteraction = (player, k) => {

  player.onCollide('enter_map_arcade', () => {
    import('../../scenes/arcade').then((_) => {
      k.go('arcade');
    });
  });
}