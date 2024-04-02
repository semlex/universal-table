import { TableCell, TableHead, TableRow } from '@mui/material';
import { IColumn } from '../model/types';

type TableHeaderProps<T> = {
  columns: IColumn<T>[];
};

const TableHeader = <T,>({ columns }: TableHeaderProps<T>) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell width={`${column.widthPercent}%`}>{column.header}</TableCell>
        ))}
        <TableCell />
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
