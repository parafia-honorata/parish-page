# Parafia Honorata

A modern parish website built with Next.js 15 and React 19.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19, TailwindCSS, Radix UI
- **State Management:** TanStack React Query
- **Theming:** next-themes (dark/light mode)
- **Package Manager:** pnpm

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/parafia-honorata.git
cd parafia-honorata

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The app runs on [http://localhost:3001](http://localhost:3001).

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server on port 3001 |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

## Project Structure

```
app/
├── page.tsx              # Home page
├── layout.tsx            # Root layout
├── providers.tsx         # App providers
├── intencje/             # Mass intentions
├── kolo-biblijne/        # Bible study group
├── linki/                # Links
├── o-parafii/            # About the parish
├── ogloszenia/           # Announcements
├── rozaniec-mezczyzn/    # Men's rosary
├── salka-parafialna/     # Parish hall
└── zywy-rozaniec/        # Living rosary
```

## License

Private project.
