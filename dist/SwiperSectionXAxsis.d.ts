export interface CategoryItem {
    name: string;
    value: string | number;
    image?: string;
    count?: number;
}
interface SwiperSectionXAxsisProps {
    items: CategoryItem[];
    handleClick: (val: string | number) => void;
    textSize?: number;
    activeChipColor?: string;
    activeTextColor?: string;
    chipBgColor?: string;
    chipTextColor?: string;
}
export default function SwiperSectionXAxsis(props: SwiperSectionXAxsisProps): import("react/jsx-runtime").JSX.Element;
export {};
