# Button

Use the `<Button>` component whenever a user needs to trigger an action via a clickable button.

## Import

```tsx
import { Button } from '@pawel-kuznik/react-faceplate';
```

## Basic usage

```tsx
<Button label="Save" onClick={() => handleSave()} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Text displayed inside the button |
| `icon` | `ReactNode` | — | Optional icon element (24×24 px for normal, 16×16 px for mini) |
| `color` | `"default" \| PaletteColor` | `"default"` | Button color |
| `size` | `"normal" \| "mini"` | `"normal"` | Normal for forms; mini for compact UI (e.g. close buttons) |
| `block` | `boolean` | `false` | Stretch the button to full container width |
| `onClick` | `() => void` | — | Called when the user clicks the button |
| `submit` | `boolean` | `true` | When `true` the button acts as a form submit button |

## Examples

```tsx
// Colored button that does not submit a form
<Button label="Delete" color="red" submit={false} onClick={() => handleDelete()} />

// Full-width button
<Button label="Confirm" color="green" block />

// Mini button with an icon and no label
<Button size="mini" icon={<CloseIcon />} onClick={() => handleClose()} />
```
