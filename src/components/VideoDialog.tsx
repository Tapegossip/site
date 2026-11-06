import * as Dialog from '@radix-ui/react-dialog';
import { X, ExternalLink } from 'lucide-react';
import type { LibraryItem } from '../data/library';
import { youtubeId } from '../data/library';

interface VideoDialogProps {
  video: LibraryItem | null;
  onClose: () => void;
}

/** Plays a YouTube video in place. Uses youtube-nocookie.com (no tracking cookies until play). */
const VideoDialog = ({ video, onClose }: VideoDialogProps) => {
  const id = video ? youtubeId(video.link) : null;

  return (
    <Dialog.Root open={!!video} onOpenChange={open => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-lg bg-background p-3 sm:p-4 shadow-xl focus:outline-none"
          aria-describedby={undefined}
        >
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="min-w-0">
              <Dialog.Title className="font-medium leading-snug">{video?.title}</Dialog.Title>
              <p className="text-xs text-muted-foreground mt-0.5">{video?.author}</p>
            </div>
            <Dialog.Close className="shrink-0 rounded-md p-1 text-muted-foreground hover:text-foreground hover:bg-muted" aria-label="Close video">
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>

          {id && (
            <div className="relative w-full overflow-hidden rounded-md bg-black" style={{ aspectRatio: '16 / 9' }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
                title={video?.title}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>
          )}

          {video && (
            <a
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-blue-500"
            >
              Open on YouTube <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default VideoDialog;
