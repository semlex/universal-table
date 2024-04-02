import { IPricePlan, editPricePlan } from '@/entities/price-plan';
import { IFilter } from '@/features/table-filters';
import { getFormattedDate, useAppDispatch, useAppSelector } from '@/shared/lib';
import { IColumn, Table } from '@/widgets/table';

const columns: IColumn<IPricePlan>[] = [
  {
    key: 'description',
    header: 'Description',
    widthPercent: 25,
  },
  {
    key: 'active',
    header: 'Status',
    widthPercent: 20,
    onRender: (item) => <>{item.active ? 'Active' : 'Inactive'}</>,
  },
  {
    key: 'createdAt',
    header: 'Created',
    widthPercent: 20,
    onRender: (item) => <>{getFormattedDate(item.createdAt)}</>,
  },
  {
    key: 'removedAt',
    header: 'Removed',
    widthPercent: 20,
    onRender: (item) => <>{getFormattedDate(item.createdAt)}</>,
  },
];

const filters: IFilter<IPricePlan>[] = [
  {
    key: 'active',
    label: 'Status',
    options: [
      { label: 'Active', value: 'true' },
      { label: 'Inactive', value: 'false' },
    ],
  },
];

const PricePlansPage = () => {
  const dispatch = useAppDispatch();

  const data = useAppSelector((state) => state.pricePlan);

  const onEditRow = (row: IPricePlan) => {
    dispatch(editPricePlan(row));
  };

  return (
    <Table
      data={data}
      filters={filters}
      columns={columns}
      searchableFields={['description']}
      editableFields={['description']}
      onEditRow={onEditRow}
    />
  );
};

export default PricePlansPage;
