# Swiper X Axis

A scrollable, horizontally laid out chip/swiper component with optional icons and count bubbles. Supports smooth scrolling, hover-based scroll buttons, and styling props.

## Installation

```bash
npm install swiper-x-axis
```

# Swiper X Axis

React component for horizontally scrollable category chips with optional arrows and icons.

📦 [View on NPM](https://www.npmjs.com/package/swiper-x-axis)  
🔗 [Source on GitHub](https://github.com/yourusername/swiper-x-axis)


## Usage

```tsx
import { SwiperSectionXAxsis } from 'swiper-x-axis';

<SwiperSectionXAxsis
  items={[
    { name: 'All', value: 'all' },
    { name: 'Images', value: 'img', image: '/img.png' },
    { name: 'Videos', value: 'vid', count: 10 },
  ]}
  handleClick={(val) => console.log(val)}
  textSize={1}
/>
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `items` | `CategoryItem[]` | Array of categories |
| `handleClick` | `(value: string) => void` | Callback on item click |
| `textSize?` | `number` | Optional scaling factor (max value 1)|
| `activeChipColor?` | `string` | Color for active chip |
| `activeTextColor?` | `string` | Color for active chip text |
| `chipBgColor?` | `string` | Default chip background color |
| `chipTextColor?` | `string` | Default chip text color |

Use hex codes for all colors to ensure better performance and consistency.
## License

MIT
