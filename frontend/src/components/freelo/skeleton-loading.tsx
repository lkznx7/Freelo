'use client';

import { Skeleton } from '@/components/ui/skeleton';

export function JobSkeleton() {
  return (
    <div className="border border-border/50 rounded-3xl overflow-hidden bg-white shadow-lg shadow-secondary/5 space-y-4">
      <Skeleton className="h-48 w-full" />
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-6 w-full" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
      <div className="p-6 pt-0">
        <Skeleton className="h-11 w-full rounded-xl" />
      </div>
    </div>
  );
}

export function StatsSkeleton() {
  return (
    <div className="border border-border/50 rounded-3xl p-6 bg-white shadow-lg shadow-secondary/5 flex justify-between">
      <div className="space-y-3">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-4 w-20 rounded-full" />
      </div>
      <Skeleton className="h-12 w-12 rounded-2xl" />
    </div>
  );
}
