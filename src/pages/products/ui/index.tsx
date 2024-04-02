import { IProduct, editProduct } from '@/entities/product';
import { IFilter } from '@/features/table-filters';
import { getFormattedDate, useAppDispatch, useAppSelector } from '@/shared/lib';
import { Table } from '@/widgets/table';
import { IColumn } from '@/widgets/table';

const columns: IColumn<IProduct>[] = [
  {
    key: 'name',
    header: 'Name',
    widthPercent: 25,
  },
  {
    key: 'options',
    header: 'Options',
    widthPercent: 20,
    onRender: (item) => (
      <>
        <p style={{ marginTop: '0' }}>Size: {item.options.size}</p>
        <p style={{ marginBottom: '0' }}>Amount: {item.options.amount}</p>
      </>
    ),
  },
  {
    key: 'active',
    header: 'Status',
    widthPercent: 25,
    onRender: (item) => <>{item.active ? 'Active' : 'Inactive'}</>,
  },
  {
    key: 'createdAt',
    header: 'Created',
    widthPercent: 20,
    onRender: (item) => <>{getFormattedDate(item.createdAt)}</>,
  },
];

const filters: IFilter<IProduct>[] = [
  {
    key: 'active',
    label: 'Status',
    options: [
      { label: 'Active', value: 'true' },
      { label: 'Inactive', value: 'false' },
    ],
  },
];

const ProductsPage = () => {
  const dispatch = useAppDispatch();

  const data = useAppSelector((state) => state.product);

  const onEditRow = (row: IProduct) => {
    dispatch(editProduct(row));
  };

  return (
    <Table
      data={data}
      columns={columns}
      searchableFields={['name']}
      filters={filters}
      editableFields={['name']}
      onEditRow={onEditRow}
    />
  );
};

export default ProductsPage;
