import { Suite } from 'benchmark';
import { from, List } from '../index';
import { getTestObjects } from './benchmarkHelpers';

interface TestType {
  id: number;
  foo: string;
  bar: number[];
}

export function listBenchmark(): void {
  const suite = new Suite();

  const objects = getTestObjects();

  suite.add('add', () => {
    const list = new List<TestType>();

    for (let i = 0; i < objects.length; i++) {
      list.add(objects[i]);
    }
  });

  suite.add('push (native array)', () => {
    const arr = [];

    for (let i = 0; i < objects.length; i++) {
      arr.push(objects[i]);
    }
  });

  suite
    .on('cycle', (event: any) => {
      console.log(String(event.target));
      if (event.target.error) {
        console.error(event.target.error);
      }
    })
    .run();
}
