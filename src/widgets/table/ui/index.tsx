import { IEntity, StringKeys } from '@/shared/model';
import { IColumn } from '../model/types';
import TableHeader from './table-header';
import TableRows from './table-rows';
import { Table as MUITable, TableContainer, Paper, TableBody, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { IFilter, FilterValue, TableFilters } from '@/features/table-filters';
import { applyFilters } from '../lib/utils/apply-filters';

type TableProps<T> = {
  data: T[];
  columns: IColumn<T>[];
  searchableFields: StringKeys<T>[];
  filters: IFilter<T>[];
  editableFields: StringKeys<T>[];
  onEditRow: (row: T) => void;
};

const Table = <T extends IEntity>({
  data,
  columns,
  searchableFields,
  filters,
  editableFields,
  onEditRow,
}: TableProps<T>) => {
  const [filteredData, setFilteredData] = useState<T[]>(data);
  const [filtersValues, setFiltersValues] = useState<FilterValue<T>>({});
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    setFilteredData(applyFilters(data, filtersValues, searchableFields, search));
  }, [data, filtersValues, search, searchableFields]);

  const changeFiltersValues = (name: keyof T, value: string) => {
    if (value === '') {
      setFiltersValues((state) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [name]: _, ...rest } = state;
        return rest as FilterValue<T>;
      });
    } else {
      setFiltersValues((state) => ({ ...state, [name]: value }));
    }
  };

  return (
    <Stack gap={2}>
      <TableFilters
        filters={filters}
        search={search}
        filtersValues={filtersValues}
        changeFiltersValues={changeFiltersValues}
        changeSearch={(string) => setSearch(string)}
      />
      <TableContainer component={Paper}>
        <MUITable>
          <TableHeader columns={columns} />
          <TableBody>
            <TableRows
              data={filteredData}
              columns={columns}
              editableFields={editableFields}
              onEditRow={onEditRow}
            />
          </TableBody>
        </MUITable>
      </TableContainer>
    </Stack>
  );
};

export default Table;
