interface UpdateCardProps {
  date: string;
  title: string;
  description: string;
  color?: 'blue' | 'red' | 'green' | 'yellow' | 'purple';
}

const colorMap = {
  blue: {
    border: 'border-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-950',
    date: 'text-blue-600 dark:text-blue-400',
    accent: 'bg-blue-500',
  },
  red: {
    border: 'border-red-500',
    bg: 'bg-red-50 dark:bg-red-950',
    date: 'text-red-600 dark:text-red-400',
    accent: 'bg-red-500',
  },
  green: {
    border: 'border-green-500',
    bg: 'bg-green-50 dark:bg-green-950',
    date: 'text-green-600 dark:text-green-400',
    accent: 'bg-green-500',
  },
  yellow: {
    border: 'border-yellow-500',
    bg: 'bg-yellow-50 dark:bg-yellow-950',
    date: 'text-yellow-600 dark:text-yellow-400',
    accent: 'bg-yellow-500',
  },
  purple: {
    border: 'border-purple-500',
    bg: 'bg-purple-50 dark:bg-purple-950',
    date: 'text-purple-600 dark:text-purple-400',
    accent: 'bg-purple-500',
  },
};

export function UpdateCard({
  date,
  title,
  description,
  color = 'blue',
}: UpdateCardProps) {
  const colors = colorMap[color];

  return (
    <div
      className={`relative border-l-4 ${colors.border} ${colors.bg} p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden`}
    >
      <div className={`absolute top-0 left-0 right-0 h-1 ${colors.accent}`}></div>

      <div className="pt-2">
        <p className={`text-xs font-semibold tracking-wider uppercase ${colors.date}`}>
          {date}
        </p>
        <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-2">
          {title}
        </h4>
        <p className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
