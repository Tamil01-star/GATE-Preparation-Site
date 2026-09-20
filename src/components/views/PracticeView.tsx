import React, { useState, useEffect } from 'react';
import {
  HelpCircle,
  Clock,
  CheckCircle2,
  XCircle,
  Flag,
  RotateCcw,
  Award,
  ArrowRight,
  ArrowLeft,
  Eye,
  BarChart,
  ListOrdered
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Question } from '../../types';
import { Breadcrumbs } from '../common/Breadcrumbs';

export const PracticeView: React.FC = () => {
  const {
    subjects,
    topics,
    questions,
    recordQuestionAttempt,
    navigateTo,
    routeParams
  } = useApp();

  // Setup phase vs Active test phase vs Scorecard phase
  const [testStage, setTestStage] = useState<'setup' | 'active' | 'result'>('setup');

  // Setup Config
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(routeParams.subjectId || 'subj-digital');
  const [selectedTopicId, setSelectedTopicId] = useState<string>(routeParams.topicId || 'all');
  const [questionCount, setQuestionCount] = useState<number>(5);

  // Active Test State
  const [testQuestions, setTestQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(300);
  const [totalDurationSeconds, setTotalDurationSeconds] = useState<number>(300);

  // NAT input state for current question
  const [natInput, setNatInput] = useState<string>('');

  const currentSubject = subjects.find(s => s.id === selectedSubjectId) || subjects[0];
  const subjectTopics = topics.filter(t => t.subjectId === currentSubject.id);

  // Start Test
  const handleStartTest = () => {
    let pool = questions.filter(q => {
      if (selectedSubjectId !== 'all' && q.subjectId !== selectedSubjectId) return false;
      if (selectedTopicId !== 'all' && q.topicId !== selectedTopicId) return false;
      return true;
    });

    if (pool.length === 0) pool = questions;

    // Pick questions up to questionCount
    const selected = pool.slice(0, questionCount);
    setTestQuestions(selected);
    setCurrentIndex(0);
    setUserAnswers({});
    setMarkedForReview({});
    const duration = selected.length * 90; // 1.5 min per question
    setTimeRemainingSeconds(duration);
    setTotalDurationSeconds(duration);
    setTestStage('active');
  };

  // Timer Countdown during active test
  useEffect(() => {
    if (testStage !== 'active') return;
    if (timeRemainingSeconds <= 0) {
      handleSubmitTest();
      return;
    }
    const timer = setInterval(() => {
      setTimeRemainingSeconds(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [testStage, timeRemainingSeconds]);

  const currentQ = testQuestions[currentIndex];

  useEffect(() => {
    if (currentQ) {
      setNatInput(userAnswers[currentQ.id] || '');
    }
  }, [currentIndex, currentQ, userAnswers]);

  const handleSelectOption = (label: string) => {
    if (!currentQ) return;
    setUserAnswers(prev => ({ ...prev, [currentQ.id]: label }));
  };

  const handleSaveNat = () => {
    if (!currentQ) return;
    setUserAnswers(prev => ({ ...prev, [currentQ.id]: natInput.trim() }));
  };

  const toggleReviewFlag = () => {
    if (!currentQ) return;
    setMarkedForReview(prev => ({ ...prev, [currentQ.id]: !prev[currentQ.id] }));
  };

  const handleClearAnswer = () => {
    if (!currentQ) return;
    setUserAnswers(prev => {
      const copy = { ...prev };
      delete copy[currentQ.id];
      return copy;
    });
    setNatInput('');
  };

  // Submit test and evaluate
  const handleSubmitTest = () => {
    testQuestions.forEach(q => {
      const userAns = userAnswers[q.id];
      if (userAns) {
        let isCorrect = false;
        if (q.type === 'NAT') {
          const num = parseFloat(userAns);
          if (q.natRange) {
            isCorrect = num >= q.natRange.min && num <= q.natRange.max;
          } else {
            isCorrect = userAns === q.correctAnswer;
          }
        } else {
          isCorrect = userAns.toUpperCase() === q.correctAnswer.toUpperCase();
        }
        recordQuestionAttempt(q.id, userAns, isCorrect);
      }
    });
    setTestStage('result');
  };

  // Format MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Score Calculations
  let totalMarksAwarded = 0;
  let maxPossibleMarks = 0;
  let correctCount = 0;
  let incorrectCount = 0;
  let unattemptedCount = 0;

  testQuestions.forEach(q => {
    maxPossibleMarks += q.marks;
    const ans = userAnswers[q.id];
    if (!ans) {
      unattemptedCount++;
    } else {
      let isCorrect = false;
      if (q.type === 'NAT') {
        const num = parseFloat(ans);
        isCorrect = q.natRange ? num >= q.natRange.min && num <= q.natRange.max : ans === q.correctAnswer;
      } else {
        isCorrect = ans.toUpperCase() === q.correctAnswer.toUpperCase();
      }

      if (isCorrect) {
        correctCount++;
        totalMarksAwarded += q.marks;
      } else {
        incorrectCount++;
        // GATE MCQ negative marking rule: 1/3rd of marks
        if (q.type === 'MCQ') {
          totalMarksAwarded -= q.marks / 3;
        }
      }
    }
  });

  const accuracy = correctCount + incorrectCount > 0
    ? (correctCount / (correctCount + incorrectCount)) * 100
    : 0;

  // 1. SETUP STAGE
  if (testStage === 'setup') {
    return (
      <div className="space-y-6 max-w-3xl mx-auto">
        <Breadcrumbs items={[{ label: 'Practice Mode' }]} />

        <div className="bg-surface-light dark:bg-surface-cardDark rounded-3xl p-6 sm:p-10 border border-brand-border dark:border-surface-borderDark shadow-academic space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-brand-soft text-brand-dark dark:bg-brand-dark/30 dark:text-brand-primary flex items-center justify-center mx-auto">
              <HelpCircle size={26} />
            </div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
              GATE Practice Test Simulator
            </h1>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Simulate actual GATE exam timing with negative marking, question palette navigation, and instant post-test analysis.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-brand-soft dark:border-surface-borderDark text-xs">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1.5">Select Subject:</label>
              <select
                value={selectedSubjectId}
                onChange={e => {
                  setSelectedSubjectId(e.target.value);
                  setSelectedTopicId('all');
                }}
                className="w-full p-3 rounded-xl bg-brand-light dark:bg-surface-dark border border-brand-border font-medium text-slate-800 dark:text-slate-100 outline-hidden"
              >
                <option value="all">All Subjects (Comprehensive Mock)</option>
                {subjects.map(s => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1.5">Select Topic:</label>
              <select
                value={selectedTopicId}
                onChange={e => setSelectedTopicId(e.target.value)}
                className="w-full p-3 rounded-xl bg-brand-light dark:bg-surface-dark border border-brand-border font-medium text-slate-800 dark:text-slate-100 outline-hidden"
              >
                <option value="all">All Topics in Selected Subject</option>
                {subjectTopics.map(t => (
                  <option key={t.id} value={t.id}>{t.title}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1.5">Number of Questions:</label>
              <div className="grid grid-cols-4 gap-2">
                {[3, 5, 8, 10].map(count => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setQuestionCount(count)}
                    className={`py-2.5 rounded-xl font-bold transition-all ${
                      questionCount === count
                        ? 'bg-brand-dark text-white shadow-xs ring-2 ring-brand-primary'
                        : 'bg-brand-light dark:bg-surface-dark text-slate-600 dark:text-slate-300 border border-brand-border'
                    }`}
                  >
                    {count} Questions
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-brand-soft dark:border-surface-borderDark flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-[11px] text-slate-400">
              Exam rules: MCQs have 1/3 negative marking. NAT has 0 negative marking.
            </div>
            <button
              onClick={handleStartTest}
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-brand-dark hover:bg-brand-hover text-white text-xs font-bold transition-colors shadow-sm"
            >
              Start Practice Test &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 2. ACTIVE TEST STAGE
  if (testStage === 'active' && currentQ) {
    return (
      <div className="space-y-6 max-w-5xl mx-auto">
        {/* Test Topbar with Timer & Submit */}
        <div className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-4 border border-brand-border dark:border-surface-borderDark shadow-academic flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-800 dark:text-slate-100">
              Question {currentIndex + 1} of {testQuestions.length}
            </span>
            <span className="text-xs text-slate-400">&bull;</span>
            <span className="text-xs text-brand-dark dark:text-brand-primary font-semibold">{currentQ.subjectName}</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-200 border border-amber-200 text-xs font-mono font-bold">
              <Clock size={14} />
              <span>{formatTime(timeRemainingSeconds)}</span>
            </div>

            <button
              onClick={handleSubmitTest}
              className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
            >
              Submit Test
            </button>
          </div>
        </div>

        {/* Question Area & Palette Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Question Column (8 cols) */}
          <div className="lg:col-span-8 bg-surface-light dark:bg-surface-cardDark rounded-2xl p-6 border border-brand-border dark:border-surface-borderDark shadow-academic space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-brand-soft text-xs">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold px-2 py-0.5 rounded bg-brand-soft text-brand-dark">
                  {currentQ.type}
                </span>
                <span className="font-medium text-slate-500">Marks: +{currentQ.marks} {currentQ.type === 'MCQ' ? '/ -' + (currentQ.marks/3).toFixed(2) : ''}</span>
              </div>
              <button
                onClick={toggleReviewFlag}
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-medium transition-colors ${
                  markedForReview[currentQ.id]
                    ? 'bg-amber-100 text-amber-800 font-bold'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <Flag size={13} />
                <span>{markedForReview[currentQ.id] ? 'Marked for Review' : 'Mark for Review'}</span>
              </button>
            </div>

            <div className="text-sm font-normal text-slate-800 dark:text-slate-100 leading-relaxed">
              {currentQ.questionText}
            </div>

            {/* Options */}
            {currentQ.type !== 'NAT' && currentQ.options && (
              <div className="space-y-2 pt-2">
                {currentQ.options.map(opt => {
                  const isSelected = userAnswers[currentQ.id] === opt.label;
                  return (
                    <div
                      key={opt.label}
                      onClick={() => handleSelectOption(opt.label)}
                      className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all text-xs sm:text-sm ${
                        isSelected
                          ? 'bg-brand-soft dark:bg-brand-dark/20 border-brand-primary text-brand-dark dark:text-brand-primary font-semibold ring-1 ring-brand-primary'
                          : 'bg-white dark:bg-surface-dark border-slate-200 dark:border-surface-borderDark hover:border-brand-primary text-slate-700 dark:text-slate-200'
                      }`}
                    >
                      <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                        {opt.label}
                      </span>
                      <span className="flex-1 leading-snug pt-0.5">{opt.text}</span>
                    </div>
                  );
                })}
              </div>
            )}

            {/* NAT Input */}
            {currentQ.type === 'NAT' && (
              <div className="space-y-2 pt-2">
                <label className="block text-xs font-semibold text-slate-500">Your Numerical Answer:</label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={natInput}
                    onChange={e => setNatInput(e.target.value)}
                    onBlur={handleSaveNat}
                    placeholder="Enter number..."
                    className="max-w-xs px-4 py-2 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-borderDark text-sm font-mono outline-hidden"
                  />
                  <button
                    onClick={handleSaveNat}
                    className="px-4 py-2 rounded-xl bg-brand-dark text-white text-xs font-semibold hover:bg-brand-hover"
                  >
                    Save
                  </button>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-brand-soft dark:border-surface-borderDark">
              <button
                onClick={handleClearAnswer}
                className="text-xs text-slate-400 hover:text-red-500 transition-colors"
              >
                Clear Response
              </button>

              <div className="flex items-center gap-2">
                <button
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex(prev => prev - 1)}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-surface-borderDark disabled:opacity-30 text-xs font-medium"
                >
                  <ArrowLeft size={14} />
                </button>
                <button
                  disabled={currentIndex === testQuestions.length - 1}
                  onClick={() => setCurrentIndex(prev => prev + 1)}
                  className="px-4 py-1.5 rounded-lg bg-brand-dark text-white disabled:opacity-30 text-xs font-semibold hover:bg-brand-hover flex items-center gap-1"
                >
                  <span>Next</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Palette Column (4 cols) */}
          <div className="lg:col-span-4 bg-surface-light dark:bg-surface-cardDark rounded-2xl p-5 border border-brand-border dark:border-surface-borderDark shadow-academic space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Question Palette
            </h3>

            <div className="grid grid-cols-5 gap-2">
              {testQuestions.map((q, idx) => {
                const isAnswered = !!userAnswers[q.id];
                const isMarked = !!markedForReview[q.id];
                const isCurrent = idx === currentIndex;

                let btnStyles = 'bg-slate-100 text-slate-600 dark:bg-surface-dark dark:text-slate-300';
                if (isAnswered) btnStyles = 'bg-emerald-600 text-white font-bold';
                if (isMarked) btnStyles = 'bg-amber-500 text-white font-bold';
                if (isCurrent) btnStyles += ' ring-2 ring-brand-dark dark:ring-brand-primary';

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-9 rounded-lg text-xs font-mono font-semibold transition-all ${btnStyles}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-brand-soft text-[11px] text-slate-500 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-xs bg-emerald-600" />
                <span>Answered ({Object.keys(userAnswers).length})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-xs bg-amber-500" />
                <span>Marked for Review ({Object.keys(markedForReview).filter(k => markedForReview[k]).length})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-xs bg-slate-200 dark:bg-surface-dark" />
                <span>Unattempted ({testQuestions.length - Object.keys(userAnswers).length})</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. SCORECARD RESULT STAGE
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <Breadcrumbs items={[{ label: 'Practice Mode', route: 'practice' }, { label: 'Test Report' }]} />

      {/* Score Header Card */}
      <div className="bg-surface-light dark:bg-surface-cardDark rounded-3xl p-6 sm:p-10 border border-brand-border dark:border-surface-borderDark shadow-academic space-y-6 text-center">
        <div className="w-16 h-16 rounded-3xl bg-brand-soft text-brand-dark dark:bg-brand-dark/40 dark:text-brand-primary flex items-center justify-center mx-auto shadow-xs">
          <Award size={36} />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Practice Test Completed
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50 mt-1">
            {totalMarksAwarded.toFixed(2)} / {maxPossibleMarks} Marks
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Accuracy: <strong className="text-brand-dark dark:text-brand-primary">{accuracy.toFixed(1)}%</strong> &bull; Time Spent: {formatTime(totalDurationSeconds - timeRemainingSeconds)}
          </p>
        </div>

        {/* Metric Boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-brand-soft dark:border-surface-borderDark text-center">
          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/30">
            <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">{correctCount}</div>
            <div className="text-xs text-slate-500 mt-0.5">Correct</div>
          </div>

          <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/30">
            <div className="text-2xl font-bold text-red-700 dark:text-red-300">{incorrectCount}</div>
            <div className="text-xs text-slate-500 mt-0.5">Incorrect</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-surface-dark border border-slate-100">
            <div className="text-2xl font-bold text-slate-700 dark:text-slate-300">{unattemptedCount}</div>
            <div className="text-xs text-slate-500 mt-0.5">Unattempted</div>
          </div>

          <div className="p-4 rounded-xl bg-brand-soft/50 dark:bg-brand-dark/20 border border-brand-primary/20">
            <div className="text-2xl font-bold text-brand-dark dark:text-brand-primary">{accuracy.toFixed(0)}%</div>
            <div className="text-xs text-slate-500 mt-0.5">Accuracy</div>
          </div>
        </div>

        <div className="pt-2 flex items-center justify-center gap-3">
          <button
            onClick={() => setTestStage('setup')}
            className="px-5 py-2.5 rounded-xl bg-brand-dark hover:bg-brand-hover text-white text-xs font-semibold flex items-center gap-2 transition-colors shadow-sm"
          >
            <RotateCcw size={14} />
            <span>Retake or Configure New Test</span>
          </button>
        </div>
      </div>

      {/* Complete Step-by-Step Solutions Review */}
      <div className="space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
          Question-By-Question Detailed Solutions Review
        </h2>

        {testQuestions.map((q, idx) => {
          const userAns = userAnswers[q.id];
          let isCorrect = false;
          if (userAns) {
            if (q.type === 'NAT') {
              const num = parseFloat(userAns);
              isCorrect = q.natRange ? num >= q.natRange.min && num <= q.natRange.max : userAns === q.correctAnswer;
            } else {
              isCorrect = userAns.toUpperCase() === q.correctAnswer.toUpperCase();
            }
          }

          return (
            <div key={q.id} className="rounded-2xl border border-brand-border bg-surface-light dark:bg-surface-cardDark p-5 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-brand-soft text-xs">
                <span className="font-bold text-slate-800 dark:text-slate-100">
                  Question {idx + 1}: {q.sourcePaper} &bull; Q{q.questionNumber}
                </span>
                <span className={`px-2.5 py-0.5 rounded-full font-semibold ${
                  !userAns ? 'bg-slate-100 text-slate-600' : isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                }`}>
                  {!userAns ? 'Unattempted' : isCorrect ? 'Correct (+ ' + q.marks + 'M)' : 'Incorrect'}
                </span>
              </div>

              <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed">
                {q.questionText}
              </div>

              <div className="p-4 rounded-xl bg-brand-soft/40 dark:bg-surface-dark border border-brand-primary/20 space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 font-semibold">Your Answer:</span>
                  <code className="font-bold">{userAns || 'None'}</code>
                  <span className="text-slate-400 mx-2">&bull;</span>
                  <span className="text-slate-500 font-semibold">Correct Answer:</span>
                  <code className="font-bold text-brand-dark dark:text-brand-primary">{q.correctAnswer}</code>
                </div>

                <div className="pt-2 text-slate-600 dark:text-slate-300">
                  <strong>Explanation: </strong> {q.detailedExplanation}
                </div>

                {q.steps && (
                  <div className="pt-2 space-y-1 font-mono text-[11px] text-slate-700 dark:text-slate-300">
                    {q.steps.map((st, i) => (
                      <div key={i}>{st}</div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
