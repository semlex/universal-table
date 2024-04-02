import { IColumn } from '../model/types';
import { TableCell as MUITableCell } from '@mui/material';

type TableCellProps<T> = {
  item: T;
  column: IColumn<T>;
};

const TableCell = <T,>({ item, column }: TableCellProps<T>) => {
  return (
    <MUITableCell>{column.onRender ? column.onRender(item) : <>{item[column.key]}</>}</MUITableCell>
  );
};

export default TableCell;
