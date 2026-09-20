import React from 'react';
import { Bookmark as BookmarkIcon } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface BookmarkButtonProps {
  type: 'note' | 'question' | 'formula' | 'topic';
  refId: string;
  title: string;
  subtitle: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const BookmarkButton: React.FC<BookmarkButtonProps> = ({
  type,
  refId,
  title,
  subtitle,
  size = 'md',
  showText = false
}) => {
  const { isBookmarked, toggleBookmark } = useApp();
  const bookmarked = isBookmarked(type, refId);

  const iconSizes = {
    sm: 15,
    md: 18,
    lg: 22
  };

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        toggleBookmark(type, refId, title, subtitle);
      }}
      title={bookmarked ? 'Remove from bookmarks' : 'Bookmark this item'}
      className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md transition-colors ${
        bookmarked
          ? 'text-brand-dark bg-brand-soft dark:bg-brand-dark/20 dark:text-brand-primary'
          : 'text-slate-400 hover:text-brand-dark hover:bg-brand-soft/50 dark:hover:text-brand-primary'
      }`}
      aria-label="Bookmark"
    >
      <BookmarkIcon
        size={iconSizes[size]}
        className={`transition-transform duration-200 ${bookmarked ? 'fill-current scale-110' : ''}`}
      />
      {showText && (
        <span className="text-xs font-medium">
          {bookmarked ? 'Bookmarked' : 'Bookmark'}
        </span>
      )}
    </button>
  );
};
