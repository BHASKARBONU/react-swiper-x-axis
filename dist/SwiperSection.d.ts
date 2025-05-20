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
export default function SwiperSection({ category, scrollContainerRef, setSelectedCategory, selectedTextSize, activeItem, activeChipColor, activeTextColor, chipBgColor, chipTextColor }: SwiperSectionProps): import("react/jsx-runtime").JSX.Element;
export {};
