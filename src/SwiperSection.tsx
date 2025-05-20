import React from 'react';

interface CategoryItem {
  name: string;
  value: string | number;
  image?: string;
  count?: number;
}

interface SwiperSectionProps {
  category: CategoryItem[];
  scrollContainerRef: React.RefObject<HTMLDivElement> | null;
  setSelectedCategory: (value: string | number) => void;
  selectedTextSize?: number;
  activeItem: string | number;
  activeChipColor?: string;
  activeTextColor?: string;
  chipBgColor?: string;
  chipTextColor?: string;
}

export default function SwiperSection({
  category,
  scrollContainerRef,
  setSelectedCategory,
  selectedTextSize = 1,
  activeItem,
  activeChipColor,
  activeTextColor,
  chipBgColor,
  chipTextColor
}: SwiperSectionProps) {

  const fontSize = `${Math.max(0.75, selectedTextSize) * 0.875}rem`;
  const maxWidthPerItem = `${Math.max(80, selectedTextSize * 150)}px`; // make max-width scale too
  const chipColor = chipBgColor || '#ffff'
  const chipTextCr = chipTextColor || "#000000"

  return category?.length > 0 ? (
    <div
      ref={scrollContainerRef}
      className="flex w-full whitespace-nowrap select-none hide-scrollbar py-2 overflow-x-auto"
    >
      {category.map((item: CategoryItem, idx: number) => {
        const isActive = activeItem === item.value;
        const isActiveColor = activeChipColor ? activeChipColor : '#cdebc8';
        const isActiveTextColor = activeTextColor ? activeTextColor : chipTextCr

        return (
          <div
            key={`${item.name}-${idx}`}
            className={`flex items-center px-2 py-2 mr-2 rounded-full cursor-pointer`}
            style={{
              fontSize,
              maxWidth: maxWidthPerItem,
              backgroundColor: isActive ? isActiveColor : chipColor,
              color: isActive ? isActiveTextColor : chipTextCr,
            }}
            title={item.name}
            onClick={() => setSelectedCategory(item.value)}
          >
            {item.image && (
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="object-cover rounded-full border border-gray-600 mr-2 flex-shrink-0"
                style={{
                  width: `${Math.max(24, selectedTextSize * 20)}px`,
                  height: `${Math.max(24, selectedTextSize * 20)}px`,
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/placeholder.svg";
                }}
              />
            )}
            <span className="truncate overflow-hidden whitespace-nowrap" style={{ maxWidth: '70px' }}>
              {item.name}
            </span>
            {item?.count &&
              <span className="ml-2 inline-flex items-center justify-center w-5 h-5 text-sm font-medium text-white bg-red-500 rounded-full">
                {item?.count}
              </span>

            }
          </div>
        );
      })}
    </div>
  ) : (
    <p className="text-gray-400 dark:text-gray-600">List key not found</p>
  );
}
