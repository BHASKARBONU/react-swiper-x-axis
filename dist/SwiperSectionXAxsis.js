"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState, useEffect } from 'react';
import SwiperSection from './SwiperSection';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
export default function SwiperSectionXAxsis(props) {
    const { items, handleClick, textSize = 1, activeChipColor, activeTextColor, chipBgColor, chipTextColor } = props;
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);
    const [isHoveringLeft, setIsHoveringLeft] = useState(false);
    const [isHoveringRight, setIsHoveringRight] = useState(false);
    const [activeItem, setActiveItem] = useState('');
    const scrollContainerRef = useRef(null);
    const handleScroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = Math.max(250, container.clientWidth * 0.6);
            if (direction === "left") {
                container.scrollTo({
                    left: container.scrollLeft - scrollAmount,
                    behavior: "smooth",
                });
            }
            else if (direction === "right") {
                container.scrollTo({
                    left: container.scrollLeft + scrollAmount,
                    behavior: "smooth",
                });
            }
        }
    };
    // Check scroll position and update button visibility
    const checkScrollPosition = () => {
        const container = scrollContainerRef.current;
        if (container) {
            // Show left button if scrolled right
            setShowLeftButton(container.scrollLeft > 10);
            // Show right button if there's more content to scroll
            const isAtEnd = Math.abs(container.scrollWidth - container.clientWidth - container.scrollLeft) < 10;
            setShowRightButton(!isAtEnd);
        }
    };
    // Scroll to active item if provided
    useEffect(() => {
        if (activeItem && scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const activeElement = container.querySelector(`[data-value="${activeItem}"]`);
            if (activeElement) {
                const containerLeft = container.getBoundingClientRect().left;
                const elementLeft = activeElement.getBoundingClientRect().left;
                const scrollLeft = elementLeft - containerLeft + container.scrollLeft - container.clientWidth / 2 + activeElement.offsetWidth / 2;
                container.scrollTo({
                    left: scrollLeft,
                    behavior: "smooth",
                });
            }
        }
    }, [activeItem]);
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            // Initial check
            checkScrollPosition();
            // Add scroll event listener
            container.addEventListener("scroll", checkScrollPosition);
            // Check on resize too
            window.addEventListener("resize", checkScrollPosition);
        }
        return () => {
            const container = scrollContainerRef.current;
            if (container) {
                container.removeEventListener("scroll", checkScrollPosition);
            }
            window.removeEventListener("resize", checkScrollPosition);
        };
    }, [items]);
    const handleClickSwiper = (value) => {
        handleClick(value);
        setActiveItem(value);
    };
    return (_jsx("div", { className: "w-full overflow-hidden bg-black text-white", children: _jsxs("div", { className: "flex justify-center items-center w-full py-1 px-2 relative", children: [(items === null || items === void 0 ? void 0 : items.length) > 0 && (_jsx("div", { className: `absolute left-0 z-30 flex items-center justify-center h-full px-1
                     ${showLeftButton ? "opacity-100" : "opacity-0 pointer-events-none"} 
                     transition-opacity duration-300`, onMouseEnter: () => setIsHoveringLeft(true), onMouseLeave: () => setIsHoveringLeft(false), children: _jsx("button", { onClick: () => handleScroll("left"), className: `flex items-center justify-center w-8 h-8 
                      ${isHoveringLeft ? "bg-gray-700" : "bg-transparent"} 
                      rounded-full transition-all duration-200`, "aria-label": "Scroll left", children: _jsx(FaChevronLeft, { className: "w-3 h-3 text-white" }) }) })), _jsxs("div", { className: "relative flex-1 overflow-hidden", children: [showLeftButton && (_jsx("div", { className: "absolute top-0 left-0 w-20 h-full z-20 \n                      bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none", style: {
                                boxShadow: "inset 10px 0 10px -10px rgba(0, 0, 0, 0.8)",
                            } })), _jsx(SwiperSection, { category: items, scrollContainerRef: scrollContainerRef, setSelectedCategory: handleClickSwiper, selectedTextSize: textSize, activeItem: activeItem, activeChipColor: activeChipColor, activeTextColor: activeTextColor, chipBgColor: chipBgColor, chipTextColor: chipTextColor }), showRightButton && (_jsx("div", { className: "absolute top-0 right-0 w-20 h-full z-20 \n                      bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none", style: {
                                boxShadow: "inset -10px 0 10px -10px rgba(0, 0, 0, 0.8)",
                            } }))] }), (items === null || items === void 0 ? void 0 : items.length) > 0 && (_jsx("div", { className: `absolute right-0 z-30 flex items-center justify-center h-full px-1
                     ${showRightButton ? "opacity-100" : "opacity-0 pointer-events-none"} 
                     transition-opacity duration-300`, onMouseEnter: () => setIsHoveringRight(true), onMouseLeave: () => setIsHoveringRight(false), children: _jsx("button", { onClick: () => handleScroll("right"), className: `flex items-center justify-center w-8 h-8 
                      ${isHoveringRight ? "bg-gray-700" : "bg-transparent"} 
                      rounded-full transition-all duration-200`, "aria-label": "Scroll right", children: _jsx(FaChevronRight, { className: "w-3 h-3 text-white" }) }) }))] }) }));
}
