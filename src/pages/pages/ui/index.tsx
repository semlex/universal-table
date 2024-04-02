import { IPage, editPage } from '@/entities/page';
import { IFilter } from '@/features/table-filters';
import { getFormattedDate, useAppDispatch, useAppSelector } from '@/shared/lib';
import { IColumn, Table } from '@/widgets/table';

const columns: IColumn<IPage>[] = [
  {
    key: 'title',
    header: 'Title',
    widthPercent: 30,
  },
  {
    key: 'active',
    header: 'Status',
    onRender: (item) => <>{item.active ? 'Active' : 'Inactive'}</>,
  },
  {
    key: 'updatedAt',
    header: 'Updated',
    onRender: (item) => <>{getFormattedDate(item.updatedAt)}</>,
  },
  {
    key: 'publishedAt',
    header: 'Published',
    onRender: (item) => <>{getFormattedDate(item.publishedAt)}</>,
  },
];

const filters: IFilter<IPage>[] = [
  {
    key: 'active',
    label: 'Status',
    options: [
      { label: 'Active', value: 'true' },
      { label: 'Inactive', value: 'false' },
    ],
  },
];

const PagesPage = () => {
  const dispatch = useAppDispatch();

  const data = useAppSelector((state) => state.page);

  const onEditRow = (row: IPage) => {
    dispatch(editPage(row));
  };

  return (
    <Table
      data={data}
      columns={columns}
      searchableFields={['title']}
      filters={filters}
      editableFields={['title']}
      onEditRow={onEditRow}
    />
  );
};

export default PagesPage;
