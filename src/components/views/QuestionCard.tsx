import React, { useState } from 'react';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  Eye,
  EyeOff,
  Lightbulb,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Calculator,
  Bookmark
} from 'lucide-react';
import { Question } from '../../types';
import { useApp } from '../../context/AppContext';
import { BookmarkButton } from '../common/BookmarkButton';

interface QuestionCardProps {
  question: Question;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
  questionIndex?: number;
  totalQuestions?: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onPrev,
  onNext,
  hasPrev = false,
  hasNext = false,
  questionIndex,
  totalQuestions
}) => {
  const { userProgress, recordQuestionAttempt } = useApp();

  // Hidden answer state (initially false as strictly requested!)
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  // User selection state
  const previousAttempt = userProgress.solvedQuestions[question.id];
  const [selectedOption, setSelectedOption] = useState<string>(previousAttempt ? previousAttempt.selected : '');
  const [natInput, setNatInput] = useState<string>(previousAttempt ? previousAttempt.selected : '');
  const [attemptSubmitted, setAttemptSubmitted] = useState<boolean>(!!previousAttempt);

  const handleOptionSelect = (label: string) => {
    if (attemptSubmitted) return;
    setSelectedOption(label);
  };

  const handleSubmitAnswer = () => {
    const answerProvided = question.type === 'NAT' ? natInput.trim() : selectedOption;
    if (!answerProvided) return;

    let isCorrect = false;
    if (question.type === 'NAT') {
      const numVal = parseFloat(answerProvided);
      if (question.natRange) {
        isCorrect = numVal >= question.natRange.min && numVal <= question.natRange.max;
      } else {
        isCorrect = answerProvided === question.correctAnswer;
      }
    } else {
      isCorrect = answerProvided.toUpperCase() === question.correctAnswer.toUpperCase();
    }

    setAttemptSubmitted(true);
    recordQuestionAttempt(question.id, answerProvided, isCorrect);
    setShowAnswer(true);
  };

  const difficultyColors = {
    Easy: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border-emerald-200',
    Medium: 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border-amber-200',
    Hard: 'bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300 border-red-200'
  }[question.difficulty];

  return (
    <div className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-5 sm:p-7 border border-brand-border dark:border-surface-borderDark shadow-academic space-y-6">
      {/* Question Card Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-brand-soft dark:border-surface-borderDark">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-brand-soft dark:bg-brand-dark/30 text-brand-dark dark:text-brand-primary">
            {question.sourcePaper}
          </span>
          <span className="text-xs font-bold text-slate-800 dark:text-slate-100">
            Q{question.questionNumber}
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold border bg-white dark:bg-surface-dark text-slate-600 dark:text-slate-300">
            {question.type}
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-brand-light text-brand-dark dark:bg-surface-dark dark:text-brand-accent">
            {question.marks} {question.marks === 1 ? 'Mark' : 'Marks'}
          </span>
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold border ${difficultyColors}`}>
            {question.difficulty}
          </span>
        </div>

        <div className="flex items-center gap-2 justify-between sm:justify-end">
          {questionIndex !== undefined && totalQuestions !== undefined && (
            <span className="text-xs text-slate-400 font-mono">
              {questionIndex + 1} of {totalQuestions}
            </span>
          )}
          <BookmarkButton
            type="question"
            refId={question.id}
            title={`${question.sourcePaper} Q${question.questionNumber}`}
            subtitle={`${question.subjectName} &bull; ${question.conceptTested}`}
          />
        </div>
      </div>

      {/* Concept Tested Pill */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-light dark:bg-surface-dark border border-brand-soft text-[11px] text-brand-dark dark:text-brand-primary font-medium">
        <Lightbulb size={13} />
        <span>Concept: {question.conceptTested}</span>
      </div>

      {/* Question Text */}
      <div className="text-sm sm:text-base font-normal text-slate-800 dark:text-slate-100 leading-relaxed">
        {question.questionText}
      </div>

      {/* Options or NAT Input Box */}
      {question.type !== 'NAT' && question.options && (
        <div className="space-y-2.5 pt-2">
          {question.options.map(opt => {
            const isSelected = selectedOption === opt.label;
            const isCorrectOption = opt.label === question.correctAnswer;
            let optionStyles = 'bg-white dark:bg-surface-dark border-slate-200 dark:border-surface-borderDark hover:border-brand-primary text-slate-700 dark:text-slate-200';

            if (attemptSubmitted || showAnswer) {
              if (isCorrectOption) {
                optionStyles = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-100 font-medium ring-1 ring-emerald-500';
              } else if (isSelected && !isCorrectOption) {
                optionStyles = 'bg-red-50 dark:bg-red-950/40 border-red-400 text-red-900 dark:text-red-100';
              }
            } else if (isSelected) {
              optionStyles = 'bg-brand-soft dark:bg-brand-dark/20 border-brand-primary text-brand-dark dark:text-brand-primary font-medium ring-1 ring-brand-primary';
            }

            return (
              <div
                key={opt.label}
                onClick={() => handleOptionSelect(opt.label)}
                className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all text-xs sm:text-sm ${optionStyles}`}
              >
                <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  {opt.label}
                </span>
                <span className="flex-1 leading-snug pt-0.5">{opt.text}</span>
                {showAnswer && isCorrectOption && (
                  <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                )}
                {showAnswer && isSelected && !isCorrectOption && (
                  <XCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Numerical Answer Type (NAT) Input */}
      {question.type === 'NAT' && (
        <div className="pt-2">
          <label className="block text-xs font-semibold text-slate-500 mb-1.5">
            Numerical Answer (NAT):
          </label>
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={natInput}
              disabled={attemptSubmitted}
              onChange={e => setNatInput(e.target.value)}
              placeholder="Enter numerical value..."
              className="max-w-xs px-4 py-2 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-borderDark text-sm font-mono focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-hidden"
            />
            {!attemptSubmitted && (
              <button
                onClick={handleSubmitAnswer}
                disabled={!natInput.trim()}
                className="px-4 py-2 rounded-xl bg-brand-dark hover:bg-brand-hover disabled:opacity-50 text-white text-xs font-semibold transition-colors"
              >
                Submit NAT
              </button>
            )}
          </div>
          {question.natRange && showAnswer && (
            <p className="text-[11px] text-slate-500 mt-1">
              Accepted Official Range: [{question.natRange.min} to {question.natRange.max}]
            </p>
          )}
        </div>
      )}

      {/* Action Strip: Check Answer & Show/Hide Answer Button */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-brand-soft dark:border-surface-borderDark">
        <div className="flex items-center gap-2">
          {!attemptSubmitted && question.type !== 'NAT' && (
            <button
              onClick={handleSubmitAnswer}
              disabled={!selectedOption}
              className="px-4 py-2 rounded-xl bg-brand-dark hover:bg-brand-hover disabled:opacity-50 text-white text-xs font-semibold transition-colors shadow-xs"
            >
              Submit Answer
            </button>
          )}

          {/* Show Answer Toggle Button (Answer initially hidden!) */}
          <button
            onClick={() => setShowAnswer(prev => !prev)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand-light dark:bg-surface-dark hover:bg-brand-soft border border-brand-border dark:border-surface-borderDark text-brand-dark dark:text-brand-primary text-xs font-semibold transition-colors"
          >
            {showAnswer ? <EyeOff size={15} /> : <Eye size={15} />}
            <span>{showAnswer ? 'Hide Detailed Solution' : 'Show Answer & Detailed Steps'}</span>
          </button>
        </div>

        {/* Previous / Next Navigation */}
        <div className="flex items-center gap-2">
          {hasPrev && (
            <button
              onClick={onPrev}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-surface-borderDark text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-primary transition-colors"
            >
              <ChevronLeft size={14} />
              <span>Previous</span>
            </button>
          )}
          {hasNext && (
            <button
              onClick={onNext}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-surface-borderDark text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-primary transition-colors"
            >
              <span>Next</span>
              <ChevronRight size={14} />
            </button>
          )}
        </div>
      </div>

      {/* QUESTION-WISE DETAILED SOLUTION (Hidden by default, opened on toggle) */}
      {showAnswer && (
        <div className="p-5 sm:p-6 rounded-2xl bg-brand-soft/40 dark:bg-surface-dark border border-brand-primary/30 space-y-5 animate-in fade-in duration-300">
          {/* Answer Header */}
          <div className="flex items-center justify-between pb-3 border-b border-brand-soft dark:border-surface-borderDark">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Correct Answer:</span>
              <span className="text-sm font-mono font-bold px-2.5 py-1 rounded bg-brand-primary text-slate-900 shadow-xs">
                {question.correctAnswer}
              </span>
            </div>
            <div className="text-xs text-brand-dark dark:text-brand-primary font-semibold">
              Marks: +{question.marks}
            </div>
          </div>

          {/* Detailed Explanation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark dark:text-brand-primary mb-1.5">
              Detailed Explanation
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {question.detailedExplanation}
            </p>
          </div>

          {/* Clear Necessary Steps (Section 11 requirement) */}
          {question.steps && question.steps.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark dark:text-brand-primary">
                Step-by-Step Mathematical Derivation:
              </h4>
              <div className="space-y-2">
                {question.steps.map((step, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white dark:bg-surface-cardDark border border-slate-100 dark:border-surface-borderDark text-xs text-slate-700 dark:text-slate-300 font-mono whitespace-pre-line leading-relaxed">
                    {step}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Common Exam Pitfall */}
          {question.commonPitfall && (
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30 text-xs text-slate-700 dark:text-slate-300">
              <AlertTriangle size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-amber-800 dark:text-amber-300 font-semibold block mb-0.5">Common GATE Trap:</strong>
                <span>{question.commonPitfall}</span>
              </div>
            </div>
          )}

          {/* Related Governing Formula */}
          {question.relatedFormula && (
            <div className="p-3 rounded-xl bg-white dark:bg-surface-cardDark border border-brand-soft dark:border-surface-borderDark flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Calculator size={14} className="text-brand-dark dark:text-brand-primary" />
                <span className="font-semibold text-slate-700 dark:text-slate-300">Governing Formula:</span>
                <code className="font-mono text-brand-dark dark:text-brand-primary">{question.relatedFormula}</code>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
