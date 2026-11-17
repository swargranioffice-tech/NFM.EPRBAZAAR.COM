import type { ReactNode } from 'react';

export interface TableColumn<T> {
  key: string;
  header: string;
  align?: 'left' | 'right';
  mono?: boolean;
  render: (row: T) => ReactNode;
}

interface DataTableProps<T> {
  caption: string;
  columns: TableColumn<T>[];
  rows: T[];
  rowKey: (row: T, index: number) => string;
}

/**
 * Reusable accessible corporate data table enforcing tabular numerals
 * and clean hairline grid separation.
 */
export function DataTable<T>({ caption, columns, rows, rowKey }: DataTableProps<T>) {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
      <table className="w-full border-collapse text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-b border-slate-200 bg-[#0B1F3A] text-white">
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className={`px-4 py-3.5 text-xs font-semibold tracking-wide ${
                  col.align === 'right' ? 'text-right' : 'text-left'
                } whitespace-nowrap`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {rows.map((row, idx) => (
            <tr
              key={rowKey(row, idx)}
              className="transition-colors hover:bg-slate-50/90"
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={`px-4 py-3.5 text-slate-700 ${
                    col.align === 'right' ? 'text-right' : 'text-left'
                  } ${col.mono ? 'font-mono tabular-nums font-medium text-[#0B1F3A]' : ''}`}
                >
                  {col.render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
