'use client';

import { WIDGET_TYPES } from '@/lib/types';
import WidgetCreator from './WidgetCreator';
import { Card } from '../ui/card';

export default function Widgets() {
  return (
    <div className="h-auto w-full flex flex-col justify-center items-center
      border rounded"
    >
      <div className='h-auto w-full px-5 py-3 flex flex-col justify-center
        items-center gap-1 bg-transparent border-b'
      >
        <div className='h-auto w-full text-left'>
          <h2 className="text-subheading">
            Widgets
          </h2>
        </div>
        <div className='h-auto w-full text-left'>
          <p className="text-body">
            Select widgets to add into your README.
          </p>
        </div>
      </div>

      {/* Grid layout with 2 widgets per row */}
      <div className="h-[300px] lg:h-[500px] w-full px-5 py-6 grid grid-cols-2
        gap-5 overflow-auto"
      >
        {
          WIDGET_TYPES.map((widget) => (
            <WidgetCreator key={widget.id} type={widget.id} />
          ))
        }
      </div>
    </div>
  );
}
