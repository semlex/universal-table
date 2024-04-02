import { TableRow, TableCell as MUITableCell, Button } from '@mui/material';
import { IColumn } from '../model/types';
import TableCell from './table-cell';
import { EditTableRow } from '@/features/edit-table-row';
import { useState } from 'react';
import { StringKeys } from '@/shared/model';

type TableRowsProps<T> = {
  data: T[];
  columns: IColumn<T>[];
  editableFields: StringKeys<T>[];
  onEditRow: (row: T) => void;
};

const TableRows = <T,>({ data, columns, editableFields, onEditRow }: TableRowsProps<T>) => {
  const [currentRow, setCurrentRow] = useState<T | null>(null);

  const onClickEdit = (row: T) => {
    setCurrentRow(row);
  };

  return (
    <>
      {data.map((item) => (
        <TableRow>
          {columns.map((column) => (
            <TableCell key={`column_${String(column.key)}`} item={item} column={column} />
          ))}
          <MUITableCell>
            <Button type="button" disableRipple onClick={() => onClickEdit(item)}>
              Edit
            </Button>
          </MUITableCell>
        </TableRow>
      ))}
      {!!currentRow && (
        <EditTableRow
          open={!!currentRow}
          onClose={() => setCurrentRow(null)}
          editableFields={editableFields}
          onEditRow={onEditRow}
          item={currentRow}
        />
      )}
    </>
  );
};

export default TableRows;
