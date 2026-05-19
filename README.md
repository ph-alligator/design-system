# @ph-alligator/ui

Shared design system for the micro-frontend platform (shadcn-style + Radix UI + Tailwind).

## Install

```bash
npm install @ph-alligator/ui
```

```ts
import '@ph-alligator/ui/styles.css';
import { Button, Card, Dialog, Tabs } from '@ph-alligator/ui';
```

## Components (v0.2.0)

| Category | Components |
|----------|------------|
| **Form** | Button, Input, Textarea, Label, Checkbox, Switch, Select |
| **Layout** | Card, Separator, Table |
| **Feedback** | Alert, Badge, Progress, Skeleton, Spinner |
| **Overlay** | Dialog, DropdownMenu, Popover, Tooltip |
| **Navigation** | Tabs, Breadcrumb, Pagination, Accordion |
| **Data** | Avatar |

## Tailwind

```js
import preset from '@ph-alligator/ui/tailwind.preset';
```

## Build

```bash
npm install
npm run build
npm publish --access public
```
