import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-[#0A0A0A] rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto m-4">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 text-white/50 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>
        {children}
      </div>
    </div>
  );
}