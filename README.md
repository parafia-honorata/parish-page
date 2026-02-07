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
git clone https://github.com/parafia-honorata/parish-page.git
cd parish-page

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

## Deployment

This project is configured for automatic deployment to GitHub Pages.

### Setup GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under "Build and deployment", select **GitHub Actions** as the source

The site will automatically deploy when you push to the `master` branch.

**Live URL:** `https://parafia-honorata.github.io/parish-page`

## License

Private project.
