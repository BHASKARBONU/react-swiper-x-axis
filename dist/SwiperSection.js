import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function SwiperSection({ category, scrollContainerRef, setSelectedCategory, selectedTextSize = 1, activeItem, activeChipColor, activeTextColor, chipBgColor, chipTextColor }) {
    const fontSize = `${Math.max(0.75, selectedTextSize) * 0.875}rem`;
    const maxWidthPerItem = `${Math.max(80, selectedTextSize * 150)}px`; // make max-width scale too
    const chipColor = chipBgColor || '#ffff';
    const chipTextCr = chipTextColor || "#000000";
    return (category === null || category === void 0 ? void 0 : category.length) > 0 ? (_jsx("div", { ref: scrollContainerRef, className: "flex w-full whitespace-nowrap select-none hide-scrollbar py-2 overflow-x-auto", children: category.map((item, idx) => {
            const isActive = activeItem === item.value;
            const isActiveColor = activeChipColor ? activeChipColor : '#cdebc8';
            const isActiveTextColor = activeTextColor ? activeTextColor : chipTextCr;
            return (_jsxs("div", { className: `flex items-center px-2 py-2 mr-2 rounded-full cursor-pointer`, style: {
                    fontSize,
                    maxWidth: maxWidthPerItem,
                    backgroundColor: isActive ? isActiveColor : chipColor,
                    color: isActive ? isActiveTextColor : chipTextCr,
                }, title: item.name, onClick: () => setSelectedCategory(item.value), children: [item.image && (_jsx("img", { src: item.image || "/placeholder.svg", alt: item.name, className: "object-cover rounded-full border border-gray-600 mr-2 flex-shrink-0", style: {
                            width: `${Math.max(24, selectedTextSize * 20)}px`,
                            height: `${Math.max(24, selectedTextSize * 20)}px`,
                        }, onError: (e) => {
                            e.target.src = "/placeholder.svg";
                        } })), _jsx("span", { className: "truncate overflow-hidden whitespace-nowrap", style: { maxWidth: '70px' }, children: item.name }), (item === null || item === void 0 ? void 0 : item.count) &&
                        _jsx("span", { className: "ml-2 inline-flex items-center justify-center w-5 h-5 text-sm font-medium text-white bg-red-500 rounded-full", children: item === null || item === void 0 ? void 0 : item.count })] }, `${item.name}-${idx}`));
        }) })) : (_jsx("p", { className: "text-gray-400 dark:text-gray-600", children: "List key not found" }));
}
