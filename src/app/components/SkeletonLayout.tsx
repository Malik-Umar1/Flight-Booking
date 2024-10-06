
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const SkeletonLayout = () => {
  return (
    <div className='w-full flex px-5 rounded-lg'>
      <div className='w-[80%]  h-full space-y-3'>
        <div className='flight'>
          <div className='flex  justify-between'>
            <div className='flex gap-3 '>
              <div className='img  h-[50px] w-[50px]'>
                <Skeleton className='h-full w-full ' />
              </div>

              <div className='space-y-1'>
                <span className='text-[13px]'>
                  <Skeleton className='w-[150px] h-4' />
                </span>
                <h1 className='text-[16px] text-black'>
                  <Skeleton className='w-[180px] h-5' />
                </h1>
              </div>
            </div>

            <div className=' flex gap-10'>
              <div>
                <span className='text-[14px] '>
                  <Skeleton className='w-[80px] h-4' />
                </span>
                <h1 className='text-[16px] mt-1 text-black'>
                  <Skeleton className='w-[120px] h-5' />
                </h1>
              </div>

              <div>
                <span>
                  <Skeleton className='w-[100px] h-4' />
                </span>
                <h1 className='text-[16px] mt-1 text-black'>
                  <Skeleton className='w-[80px] h-5' />
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Second flight segment (same structure) */}
  
      </div>


    </div>
  );
};

export default SkeletonLayout;
