import { StringKeys } from '@/shared/model';
import { Input } from '@/shared/ui';
import { CloseOutlined } from '@mui/icons-material';
import {
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { DefaultValues, Path, useForm } from 'react-hook-form';

type FormType<T> = Partial<T>;

type EditTableRowProps<T> = {
  item: T;
  editableFields: StringKeys<T>[];
  open: boolean;
  onClose: () => void;
  onEditRow: (item: T) => void;
};

const EditTableRow = <T,>({
  item,
  open,
  editableFields,
  onClose,
  onEditRow,
}: EditTableRowProps<T>) => {
  const defaultValues: FormType<T> = {};

  editableFields.forEach((field) => {
    defaultValues[field] = item[field];
  });

  const { control, handleSubmit } = useForm<FormType<T>>({
    defaultValues: defaultValues as DefaultValues<FormType<T>>,
  });

  const onSubmit = (data: FormType<T>) => {
    onEditRow({ ...item, ...data });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <Toolbar>
        <Stack direction="row" justifyContent="space-between" width="100%">
          <Typography variant={'h5'}>Edit</Typography>
          <IconButton onClick={onClose} color={'info'}>
            <CloseOutlined />
          </IconButton>
        </Stack>
      </Toolbar>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            {editableFields.map((field) => (
              <Input
                name={String(field) as Path<Partial<T>>}
                label={String(field)}
                control={control}
              />
            ))}
            <Button type="submit">Save</Button>
          </Stack>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditTableRow;
