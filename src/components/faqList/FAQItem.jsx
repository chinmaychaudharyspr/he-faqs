import { useState } from 'react';

export const FAQItem = ({ item, onRemove, canRemove }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      id={`faq-${item.id}`}
      data-testid={`faq-${item.id}`}
      className=""
    >
      <button onClick={() => setIsExpanded(true)} className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-1 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 rounded-t-xl ${isExpanded ? '' : 'rounded-b-xl'}`}>
        <div data-testid="expand" className="flex-none pr-2">
            <svg data-accordion-icon className={`w-3 h-3 shrink-0 ${isExpanded ? '' : 'rotate-180'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
            </svg>
        </div>

        <div className="flex-1">
          <div>{item.heading}</div>
        </div>

        {canRemove ? (
          <div className="flex-none">
            <button
              data-testid="cross"
              className="border border-gray-300 hover:bg-slate-200 w-8 h-8 rounded-full top-2 right-2 flex items-center justify-center"
              onClick={onRemove}
            >
              x
            </button>
          </div>
        ) : null}
      </button>
      {isExpanded ? <div className="text-gray-500 dark:text-gray-400 p-5 border border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 rounded-b-xl">{item.description}</div> : null}
    </div>
  );
};
