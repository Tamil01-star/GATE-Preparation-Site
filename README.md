# GATE Preparation Hub 🎓

> **A Complete, Modern, Responsive Personal GATE Examination Preparation Platform**  
> Designed specifically for structured GATE preparation following the official syllabus hierarchy.

Official Examination Portal: [https://gate2027.iitm.ac.in/](https://gate2027.iitm.ac.in/) (IIT Madras)

---

## 🌟 Highlights & Features

- **Orderly Official Hierarchy**:  
  $$\text{GATE} \longrightarrow \text{Subject} \longrightarrow \text{Unit} \longrightarrow \text{Topic} \longrightarrow \text{Subtopic} \longrightarrow \text{Notes} \longrightarrow \text{Formulas} \longrightarrow \text{PYQs} \longrightarrow \text{Answers} \longrightarrow \text{Explanations} \longrightarrow \text{Practice} \longrightarrow \text{Revision}$$
- **Academic Dual-Color Aesthetic**:
  - Primary Green: `#78C99A`
  - Dark Green: `#26734D`
  - Light Green Background: `#F1FBF5`
  - Pure White: `#FFFFFF`
  - Dark Mode supported with green accents.
- **12-Section Digital Textbook Notes**:
  1. Topic Introduction
  2. Core Concepts
  3. Important Definitions
  4. Detailed Explanation & Analysis
  5. Important Formulas & Governing Laws
  6. Important Architectural Diagrams
  7. Shortcuts / Tricks (Time Savers)
  8. Common Mistakes & Exam Traps
  9. GATE-Level High-Yield Points
  10. Related Previous Year Questions
  11. Practice Questions
  12. Quick Revision Summary (Flashcards)
- **Question-Wise Detailed Solutions**:
  - Individual cards for every question.
  - "Show Answer" toggle (answers hidden by default).
  - Step-by-step mathematical derivations with clear steps ($1, 2, 3\dots$).
- **Previous Year Question Papers (PYQs)**:
  - 2025, 2024, 2023, 2022, 2021, 2020, 2019 papers with marks, questions, duration, and subject weightage.
  - PDF papers and solution keys stored in `public/papers/`.
- **Multi-Filter Question Bank**:
  - Filter questions by Year, Subject, Topic, Difficulty (Easy/Medium/Hard), Type (MCQ/NAT/MSQ), Marks (1M/2M), and Solved status.
- **Chapter-Wise & Topic-Wise Formula Sheets**:
  - Complete mathematical laws with variables, when to use, validity conditions, and related PYQs.
- **Practice Test Simulator**:
  - Timed mock exam with question palette, review flagging, negative marking, and detailed scorecards.
- **High-Yield Revision Mode**:
  - Distraction-free review mode with quick recall cards.
- **Global Search (`Ctrl+K`) & Categorized Bookmarks**:
  - Instant indexing across notes, formulas, questions, and topics.
- **Offline File Organization**:
  - `notes_library/`: Offline markdown textbook notes.
  - `formula_sheets/`: Offline chapter-wise formula handbooks.
  - `public/papers/`: Authentic GATE question papers and solutions.

---

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Lucide Icons
- **Math & Formatting**: JetBrains Mono, KaTeX math blocks
- **State & Storage**: AppContext with LocalStorage persistence & JSON export/import

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Run Production Preview
```bash
npm run preview
```

---

## 📂 Repository Structure

```
├── notes_library/                  # Offline markdown textbook notes by subject
│   ├── digital_circuits/
│   ├── engineering_mathematics/
│   └── signals_and_systems/
├── formula_sheets/                 # Chapter-wise formula reference sheets
├── public/
│   ├── favicon.svg
│   └── papers/                     # Authentic GATE EC question paper PDFs & solutions
├── src/
│   ├── components/
│   │   ├── common/                 # Header, Sidebar, Breadcrumbs, ProgressBar, BookmarkButton
│   │   └── views/                  # Dashboard, Syllabus, Subjects, Notes, PYQ, QuestionBank, Formulas, Practice, Revision, Admin...
│   ├── context/                    # App state & LocalStorage engine
│   ├── data/                       # Comprehensive GATE syllabus, notes, formulas & questions seed data
│   ├── types/                      # TypeScript schemas
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

*Personal private study repository. Targeted for GATE 2026/2027.*
