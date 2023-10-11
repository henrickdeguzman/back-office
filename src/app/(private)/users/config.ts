import { TableSearchElementsConfig } from '@/components/table/TableSearch';

export const userSearchConfig: TableSearchElementsConfig = [
  {
    type: 'text',
    name: 'username',
    placeholder: 'Search by username',
    label: 'Username',
  },
  {
    type: 'text',
    name: 'email',
    placeholder: 'Search by email',
    label: 'Email',
  },
  {
    type: 'select',
    name: 'status',
    label: 'Status',
    placeholder: 'Search by status',
    options: [
      { label: 'Pending', value: 0 },
      { label: 'Active', value: 1 },
      { label: 'In-active', value: 2 },
      { label: 'Blocked', value: 3 },
    ],
  },
];
