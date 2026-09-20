import React, { useState, useMemo } from 'react';
import {
  HelpCircle,
  Filter,
  RotateCcw,
  Search,
  CheckCircle2,
  ListFilter
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { QuestionCard } from './QuestionCard';
import { Breadcrumbs } from '../common/Breadcrumbs';

export const QuestionBankView: React.FC = () => {
  const {
    questions,
    subjects,
    topics,
    userProgress,
    routeParams
  } = useApp();

  // Filters State
  const [filterYear, setFilterYear] = useState<string>(routeParams.paperYear ? String(routeParams.paperYear) : 'all');
  const [filterSubject, setFilterSubject] = useState<string>(routeParams.subjectId || 'all');
  const [filterTopic, setFilterTopic] = useState<string>(routeParams.topicId || 'all');
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterMarks, setFilterMarks] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all'); // 'all' | 'solved' | 'unsolved' | 'correct' | 'incorrect'
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter topics based on selected subject
  const availableTopics = useMemo(() => {
    if (filterSubject === 'all') return topics;
    return topics.filter(t => t.subjectId === filterSubject);
  }, [filterSubject, topics]);

  // Filtered Questions List
  const filteredQuestions = useMemo(() => {
    return questions.filter(q => {
      // Year filter
      if (filterYear !== 'all' && String(q.year) !== filterYear) return false;

      // Subject filter
      if (filterSubject !== 'all' && q.subjectId !== filterSubject) return false;

      // Topic filter
      if (filterTopic !== 'all' && q.topicId !== filterTopic) return false;

      // Difficulty filter
      if (filterDifficulty !== 'all' && q.difficulty !== filterDifficulty) return false;

      // Type filter
      if (filterType !== 'all' && q.type !== filterType) return false;

      // Marks filter
      if (filterMarks !== 'all' && String(q.marks) !== filterMarks) return false;

      // Status filter
      const attempt = userProgress.solvedQuestions[q.id];
      if (filterStatus === 'solved' && !attempt) return false;
      if (filterStatus === 'unsolved' && attempt) return false;
      if (filterStatus === 'correct' && (!attempt || !attempt.isCorrect)) return false;
      if (filterStatus === 'incorrect' && (!attempt || attempt.isCorrect)) return false;

      // Search Query
      if (searchQuery.trim()) {
        const text = `${q.questionText} ${q.conceptTested} ${q.detailedExplanation}`.toLowerCase();
        if (!text.includes(searchQuery.toLowerCase())) return false;
      }

      return true;
    });
  }, [
    questions,
    filterYear,
    filterSubject,
    filterTopic,
    filterDifficulty,
    filterType,
    filterMarks,
    filterStatus,
    searchQuery,
    userProgress
  ]);

  const handleResetFilters = () => {
    setFilterYear('all');
    setFilterSubject('all');
    setFilterTopic('all');
    setFilterDifficulty('all');
    setFilterType('all');
    setFilterMarks('all');
    setFilterStatus('all');
    setSearchQuery('');
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <Breadcrumbs items={[{ label: 'Question Bank' }]} />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-brand-border dark:border-surface-borderDark">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2.5">
            <HelpCircle className="text-brand-dark dark:text-brand-primary" size={24} />
            Question Bank & Problem Solver
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Browse and filter through past GATE questions. Each question features individual hidden answers with detailed mathematical derivations.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-brand-soft dark:bg-brand-dark/30 text-brand-dark dark:text-brand-primary">
            Showing {filteredQuestions.length} of {questions.length} questions
          </span>
        </div>
      </div>

      {/* Multi-Filter Panel (Section 12) */}
      <div className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-5 border border-brand-border dark:border-surface-borderDark shadow-academic space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-brand-soft dark:border-surface-borderDark">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            <Filter size={14} className="text-brand-dark dark:text-brand-primary" />
            <span>Question Filters</span>
          </div>
          <button
            onClick={handleResetFilters}
            className="flex items-center gap-1 text-xs text-slate-500 hover:text-brand-dark dark:hover:text-brand-primary transition-colors"
          >
            <RotateCcw size={13} />
            <span>Reset Filters</span>
          </button>
        </div>

        {/* Filter Dropdowns Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
          {/* Year */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">Year</label>
            <select
              value={filterYear}
              onChange={e => setFilterYear(e.target.value)}
              className="w-full p-2 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-borderDark font-medium text-slate-700 dark:text-slate-200 outline-hidden"
            >
              <option value="all">All Years</option>
              <option value="2025">GATE 2025</option>
              <option value="2024">GATE 2024</option>
              <option value="2023">GATE 2023</option>
              <option value="2022">GATE 2022</option>
              <option value="2021">GATE 2021</option>
            </select>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">Subject</label>
            <select
              value={filterSubject}
              onChange={e => {
                setFilterSubject(e.target.value);
                setFilterTopic('all');
              }}
              className="w-full p-2 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-borderDark font-medium text-slate-700 dark:text-slate-200 outline-hidden"
            >
              <option value="all">All Subjects</option>
              {subjects.map(s => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>

          {/* Topic */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">Topic</label>
            <select
              value={filterTopic}
              onChange={e => setFilterTopic(e.target.value)}
              className="w-full p-2 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-borderDark font-medium text-slate-700 dark:text-slate-200 outline-hidden"
            >
              <option value="all">All Topics</option>
              {availableTopics.map(t => (
                <option key={t.id} value={t.id}>{t.title}</option>
              ))}
            </select>
          </div>

          {/* Difficulty */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">Difficulty</label>
            <select
              value={filterDifficulty}
              onChange={e => setFilterDifficulty(e.target.value)}
              className="w-full p-2 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-borderDark font-medium text-slate-700 dark:text-slate-200 outline-hidden"
            >
              <option value="all">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          {/* Question Type */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">Question Type</label>
            <select
              value={filterType}
              onChange={e => setFilterType(e.target.value)}
              className="w-full p-2 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-borderDark font-medium text-slate-700 dark:text-slate-200 outline-hidden"
            >
              <option value="all">All Types</option>
              <option value="MCQ">MCQ (Multiple Choice)</option>
              <option value="NAT">NAT (Numerical Answer)</option>
              <option value="MSQ">MSQ (Multiple Select)</option>
            </select>
          </div>

          {/* Marks */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">Marks</label>
            <select
              value={filterMarks}
              onChange={e => setFilterMarks(e.target.value)}
              className="w-full p-2 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-borderDark font-medium text-slate-700 dark:text-slate-200 outline-hidden"
            >
              <option value="all">All Marks</option>
              <option value="1">1 Mark</option>
              <option value="2">2 Marks</option>
            </select>
          </div>

          {/* Progress Status */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">Status</label>
            <select
              value={filterStatus}
              onChange={e => setFilterStatus(e.target.value)}
              className="w-full p-2 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-borderDark font-medium text-slate-700 dark:text-slate-200 outline-hidden"
            >
              <option value="all">All Status</option>
              <option value="solved">Solved</option>
              <option value="unsolved">Unsolved</option>
              <option value="correct">Correctly Solved</option>
              <option value="incorrect">Incorrect</option>
            </select>
          </div>

          {/* Keyword Search */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">Search in Questions</label>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Keywords..."
                className="w-full pl-7 pr-2 py-2 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-borderDark font-medium text-slate-700 dark:text-slate-200 outline-hidden"
              />
              <Search size={13} className="absolute left-2.5 top-3 text-slate-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Questions Stream */}
      <div className="space-y-6">
        {filteredQuestions.length === 0 ? (
          <div className="p-10 rounded-2xl bg-surface-light dark:bg-surface-cardDark border border-brand-border dark:border-surface-borderDark text-center space-y-3">
            <HelpCircle size={32} className="mx-auto text-slate-300 dark:text-slate-600" />
            <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              No questions found matching your filter criteria.
            </div>
            <button
              onClick={handleResetFilters}
              className="px-4 py-2 rounded-xl bg-brand-soft text-brand-dark dark:bg-brand-dark/30 dark:text-brand-primary text-xs font-semibold hover:bg-brand-primary/30 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          filteredQuestions.map((question, index) => (
            <QuestionCard
              key={question.id}
              question={question}
              questionIndex={index}
              totalQuestions={filteredQuestions.length}
            />
          ))
        )}
      </div>
    </div>
  );
};
