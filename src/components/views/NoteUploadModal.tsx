import React, { useState } from 'react';
import {
  Upload,
  X,
  FileText,
  CheckCircle2,
  FolderTree,
  AlertCircle
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { UploadedFileMeta } from '../../types';

export const NoteUploadModal: React.FC = () => {
  const {
    isUploadModalOpen,
    setUploadModalOpen,
    subjects,
    units,
    topics,
    addUploadedFileToNote
  } = useApp();

  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(subjects[0]?.id || '');
  const [selectedUnitId, setSelectedUnitId] = useState<string>('');
  const [selectedTopicId, setSelectedTopicId] = useState<string>('');
  const [subtopicTitle, setSubtopicTitle] = useState<string>('');
  const [noteTitle, setNoteTitle] = useState<string>('');
  const [fileType, setFileType] = useState<'PDF' | 'DOCX' | 'TXT' | 'Image' | 'Markdown'>('PDF');
  const [fileName, setFileName] = useState<string>('');
  const [fileSize, setFileSize] = useState<string>('2.4 MB');
  const [successMessage, setSuccessMessage] = useState<string>('');

  if (!isUploadModalOpen) return null;

  const currentUnits = units.filter(u => u.subjectId === selectedSubjectId);
  const currentTopics = topics.filter(t => t.unitId === selectedUnitId);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
      setFileSize((file.size / (1024 * 1024)).toFixed(2) + ' MB');
      if (!noteTitle) {
        setNoteTitle(file.name.replace(/\.[^/.]+$/, ''));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSubjectId || !selectedUnitId || !selectedTopicId || !noteTitle.trim()) {
      alert('Please select Subject, Unit, Topic, and provide Note Title according to syllabus hierarchy.');
      return;
    }

    const subjectObj = subjects.find(s => s.id === selectedSubjectId);
    const unitObj = units.find(u => u.id === selectedUnitId);
    const topicObj = topics.find(t => t.id === selectedTopicId);

    const newMeta: UploadedFileMeta = {
      id: `file-${Date.now()}`,
      fileName: fileName || `${noteTitle.replace(/\s+/g, '_')}.${fileType.toLowerCase()}`,
      fileType,
      size: fileSize,
      subject: subjectObj?.name || 'Digital Circuits',
      unit: unitObj ? `Unit ${unitObj.unitNumber}: ${unitObj.title}` : 'Unit 1',
      topic: topicObj?.title || 'General Topic',
      subtopic: subtopicTitle.trim() || 'Core Reference Notes',
      title: noteTitle.trim(),
      uploadDate: new Date().toISOString().split('T')[0],
      fileUrl: '#'
    };

    addUploadedFileToNote(newMeta);
    setSuccessMessage(`File successfully organized under ${topicObj?.title}!`);

    setTimeout(() => {
      setSuccessMessage('');
      setUploadModalOpen(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-surface-light dark:bg-surface-cardDark rounded-3xl shadow-2xl border border-brand-border dark:border-surface-borderDark overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-brand-soft dark:border-surface-borderDark flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-brand-soft text-brand-dark dark:bg-brand-dark/30 dark:text-brand-primary flex items-center justify-center">
              <Upload size={18} />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                Upload & Organize Study Notes
              </h2>
              <div className="text-[11px] text-slate-400">Strict syllabus hierarchy enforced</div>
            </div>
          </div>

          <button
            onClick={() => setUploadModalOpen(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
          {successMessage && (
            <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-600" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* Level 1: Subject */}
          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1">
              1. Subject: <span className="text-red-500">*</span>
            </label>
            <select
              value={selectedSubjectId}
              onChange={e => {
                setSelectedSubjectId(e.target.value);
                setSelectedUnitId('');
                setSelectedTopicId('');
              }}
              required
              className="w-full p-2.5 rounded-xl bg-brand-light dark:bg-surface-dark border border-brand-border font-medium text-slate-800 dark:text-slate-100 outline-hidden"
            >
              <option value="">-- Choose Subject --</option>
              {subjects.map(s => (
                <option key={s.id} value={s.id}>{s.name} ({s.code})</option>
              ))}
            </select>
          </div>

          {/* Level 2: Unit */}
          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1">
              2. Unit / Chapter: <span className="text-red-500">*</span>
            </label>
            <select
              value={selectedUnitId}
              disabled={!selectedSubjectId}
              onChange={e => {
                setSelectedUnitId(e.target.value);
                setSelectedTopicId('');
              }}
              required
              className="w-full p-2.5 rounded-xl bg-brand-light dark:bg-surface-dark border border-brand-border font-medium text-slate-800 dark:text-slate-100 outline-hidden disabled:opacity-50"
            >
              <option value="">-- Choose Unit --</option>
              {currentUnits.map(u => (
                <option key={u.id} value={u.id}>Unit {u.unitNumber}: {u.title}</option>
              ))}
            </select>
          </div>

          {/* Level 3: Topic */}
          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1">
              3. Topic: <span className="text-red-500">*</span>
            </label>
            <select
              value={selectedTopicId}
              disabled={!selectedUnitId}
              onChange={e => setSelectedTopicId(e.target.value)}
              required
              className="w-full p-2.5 rounded-xl bg-brand-light dark:bg-surface-dark border border-brand-border font-medium text-slate-800 dark:text-slate-100 outline-hidden disabled:opacity-50"
            >
              <option value="">-- Choose Topic --</option>
              {currentTopics.map(t => (
                <option key={t.id} value={t.id}>{t.title}</option>
              ))}
            </select>
          </div>

          {/* Level 4: Subtopic */}
          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1">
              4. Subtopic (Optional):
            </label>
            <input
              type="text"
              value={subtopicTitle}
              onChange={e => setSubtopicTitle(e.target.value)}
              placeholder="e.g. Master-Slave JK Flip-Flop Synthesis"
              className="w-full p-2.5 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-borderDark font-medium text-slate-800 dark:text-slate-100 outline-hidden"
            />
          </div>

          {/* Level 5: Note Title & File Format */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1">
                Note Title: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={noteTitle}
                onChange={e => setNoteTitle(e.target.value)}
                required
                placeholder="e.g. Complete JK Flip-Flop Notes"
                className="w-full p-2.5 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-borderDark font-medium text-slate-800 dark:text-slate-100 outline-hidden"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1">
                File Format:
              </label>
              <select
                value={fileType}
                onChange={e => setFileType(e.target.value as any)}
                className="w-full p-2.5 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-borderDark font-medium text-slate-800 dark:text-slate-100 outline-hidden"
              >
                <option value="PDF">PDF Document</option>
                <option value="DOCX">DOCX Word Document</option>
                <option value="TXT">Plain Text (.txt)</option>
                <option value="Markdown">Markdown (.md)</option>
                <option value="Image">Image (Handwritten Note)</option>
              </select>
            </div>
          </div>

          {/* File Picker */}
          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-200 mb-1">
              Select Document File:
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.docx,.doc,.txt,.md,image/*"
              className="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-brand-soft file:text-brand-dark hover:file:bg-brand-primary/30 cursor-pointer"
            />
          </div>

          {/* Submit */}
          <div className="pt-3 border-t border-brand-soft dark:border-surface-borderDark flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => setUploadModalOpen(false)}
              className="px-4 py-2 rounded-xl border border-slate-200 dark:border-surface-borderDark text-slate-600 dark:text-slate-300 font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-brand-dark hover:bg-brand-hover text-white font-semibold transition-colors"
            >
              Upload & Save to Syllabus
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
