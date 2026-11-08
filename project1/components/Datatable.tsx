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

export interface ColumnDef<T> {
  header: string;
  cellClassName?: string;
  cell: (row: T, index: number) => React.ReactNode;
}

export interface DatatableProps<T> {
  columns: ColumnDef<T>[];
  data?: T[];
  rowkey?: (row: T, index: number) => string | number;
  tableClassName?: string;
  headerCellClassName?: string;
  headerRowClassName?: string;
  bodyRowClassName?: string;
  headerClassName?: string;
  bodyCellClassName?: string;
}

export interface CoinData {
  id: string;
  rank: number;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: number;
  market_cap: number;
}

export const Datatable = <T,>({
  columns,
  data,
  rowkey,
  tableClassName,
  headerClassName,
  headerCellClassName,
  headerRowClassName,
  bodyRowClassName,
  bodyCellClassName,
}: DatatableProps<T>) => {
  return (
    <Table className={cn('custom-scrollbar', tableClassName)}>
      <TableHeader className={cn(headerClassName)}>
        <TableRow className={cn('hover:bg-transparent', headerRowClassName)}>
          {columns?.map((column, index) => (
            <TableHead
              key={index}
              className={cn('text-left bg-dark-400', headerCellClassName)}
            >
              {column.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data && data.length > 0 ? (
          data.map((row, index) => {
            const key = rowkey ? rowkey(row, index) : index;
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
