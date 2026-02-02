# OOP Course Website - FIIT STU

Course documentation website for **Objektovo orientované programovanie** (Object-Oriented Programming) at FIIT STU. Built with [Next.js](https://nextjs.org/) and [Fumadocs](https://fumadocs.dev).

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm, pnpm, or yarn package manager

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) - you'll be redirected to `/docs`.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Content Structure

All course content is in the `content/docs/` folder, organized by language:

```
content/docs/
├── sk/           # Slovak content (default)
│   ├── index.mdx
│   ├── info.mdx
│   ├── materials.mdx
│   ├── grading.mdx
│   ├── lectures/
│   │   ├── meta.json
│   │   ├── lecture-01.mdx
│   │   ├── lecture-02.mdx
│   │   └── ...
│   ├── seminars/
│   │   ├── meta.json
│   │   ├── seminar-01.mdx
│   │   └── ...
│   └── assignments/
│       ├── meta.json
│       ├── specification.mdx
│       ├── checkpoint.mdx
│       └── final.mdx
│
└── en/           # English translations
    └── (same structure as sk/)
```

---

## ✍️ Adding/Updating Content

### Adding a New Lecture

1. **Create the MDX file** in both languages:
    - `content/docs/sk/lectures/lecture-XX.mdx`
    - `content/docs/en/lectures/lecture-XX.mdx`

2. **Add frontmatter** at the top of each file:

    ```mdx
    ---
    title: Your Lecture Title
    description: Brief description of the lecture
    ---

    # Your Lecture Title

    Your content here...
    ```

3. **Update navigation** in both `meta.json` files:
    - `content/docs/sk/lectures/meta.json`
    - `content/docs/en/lectures/meta.json`

    Add `"lecture-XX"` to the `pages` array:

    ```json
    {
        "title": "Prednášky",
        "icon": "Presentation",
        "defaultOpen": false,
        "pages": [
            "lecture-01",
            "lecture-02",
            "lecture-XX" // Add here
        ]
    }
    ```

### Adding a New Seminar

Same process as lectures, but in the `seminars/` folder.

**Optional - Time-gating seminars:**
Add `availableFrom` to frontmatter to control when content becomes visible:

```mdx
---
title: Seminar 3
description: Advanced topics
availableFrom: '2026-03-15' # YYYY-MM-DD format
---
```

_(Note: Currently not enforced, but prepared for future implementation)_

### Updating Existing Content

Simply edit the `.mdx` file:

- Changes are hot-reloaded in dev mode
- Use standard Markdown syntax
- MDX supports React components if needed

### Adding Icons

The `meta.json` files support [Lucide icons](https://lucide.dev/icons). Change the `icon` field:

```json
{
    "title": "Your Section",
    "icon": "BookOpen" // Any Lucide icon name
}
```

---

## 🌍 Internationalization (i18n)

The site supports **Slovak (SK)** and **English (EN)**:

- **Slovak**: Default language, accessed at `/docs`
- **English**: Accessed at `/en/docs`
- Language switcher is in the sidebar footer

### Adding Content in Both Languages

1. Create the same file in both `content/docs/sk/` and `content/docs/en/`
2. Translate the content (frontmatter + body)
3. Update both `meta.json` files with the same page reference

**Example:**

```
✅ content/docs/sk/info.mdx
✅ content/docs/en/info.mdx
✅ Both added to respective meta.json files
```

---

## 📝 MDX Features

MDX files support:

- **Markdown** - headings, lists, links, images, code blocks
- **Frontmatter** - metadata at the top of files
- **React Components** - import and use components (advanced)

### Example MDX File

````mdx
---
title: Introduction to OOP
description: Learn the basics of object-oriented programming
---

# Introduction to OOP

This lecture covers the fundamental concepts:

1. **Classes and Objects**
2. **Inheritance**
3. **Polymorphism**

## Code Example

```java
public class Student {
    private String name;

    public Student(String name) {
        this.name = name;
    }
}
```
````

```

For more: [Fumadocs MDX Guide](https://fumadocs.dev/docs/mdx)

---

## 🔧 Project Structure

Key files and folders:

| Path | Description |
|------|-------------|
| `content/docs/` | All course content (MDX files) |
| `src/app/docs/` | Documentation page routes |
| `src/app/[lang]/docs/` | Internationalized routes (English) |
| `src/components/` | Reusable UI components |
| `src/lib/source.ts` | Content loading configuration |
| `src/lib/i18n.ts` | Language configuration |
| `source.config.ts` | Fumadocs MDX configuration |

---

## 🛠️ Common Tasks

### Change Site Title
Edit `src/lib/layout.shared.tsx` - modify the `title` field.

### Modify Sidebar Navigation
Edit `content/docs/[sk|en]/meta.json` files to add/remove/reorder pages.

### Change Color Theme
Edit `src/app/global.css` - modify CSS variables under `:root`.

### Add New Page Sections
1. Create a new folder in `content/docs/sk/your-section/`
2. Add `meta.json` with section metadata
3. Add page files (`.mdx`)
4. Reference in parent `meta.json`: `"...your-section"`

---

## 🐛 Troubleshooting

### Content not showing up?
- Check that the file is referenced in `meta.json`
- Verify frontmatter is valid YAML
- Restart dev server: `npm run dev`

### Build errors?
- Check for syntax errors in MDX files
- Ensure all referenced files exist
- Verify `meta.json` files are valid JSON

### i18n issues?
- Ensure content exists in both `sk/` and `en/` folders
- Check that filenames match exactly
- Verify both `meta.json` files are updated

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Fumadocs Documentation](https://fumadocs.dev)
- [MDX Documentation](https://mdxjs.com)
- [Lucide Icons](https://lucide.dev/icons)

---

## 👥 Contributing

To contribute content:

1. Clone the repository
2. Create a new branch: `git checkout -b add-lecture-XX`
3. Add/update content in both `sk/` and `en/` folders
4. Test locally: `npm run dev`
5. Build to verify: `npm run build`
6. Commit and push: `git push origin add-lecture-XX`
7. Create a pull request

---

**Questions?** Contact the course coordinators or check the [Fumadocs documentation](https://fumadocs.dev).
```
