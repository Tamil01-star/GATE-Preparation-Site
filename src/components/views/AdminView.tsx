import React, { useState } from 'react';
import {
  Settings,
  Plus,
  FileText,
  HelpCircle,
  Calculator,
  FolderTree,
  Download,
  Upload,
  RotateCcw,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Breadcrumbs } from '../common/Breadcrumbs';

export const AdminView: React.FC = () => {
  const {
    subjects,
    units,
    topics,
    notes,
    questions,
    formulas,
    addSubject,
    addUnit,
    addTopic,
    addQuestion,
    addFormula,
    resetAllData,
    exportDataJSON,
    importDataJSON
  } = useApp();

  const [adminTab, setAdminTab] = useState<'manage' | 'add-q' | 'add-formula' | 'add-topic' | 'backup'>('manage');
  const [statusMessage, setStatusMessage] = useState<string>('');

  // Add Question State
  const [qSubjectId, setQSubjectId] = useState(subjects[0]?.id || '');
  const [qTopicId, setQTopicId] = useState('');
  const [qYear, setQYear] = useState(2025);
  const [qType, setQType] = useState<'MCQ' | 'NAT' | 'MSQ'>('MCQ');
  const [qMarks, setQMarks] = useState<1 | 2>(1);
  const [qDifficulty, setQDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>('Medium');
  const [qConcept, setQConcept] = useState('');
  const [qText, setQText] = useState('');
  const [optA, setOptA] = useState('');
  const [optB, setOptB] = useState('');
  const [optC, setOptC] = useState('');
  const [optD, setOptD] = useState('');
  const [qCorrectAns, setQCorrectAns] = useState('A');
  const [qExplanation, setQExplanation] = useState('');
  const [qSteps, setQSteps] = useState('');

  // Add Formula State
  const [fSubjectId, setFSubjectId] = useState(subjects[0]?.id || '');
  const [fTopicId, setFTopicId] = useState('');
  const [fName, setFName] = useState('');
  const [fLatex, setFLatex] = useState('');
  const [fWhenToUse, setFWhenToUse] = useState('');
  const [fVariables, setFVariables] = useState('');
  const [fPYQ, setFPYQ] = useState('');

  const availableTopics = topics.filter(t => t.subjectId === qSubjectId);

  const handleCreateQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    const subj = subjects.find(s => s.id === qSubjectId);
    const top = topics.find(t => t.id === qTopicId);

    const stepsArray = qSteps.split('\n').filter(s => s.trim().length > 0);

    addQuestion({
      year: qYear,
      sourcePaper: `GATE ${subj?.code || 'EC'} ${qYear}`,
      subjectId: qSubjectId,
      subjectName: subj?.name || 'Digital Circuits',
      unitId: top?.unitId || 'unit-dig-1',
      topicId: qTopicId || topics[0].id,
      topicTitle: top?.title || 'General Topic',
      questionNumber: questions.length + 1,
      type: qType,
      marks: qMarks,
      difficulty: qDifficulty,
      conceptTested: qConcept || 'Core Principle',
      questionText: qText,
      options: qType !== 'NAT' ? [
        { label: 'A', text: optA },
        { label: 'B', text: optB },
        { label: 'C', text: optC },
        { label: 'D', text: optD }
      ] : undefined,
      correctAnswer: qCorrectAns.trim(),
      detailedExplanation: qExplanation,
      steps: stepsArray
    });

    setStatusMessage('New question successfully added with step-by-step solution!');
    setTimeout(() => setStatusMessage(''), 3000);
  };

  const handleCreateFormula = (e: React.FormEvent) => {
    e.preventDefault();
    const subj = subjects.find(s => s.id === fSubjectId);
    const top = topics.find(t => t.id === fTopicId);

    const varsArray = fVariables.split('\n').map(line => {
      const parts = line.split(':');
      return { symbol: parts[0]?.trim() || '', meaning: parts[1]?.trim() || '' };
    });

    addFormula({
      subjectId: fSubjectId,
      subjectName: subj?.name || 'Engineering Mathematics',
      unitId: top?.unitId || 'unit-math-1',
      topicId: fTopicId || topics[0].id,
      topicTitle: top?.title || 'General Topic',
      chapterTitle: `Chapter: ${top?.title || 'Core'}`,
      formulaName: fName,
      latex: fLatex,
      variables: varsArray,
      whenToUse: fWhenToUse,
      conditions: 'Standard conditions',
      relatedConcept: top?.title || 'Fundamental Invariant',
      relatedPYQ: fPYQ || 'GATE Recent Years'
    });

    setStatusMessage('New formula card added to repository!');
    setTimeout(() => setStatusMessage(''), 3000);
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        if (text) {
          const ok = importDataJSON(text);
          if (ok) {
            setStatusMessage('Data backup successfully restored!');
          } else {
            alert('Invalid JSON backup file.');
          }
        }
      };
      reader.readAsText(e.target.files[0]);
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <Breadcrumbs items={[{ label: 'Settings & Admin' }]} />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-brand-border dark:border-surface-borderDark">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2.5">
            <Settings className="text-brand-dark dark:text-brand-primary" size={24} />
            Personal Content Management & System Settings
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Add or modify subjects, syllabus units, notes, formulas, and PYQ questions with full step-by-step solutions.
          </p>
        </div>

        <a
          href="https://gate2027.iitm.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-soft text-brand-dark dark:bg-brand-dark/30 dark:text-brand-primary text-xs font-semibold hover:bg-brand-primary/20 transition-colors"
        >
          <span>IITM Portal</span>
          <ExternalLink size={12} />
        </a>
      </div>

      {statusMessage && (
        <div className="p-4 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-2 text-xs font-semibold">
          <CheckCircle2 size={16} className="text-emerald-600" />
          <span>{statusMessage}</span>
        </div>
      )}

      {/* Admin Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <button
          onClick={() => setAdminTab('manage')}
          className={`px-3.5 py-2 rounded-xl font-semibold transition-colors ${
            adminTab === 'manage' ? 'bg-brand-dark text-white' : 'bg-surface-light dark:bg-surface-cardDark text-slate-600 border border-brand-border'
          }`}
        >
          System Overview & Content Counts
        </button>

        <button
          onClick={() => setAdminTab('add-q')}
          className={`px-3.5 py-2 rounded-xl font-semibold flex items-center gap-1.5 transition-colors ${
            adminTab === 'add-q' ? 'bg-brand-dark text-white' : 'bg-surface-light dark:bg-surface-cardDark text-slate-600 border border-brand-border'
          }`}
        >
          <HelpCircle size={14} />
          <span>Add Question with Steps</span>
        </button>

        <button
          onClick={() => setAdminTab('add-formula')}
          className={`px-3.5 py-2 rounded-xl font-semibold flex items-center gap-1.5 transition-colors ${
            adminTab === 'add-formula' ? 'bg-brand-dark text-white' : 'bg-surface-light dark:bg-surface-cardDark text-slate-600 border border-brand-border'
          }`}
        >
          <Calculator size={14} />
          <span>Add Formula</span>
        </button>

        <button
          onClick={() => setAdminTab('backup')}
          className={`px-3.5 py-2 rounded-xl font-semibold flex items-center gap-1.5 transition-colors ${
            adminTab === 'backup' ? 'bg-brand-dark text-white' : 'bg-surface-light dark:bg-surface-cardDark text-slate-600 border border-brand-border'
          }`}
        >
          <Download size={14} />
          <span>Backup & Restore Data</span>
        </button>
      </div>

      {/* Tab 1: Manage & System Overview */}
      {adminTab === 'manage' && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-surface-light dark:bg-surface-cardDark border border-brand-border text-center">
              <div className="text-xl font-bold text-slate-800 dark:text-slate-100">{subjects.length}</div>
              <div className="text-xs text-slate-500">Subjects</div>
            </div>
            <div className="p-4 rounded-xl bg-surface-light dark:bg-surface-cardDark border border-brand-border text-center">
              <div className="text-xl font-bold text-slate-800 dark:text-slate-100">{units.length}</div>
              <div className="text-xs text-slate-500">Units</div>
            </div>
            <div className="p-4 rounded-xl bg-surface-light dark:bg-surface-cardDark border border-brand-border text-center">
              <div className="text-xl font-bold text-slate-800 dark:text-slate-100">{topics.length}</div>
              <div className="text-xs text-slate-500">Topics</div>
            </div>
            <div className="p-4 rounded-xl bg-surface-light dark:bg-surface-cardDark border border-brand-border text-center">
              <div className="text-xl font-bold text-slate-800 dark:text-slate-100">{questions.length}</div>
              <div className="text-xs text-slate-500">Questions Solved</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-surface-light dark:bg-surface-cardDark border border-brand-border text-xs space-y-3">
            <h3 className="font-bold text-sm text-slate-800 dark:text-slate-100">Personal Administrator Account</h3>
            <p className="text-slate-500 leading-relaxed">
              This is your private, local preparation portal. All updates to subjects, notes, formulas, and questions are automatically indexed and saved to your browser&rsquo;s persistent storage. You can backup all preparation data to a single JSON file at any time.
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: Add Question with Steps (Section 21 & 22) */}
      {adminTab === 'add-q' && (
        <form onSubmit={handleCreateQuestion} className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-6 border border-brand-border space-y-4 text-xs">
          <h2 className="text-sm font-bold text-slate-800 dark:text-slate-100 pb-2 border-b border-brand-soft">
            Add New GATE Question (With Step-by-Step Derivation)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1">Subject:</label>
              <select
                value={qSubjectId}
                onChange={e => setQSubjectId(e.target.value)}
                className="w-full p-2 rounded-lg bg-brand-light dark:bg-surface-dark border border-brand-border font-medium outline-hidden"
              >
                {subjects.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1">Topic:</label>
              <select
                value={qTopicId}
                onChange={e => setQTopicId(e.target.value)}
                className="w-full p-2 rounded-lg bg-brand-light dark:bg-surface-dark border border-brand-border font-medium outline-hidden"
              >
                <option value="">-- Select Topic --</option>
                {availableTopics.map(t => <option key={t.id} value={t.id}>{t.title}</option>)}
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1">Exam Year:</label>
              <input
                type="number"
                value={qYear}
                onChange={e => setQYear(Number(e.target.value))}
                className="w-full p-2 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 outline-hidden font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1">Type:</label>
              <select
                value={qType}
                onChange={e => setQType(e.target.value as any)}
                className="w-full p-2 rounded-lg bg-brand-light dark:bg-surface-dark border border-brand-border font-medium outline-hidden"
              >
                <option value="MCQ">MCQ</option>
                <option value="NAT">NAT</option>
                <option value="MSQ">MSQ</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1">Marks:</label>
              <select
                value={qMarks}
                onChange={e => setQMarks(Number(e.target.value) as 1 | 2)}
                className="w-full p-2 rounded-lg bg-brand-light dark:bg-surface-dark border border-brand-border font-medium outline-hidden"
              >
                <option value="1">1 Mark</option>
                <option value="2">2 Marks</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1">Difficulty:</label>
              <select
                value={qDifficulty}
                onChange={e => setQDifficulty(e.target.value as any)}
                className="w-full p-2 rounded-lg bg-brand-light dark:bg-surface-dark border border-brand-border font-medium outline-hidden"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1">Concept Tested:</label>
            <input
              type="text"
              value={qConcept}
              onChange={e => setQConcept(e.target.value)}
              placeholder="e.g. Sequential Logic &rarr; Setup Time Constraint"
              className="w-full p-2.5 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 outline-hidden"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1">Question Statement:</label>
            <textarea
              rows={3}
              value={qText}
              required
              onChange={e => setQText(e.target.value)}
              placeholder="Enter full question text..."
              className="w-full p-2.5 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 outline-hidden font-normal"
            />
          </div>

          {qType !== 'NAT' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-500 mb-1">Option A:</label>
                <input
                  type="text"
                  value={optA}
                  onChange={e => setOptA(e.target.value)}
                  className="w-full p-2 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 outline-hidden"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-500 mb-1">Option B:</label>
                <input
                  type="text"
                  value={optB}
                  onChange={e => setOptB(e.target.value)}
                  className="w-full p-2 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 outline-hidden"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-500 mb-1">Option C:</label>
                <input
                  type="text"
                  value={optC}
                  onChange={e => setOptC(e.target.value)}
                  className="w-full p-2 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 outline-hidden"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-500 mb-1">Option D:</label>
                <input
                  type="text"
                  value={optD}
                  onChange={e => setOptD(e.target.value)}
                  className="w-full p-2 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 outline-hidden"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1">Correct Answer:</label>
            <input
              type="text"
              value={qCorrectAns}
              onChange={e => setQCorrectAns(e.target.value)}
              placeholder="A / B / C / D or Numerical for NAT"
              className="max-w-xs p-2.5 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 outline-hidden font-mono"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1">Detailed Explanation:</label>
            <textarea
              rows={3}
              value={qExplanation}
              onChange={e => setQExplanation(e.target.value)}
              placeholder="Comprehensive solution reasoning..."
              className="w-full p-2.5 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 outline-hidden"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1">
              Step-by-Step Derivation (One step per line):
            </label>
            <textarea
              rows={4}
              value={qSteps}
              onChange={e => setQSteps(e.target.value)}
              placeholder="Step 1: Write characteristic equation...&#10;Step 2: Substitute parameters...&#10;Step 3: Calculate value..."
              className="w-full p-2.5 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 outline-hidden font-mono"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-brand-dark hover:bg-brand-hover text-white font-semibold transition-colors"
          >
            Save Question to Bank
          </button>
        </form>
      )}

      {/* Tab 3: Add Formula */}
      {adminTab === 'add-formula' && (
        <form onSubmit={handleCreateFormula} className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-6 border border-brand-border space-y-4 text-xs">
          <h2 className="text-sm font-bold text-slate-800 dark:text-slate-100 pb-2 border-b border-brand-soft">
            Add New Chapter Formula
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Subject:</label>
              <select
                value={fSubjectId}
                onChange={e => setFSubjectId(e.target.value)}
                className="w-full p-2 rounded-lg bg-brand-light dark:bg-surface-dark border border-brand-border outline-hidden"
              >
                {subjects.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Formula Name:</label>
              <input
                type="text"
                required
                value={fName}
                onChange={e => setFName(e.target.value)}
                placeholder="e.g. Cayley-Hamilton Inverse Relation"
                className="w-full p-2 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 outline-hidden"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">LaTeX Math Expression:</label>
            <input
              type="text"
              required
              value={fLatex}
              onChange={e => setFLatex(e.target.value)}
              placeholder="e.g. T_{clk} \ge t_{cq} + t_{comb} + t_{su}"
              className="w-full p-2.5 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 outline-hidden font-mono"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">When to Use:</label>
            <textarea
              rows={2}
              value={fWhenToUse}
              onChange={e => setFWhenToUse(e.target.value)}
              placeholder="Describe practical exam application..."
              className="w-full p-2.5 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 outline-hidden"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Meaning of Variables (Format: symbol : meaning):</label>
            <textarea
              rows={3}
              value={fVariables}
              onChange={e => setFVariables(e.target.value)}
              placeholder="t_cq : Clock-to-Q delay&#10;t_su : Setup time requirement"
              className="w-full p-2.5 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 outline-hidden font-mono"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-brand-dark hover:bg-brand-hover text-white font-semibold transition-colors"
          >
            Save Formula
          </button>
        </form>
      )}

      {/* Tab 4: Backup & Restore */}
      {adminTab === 'backup' && (
        <div className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-6 border border-brand-border space-y-6 text-xs">
          <div>
            <h2 className="text-sm font-bold text-slate-800 dark:text-slate-100">Export / Import Preparation Database</h2>
            <p className="text-slate-500 mt-1">Safely backup all your notes, progress, and solved questions or restore from an earlier checkpoint.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-brand-light/50 dark:bg-surface-dark border border-brand-soft space-y-3">
              <h3 className="font-bold text-brand-dark dark:text-brand-primary">Export Data Backup</h3>
              <p className="text-slate-500">Download a complete JSON snapshot containing all subjects, units, notes, formulas, questions, and progress logs.</p>
              <button
                onClick={exportDataJSON}
                className="px-4 py-2 rounded-xl bg-brand-dark hover:bg-brand-hover text-white font-semibold flex items-center gap-2 transition-colors"
              >
                <Download size={14} />
                <span>Download JSON Backup</span>
              </button>
            </div>

            <div className="p-5 rounded-2xl bg-brand-light/50 dark:bg-surface-dark border border-brand-soft space-y-3">
              <h3 className="font-bold text-brand-dark dark:text-brand-primary">Restore from File</h3>
              <p className="text-slate-500">Upload and restore a previously saved JSON preparation archive.</p>
              <input
                type="file"
                accept=".json"
                onChange={handleImportFile}
                className="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-brand-soft file:text-brand-dark cursor-pointer"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-brand-soft flex items-center justify-between">
            <span className="text-slate-400">Resetting restores original curated syllabus data.</span>
            <button
              onClick={() => {
                if (confirm('Are you sure you want to reset all preparation data to default?')) {
                  resetAllData();
                  setStatusMessage('Database reset to clean curated default state.');
                }
              }}
              className="px-4 py-2 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 flex items-center gap-1.5 font-semibold"
            >
              <RotateCcw size={13} />
              <span>Reset Database to Curated Default</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
