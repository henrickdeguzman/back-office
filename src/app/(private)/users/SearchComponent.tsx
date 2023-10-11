'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSearchParams } from 'next/navigation';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import useUrlSearch from '@/hooks/useUrlSearch';

export default function SearchComponent() {
  const searchParams = useSearchParams();
  const {
    reset,
    registerParam,
    handleSelectChange,
    search: triggerSearch,
  } = useUrlSearch('/users');

  function search(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    registerParam(form.username);
    registerParam(form.email);
    registerParam(form.status);
    triggerSearch();
  }

  return (
    <form
      onSubmit={search}
      onReset={reset}
      className='p-2 flex gap-4 items-end'
    >
      <Input
        name='username'
        label='Username'
        placeholder='Enter username'
        defaultValue={searchParams.get('username') ?? undefined}
      />

      <Input
        type='email'
        name='email'
        label='Email'
        placeholder='Enter email'
        defaultValue={searchParams.get('email') ?? undefined}
      />

      <Select
        name='status'
        value={searchParams.get('status') ?? ''}
        onValueChange={(v) => handleSelectChange(v, 'status')}
      >
        <SelectTrigger className='w-[240px]' label='Status' name='status'>
          <SelectValue placeholder='Select status' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='0'>Pending</SelectItem>
          <SelectItem value='1'>Active</SelectItem>
          <SelectItem value='2'>Inactive</SelectItem>
          <SelectItem value='3'>Blocked</SelectItem>
        </SelectContent>
      </Select>

      <div className='ml-auto space-x-4'>
        <Button>Search</Button>
        <Button type='reset' variant={'outline'}>
          Reset
        </Button>
      </div>
    </form>
  );
}
