import { ReactNode } from 'react';

interface UpdatesContainerProps {
  children: ReactNode;
}

export function UpdatesContainer({ children }: UpdatesContainerProps) {
  const childArray = Array.isArray(children) ? children : [children];

  const sortedChildren = [...childArray].sort((a, b) => {
    if (!a.props?.date || !b.props?.date) return 0;

    const dateA = new Date(a.props.date.split('.').reverse().join('-'));
    const dateB = new Date(b.props.date.split('.').reverse().join('-'));

    return dateB.getTime() - dateA.getTime(); // Newest first
  });

  return (
    <div className="h-60 flex flex-col overflow-hidden">
      <div className="overflow-y-auto space-y-4 pr-2">
        {sortedChildren}
      </div>
    </div>
  );
}
