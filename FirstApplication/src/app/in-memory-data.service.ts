import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Iron Man', descryption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta pharetra velit, eget varius urna congue ac.' },
      { id: 2, name: 'Spider-Man', descryption: 'urabitur porta viverra consequat. Quisque feugiat, dui vel bibendum commodo, felis nunc tincidunt nibh, eget suscipit tellus erat at ipsum. ' },
      { id: 3, name: 'Thor', descryption: 'Maecenas bibendum ut nulla in tincidunt. Nam condimentum sollicitudin nunc eu suscipit. Vestibulum et rhoncus velit.' },
      { id: 4, name: 'Kapitan Ameryka', descryption: 'Nullam viverra, nibh non rutrum dapibus, justo turpis efficitur mauris, in imperdiet est tortor nec mauris.' },
      { id: 5, name: 'Czarna Wdowa', descryption: 'Integer sapien massa, porttitor id justo ultrices, lacinia egestas tortor. Ut ut mauris eros. Fusce in augue at magna fermentum dignissim.' },
      { id: 6, name: 'Hulk', descryption: 'Mauris finibus nunc euismod, sodales purus vitae, egestas purus. In auctor dolor tellus, placerat varius erat posuere et.' },
      { id: 7, name: 'Scarlet Witch', descryption: 'In condimentum sapien nisi, sit amet sagittis ligula dignissim sit amet. ' },
      { id: 8, name: 'Hawkeye', descryption: 'Etiam quis nisi eget urna ultrices tempus eu vel risus. Nullam non odio et urna ultrices interdum accumsan sed nisl.' },
      { id: 9, name: 'Ant-Man', descryption: 'Proin nec odio molestie, scelerisque dui id, blandit tortor. Donec dictum ullamcorper ex quis ullamcorper. In lacinia ex in lorem tristique' },
      { id: 10, name: 'Kapitan Marvel', descryption: 'tincidunt quis sit amet nisl. In nunc dolor, tincidunt quis imperdiet eu, efficitur quis nibh. Nullam finibus egestas magna, commodo pulvinar mi finibus id.' },
      { id: 11, name: 'Falcon', descryption: 'Nulla finibus ante ullamcorper dolor mollis tristique. Proin iaculis, tellus et convallis tristique, nunc ex aliquam lorem, eu vulputate eros enim sit amet mi' },
      { id: 12, name: 'Vision', descryption: 'Sed sit amet orci eu odio pulvinar rutrum vitae vitae purus. Praesent arcu ipsum, sollicitudin sed pulvinar quis, aliquam vitae lorem.' },
      { id: 13, name: 'War Machine', descryption: 'Proin vitae ultrices odio, aliquam vehicula justo. Curabitur tincidunt dignissim tortor, sit amet lacinia dui. Donec ac tincidunt sem, porta sodales ex.' },
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}