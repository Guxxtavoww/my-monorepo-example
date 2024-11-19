'use client';

import { type ReactNode, useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';

export interface ClientForProps<T> {
  each: Maybe<T[]>;
  fallback: JSX.Element;
  parentHeight: number;
  itemHeight: number;
  children: (item: T, index: number) => ReactNode;
}

export function ClientFor<T>({
  each,
  fallback,
  parentHeight,
  itemHeight,
  children,
}: ClientForProps<T>) {
  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: each?.length || 10,
    getScrollElement: () => parentRef.current,
    estimateSize: () => itemHeight,
    overscan: 5,
  });

  if (!each || each.length === 0) return fallback;

  return (
    <div
      ref={parentRef}
      style={{
        height: parentHeight,
        overflow: 'auto',
        position: 'relative',
      }}
    >
      <div
        style={{
          height: rowVirtualizer.getTotalSize(),
          position: 'relative',
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const item = each[virtualRow.index];

          if (!item) return null;

          return (
            <div
              key={virtualRow.key}
              style={{
                position: 'absolute',
                top: virtualRow.start,
                height: virtualRow.size,
                width: '100%',
              }}
            >
              {children(item, virtualRow.index)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
