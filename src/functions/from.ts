import { Enumerable } from '../enumerables';
import { IEnumerable } from '../types';
import { applyFrom } from './applicators/applyFrom';

export function from<TSource>(src: Iterable<TSource>): IEnumerable<TSource> {
  return applyFrom(Enumerable, src) as IEnumerable<TSource>;
}

export function fromObject<TSource>(src: TSource): IEnumerable<[keyof TSource, TSource[keyof TSource]]> {
  return applyFrom(Enumerable, src) as IEnumerable<[keyof TSource, TSource[keyof TSource]]>;
}
