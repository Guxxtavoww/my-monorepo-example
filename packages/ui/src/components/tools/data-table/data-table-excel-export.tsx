'use client';

import { useCallback, useMemo } from 'react';
import { ArrowRightFromLine } from 'lucide-react';
import type { Table } from '@tanstack/react-table';

import { cn } from '@repo/ui/utils/cn.util';
import { Button } from '@repo/ui/components/ui/button';

import { exportTableToCSV, type ExportType } from './utils';
import { LucideIcon } from '../lucide-icon';
import { CustomTooltip } from '../custom-tooltip';

interface DataTableExcelExportProps<T> {
  table: Table<T>;
  className?: string;
  export_type?: ExportType;
}

export function DataTableExcelExport<T>({
  table,
  className,
  export_type,
}: DataTableExcelExportProps<T>) {
  const rows = useMemo(() => table.getFilteredRowModel().rows, [table]);

  const exportToExcel = useCallback(() => {
    if (!rows.length) return;

    exportTableToCSV(table, {
      filename: 'financas',
      excludeColumns: ['select', 'actions'],
      export_type,
    });
  }, [table, export_type]);

  if (!rows.length) return null;

  return (
    <CustomTooltip tooltipText="Exportar Para Excel">
      <Button
        className={cn('inline-flex items-center gap-2 w-full', className)}
        variant="outline"
        onClick={exportToExcel}
      >
        <LucideIcon icon={ArrowRightFromLine} size="sm" />
        Exportar
      </Button>
    </CustomTooltip>
  );
}
