import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { IFilter, FilterValue } from '../model/types';
import { ChangeEvent } from 'react';

type TableFiltersProps<T> = {
  filters: IFilter<T>[];
  filtersValues: FilterValue<T>;
  search: string;
  changeFiltersValues: (name: keyof T, value: string) => void;
  changeSearch: (search: string) => void;
};

const TableFilters = <T,>({
  filters,
  filtersValues,
  search,
  changeFiltersValues,
  changeSearch,
}: TableFiltersProps<T>) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    changeSearch(event.target.value);
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    changeFiltersValues(name as keyof T, value);
  };

  return (
    <Grid container justifyContent="flex-end" spacing={2} marginX={-2}>
      <Grid item key={`search`} xs={12} sm={6} md={3}>
        <TextField fullWidth label="Search" value={search} onChange={handleInputChange} />
      </Grid>
      {filters.map((filter) => (
        <Grid item key={`filter_${String(filter.key)}`} xs={12} sm={6} md={3} spacing={2}>
          <FormControl fullWidth>
            <InputLabel>{filter.label}</InputLabel>
            <Select
              name={filter.key as string}
              label={filter.label}
              value={filtersValues[filter.key]}
              onChange={handleSelectChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {filter.options.map((option) => (
                <MenuItem key={`option_${option.label}`} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      ))}
    </Grid>
  );
};

export default TableFilters;
