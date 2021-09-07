export function aggregate<TSource>(
  src: Iterable<TSource>,
  aggregator: (prev: TSource, curr: TSource, index: number) => TSource
): TSource;
export function aggregate<TSource, TAccumulate>(
  src: Iterable<TSource>,
  aggregator: (prev: TAccumulate, curr: TSource, index: number) => TAccumulate,
  seed: TAccumulate
): TAccumulate;
export function aggregate<TSource, TAccumulate>(
  src: Iterable<TSource>,
  aggregator: (prev: TAccumulate | TSource, curr: TSource, index: number) => TAccumulate | TSource,
  seed?: TAccumulate | TSource
): TAccumulate | TSource;
export function aggregate<TSource, TAccumulate>(
  src: Iterable<TSource>,
  aggregator: (prev: TAccumulate | TSource, curr: TSource, index: number) => TAccumulate | TSource,
  seed?: TAccumulate | TSource
): TAccumulate | TSource {
  let aggregate = seed;
  let i = 0;

  for (const item of src) {
    if (aggregate === undefined) {
      aggregate = item;
    } else {
      aggregate = aggregator(aggregate, item, i);
    }

    i++;
  }

  if (aggregate === undefined) {
    throw new Error('Sequence contains no elements');
  }

  return aggregate;
}
