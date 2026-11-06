import React from 'react';
import { X } from 'lucide-react';

interface ImageLightboxModalProps {
  image: { src: string; title: string; subtitle: string } | null;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-zoom-out"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full bg-[#002b1d] border border-[#C5A059]/40 rounded-2xl overflow-hidden shadow-2xl cursor-default"
      >
        <div className="flex items-center justify-between p-4 bg-[#002217] text-white border-b border-white/10">
          <div>
            <h4 className="font-serif text-lg font-bold text-[#C5A059]">{image.title}</h4>
            <p className="text-xs text-emerald-200/70">{image.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-md transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black/40">
          <img
            src={image.src}
            alt={image.title}
            className="w-full h-auto max-h-[75vh] object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
};
