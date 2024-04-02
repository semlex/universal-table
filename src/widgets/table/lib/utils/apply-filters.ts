import { FilterValue } from '@/features/table-filters';
import { StringKeys } from '@/shared/model';

export const applyFilters = <T>(
  data: T[],
  filtersValues: FilterValue<T>,
  searchableFields: StringKeys<T>[],
  search: string,
) => {
  let result: T[] = [];

  for (const key of searchableFields) {
    result = result.concat(
      data.filter((item) => String(item[key]).toLowerCase().includes(search.toLowerCase())),
    );
  }

  for (const key in filtersValues) {
    result = result.filter((item) => String(item[key]) === String(filtersValues[key]));
  }

  return result;
};
