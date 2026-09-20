import React, { useState } from 'react';
import {
  Clock,
  Calendar,
  FileText,
  Award,
  BarChart,
  Download,
  ExternalLink,
  ChevronRight,
  Eye,
  CheckCircle2,
  ListOrdered
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { QuestionPaper } from '../../types';
import { QuestionCard } from './QuestionCard';
import { Breadcrumbs } from '../common/Breadcrumbs';

export const PYQPapersView: React.FC = () => {
  const {
    papers,
    questions,
    navigateTo,
    routeParams
  } = useApp();

  // Selected paper state (default to 2025 or matching routeParam)
  const initialYear = routeParams.paperYear || 2025;
  const [selectedYear, setSelectedYear] = useState<number>(initialYear);

  const activePaper = papers.find(p => p.year === selectedYear) || papers[0];
  const paperQuestions = questions.filter(q => q.year === activePaper.year);

  // View state: 'overview' | 'questions' | 'solutions'
  const [paperTab, setPaperTab] = useState<'overview' | 'questions' | 'solutions'>('overview');

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <Breadcrumbs
        items={[
          { label: 'Previous Year Papers', route: 'pyq' },
          { label: `GATE ${activePaper.year}` }
        ]}
      />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-brand-border dark:border-surface-borderDark">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2.5">
            <Clock className="text-brand-dark dark:text-brand-primary" size={24} />
            Previous Year Question Papers (PYQs)
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Complete authentic GATE question papers organized year-by-year with step-by-step verified solutions and subject weightage.
          </p>
        </div>

        {/* Official Portal Notice */}
        <a
          href="https://gate2027.iitm.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-soft text-brand-dark dark:bg-brand-dark/20 dark:text-brand-primary text-xs font-semibold hover:bg-brand-primary/20 transition-colors"
        >
          <span>IIT Madras GATE 2027 Portal</span>
          <ExternalLink size={12} />
        </a>
      </div>

      {/* Year Timeline Selector (Section 9) */}
      <div className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-4 border border-brand-border dark:border-surface-borderDark shadow-academic">
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3 px-1">
          Select Exam Year
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {papers.map(p => {
            const isSelected = p.year === selectedYear;
            return (
              <button
                key={p.id}
                onClick={() => {
                  setSelectedYear(p.year);
                  setPaperTab('overview');
                }}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  isSelected
                    ? 'bg-brand-dark text-white shadow-sm ring-2 ring-brand-primary'
                    : 'bg-brand-light dark:bg-surface-dark text-slate-600 dark:text-slate-300 hover:bg-brand-soft border border-brand-border dark:border-surface-borderDark'
                }`}
              >
                GATE {p.year}
              </button>
            );
          })}
        </div>
      </div>

      {/* Paper Header Card (Section 10) */}
      <div className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-6 border border-brand-border dark:border-surface-borderDark shadow-academic space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-brand-soft dark:border-surface-borderDark">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-brand-soft dark:bg-brand-dark/30 text-brand-dark dark:text-brand-primary text-xs font-mono font-bold mb-2">
              {activePaper.paperCode} &bull; GATE {activePaper.year}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">
              {activePaper.paperName}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-2">
              <span>Duration: <strong>{activePaper.durationMinutes} Minutes (3 Hours)</strong></span>
              <span>&bull;</span>
              <span>Total Questions: <strong>{activePaper.totalQuestions}</strong></span>
              <span>&bull;</span>
              <span>Maximum Marks: <strong>{activePaper.totalMarks} Marks</strong></span>
            </div>
          </div>

          {/* PDF Downloads & Links */}
          <div className="flex items-center gap-2.5 flex-wrap">
            {activePaper.pdfUrl && (
              <a
                href={activePaper.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-brand-soft text-brand-dark dark:bg-brand-dark/30 dark:text-brand-primary hover:bg-brand-primary/30 text-xs font-semibold transition-colors border border-brand-primary/30"
              >
                <Download size={14} />
                <span>Original Question Paper PDF</span>
              </a>
            )}

            {activePaper.solutionPdfUrl && (
              <a
                href={activePaper.solutionPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-surface-dark border border-brand-border dark:border-surface-borderDark text-slate-700 dark:text-slate-200 hover:border-brand-primary text-xs font-semibold transition-colors"
              >
                <FileText size={14} />
                <span>Official Key / Solution PDF</span>
              </a>
            )}
          </div>
        </div>

        {/* Paper Navigation Action Buttons (Section 10) */}
        <div className="flex items-center gap-2 border-b border-brand-soft dark:border-surface-borderDark pb-4">
          <button
            onClick={() => setPaperTab('overview')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
              paperTab === 'overview'
                ? 'bg-brand-dark text-white'
                : 'bg-brand-light dark:bg-surface-dark text-slate-600 dark:text-slate-300 hover:bg-brand-soft'
            }`}
          >
            Exam Structure & Subject Distribution
          </button>

          <button
            onClick={() => setPaperTab('questions')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 ${
              paperTab === 'questions'
                ? 'bg-brand-dark text-white'
                : 'bg-brand-light dark:bg-surface-dark text-slate-600 dark:text-slate-300 hover:bg-brand-soft'
            }`}
          >
            <Eye size={14} />
            <span>View Solved Questions ({paperQuestions.length})</span>
          </button>
        </div>

        {/* Tab Content: Exam Structure & Distribution */}
        {paperTab === 'overview' && (
          <div className="space-y-6">
            {/* Question Types Grid */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Question Pattern Breakdown
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activePaper.questionTypes.map(qt => (
                  <div key={qt.type} className="p-4 rounded-xl bg-brand-light/50 dark:bg-surface-dark border border-brand-soft text-center">
                    <div className="text-xl font-bold text-slate-800 dark:text-slate-100">{qt.count}</div>
                    <div className="text-xs font-semibold text-brand-dark dark:text-brand-primary mt-0.5">{qt.type}</div>
                    <div className="text-[10px] text-slate-400 mt-1">
                      {qt.type === 'MCQ' ? 'Negative marking (1/3rd)' : 'Zero negative marking'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subject Distribution Table */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Subject-Wise Marks Distribution (Weightage)
              </h3>
              <div className="overflow-x-auto rounded-xl border border-brand-border dark:border-surface-borderDark">
                <table className="w-full text-left text-xs">
                  <thead className="bg-brand-soft/50 dark:bg-surface-dark text-brand-dark dark:text-brand-primary font-bold uppercase text-[10px]">
                    <tr>
                      <th className="p-3">Subject</th>
                      <th className="p-3 text-center">Question Count</th>
                      <th className="p-3 text-center">Marks Allocated</th>
                      <th className="p-3 text-right">Relative Weightage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-soft dark:divide-surface-borderDark text-slate-700 dark:text-slate-300">
                    {activePaper.subjectDistribution.map(dist => (
                      <tr key={dist.subjectName} className="hover:bg-brand-light/40 dark:hover:bg-surface-dark/40">
                        <td className="p-3 font-semibold">{dist.subjectName}</td>
                        <td className="p-3 text-center font-mono">{dist.questionCount}</td>
                        <td className="p-3 text-center font-mono font-bold text-brand-dark dark:text-brand-primary">
                          {dist.marks} Marks
                        </td>
                        <td className="p-3 text-right font-mono">{dist.marks}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2 text-center sm:text-left">
              <button
                onClick={() => setPaperTab('questions')}
                className="px-6 py-3 rounded-xl bg-brand-dark hover:bg-brand-hover text-white text-xs font-semibold inline-flex items-center gap-2 transition-colors shadow-sm"
              >
                <span>Practice Questions from GATE {activePaper.year}</span>
                <ChevronRight size={15} />
              </button>
            </div>
          </div>
        )}

        {/* Tab Content: Question Stream */}
        {paperTab === 'questions' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-brand-soft text-xs text-slate-500">
              <span>Showing questions from GATE {activePaper.year}</span>
              <button
                onClick={() => navigateTo('question-bank', { paperYear: activePaper.year })}
                className="text-brand-dark dark:text-brand-primary font-semibold hover:underline"
              >
                Open in Full Filter Bank &rarr;
              </button>
            </div>

            {paperQuestions.length === 0 ? (
              <div className="p-10 rounded-xl bg-brand-light dark:bg-surface-dark text-center text-xs text-slate-500">
                No interactive questions digitized yet for this year. You can view the original PDF above or add questions via Settings & Admin.
              </div>
            ) : (
              paperQuestions.map((question, idx) => (
                <QuestionCard
                  key={question.id}
                  question={question}
                  questionIndex={idx}
                  totalQuestions={paperQuestions.length}
                />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
