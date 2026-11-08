import React from 'react';
import { cn } from '@/lib/utils';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { DataTableColumn, DataTableProps } from '@/types';

export const Datatable = <T,>({
  columns,
  data,
  rowKey,
  tableClassName,
  headerClassName,
  headerCellClassName,
  headerRowClassName,
  bodyRowClassName,
  bodyCellClassName,
}: DataTableProps<T>) => {
  return (
    <Table className={cn('custom-scrollbar', tableClassName)}>
      <TableHeader className={cn(headerClassName)}>
        <TableRow className={cn('hover:bg-transparent', headerRowClassName)}>
          {columns?.map((column, index) => (
            <TableHead
              key={index}
              className={cn(
                'text-left bg-dark-400',
                headerCellClassName,
                column.headClassName
              )}
            >
              {column.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data && data.length > 0 ? (
          data.map((row, index) => {
            const key = rowKey ? rowKey(row, index) : index;
            return (
              <TableRow
                key={key}
                className={cn('hover:bg-dark-500', bodyRowClassName)}
              >
                {columns?.map((column, colIndex) => (
                  <TableCell
                    key={colIndex}
                    className={cn(
                      'text-left',
                      bodyCellClassName,
                      column.cellClassName
                    )}
                  >
                    {column.cell(row, index)}
                  </TableCell>
                ))}
              </TableRow>
            );
          })
        ) : (
          <TableRow>
            <TableCell
              colSpan={columns?.length || 1}
              className="text-center py-6 text-purple-100/60"
            >
              No data available
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
