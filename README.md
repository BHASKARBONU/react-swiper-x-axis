# Swiper X Axis

A scrollable, horizontally laid out chip/swiper component with optional icons and count bubbles. Supports smooth scrolling, hover-based scroll buttons, and styling props.

## Installation

```bash
npm install swiper-x-axis
```

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
| `handleClick` | `(value: string | number) => void` | Callback on item click |
| `textSize?` | `number` | Optional scaling factor |
| `activeChipColor?` | `string` | Color for active chip |
| `activeTextColor?` | `string` | Color for active chip text |
| `chipBgColor?` | `string` | Default chip background color |
| `chipTextColor?` | `string` | Default chip text color |

Use hex codes for all colors to ensure better performance and consistency.
## License

MIT
