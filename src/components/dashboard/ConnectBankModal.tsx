import React from 'react';
import { X, Shield, Lock, CreditCard } from 'lucide-react';

interface ConnectBankModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConnectBankModal: React.FC<ConnectBankModalProps> = ({ isOpen, onClose }) => {
  // TODO: Integrate with Plaid Link or MX for production bank connections
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-card w-full max-w-md rounded-3xl border border-border shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h3 className="text-xl font-bold">Connect your bank</h3>
          <button onClick={onClose} className="p-2 hover:bg-accent rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-2xl border border-primary/10 mb-6">
            <div className="p-2 rounded-xl bg-primary/10 text-primary">
              <Shield size={24} />
            </div>
            <div>
              <p className="text-sm font-bold">Bank-grade security</p>
              <p className="text-xs text-muted-foreground">We use 256-bit encryption to keep your data safe and private.</p>
            </div>
          </div>

          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-4 rounded-2xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">C</div>
                <div className="text-left">
                  <p className="text-sm font-bold">Chase Bank</p>
                  <p className="text-xs text-muted-foreground">Personal & Business</p>
                </div>
              </div>
              <Lock size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </button>

            <button className="w-full flex items-center justify-between p-4 rounded-2xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">B</div>
                <div className="text-left">
                  <p className="text-sm font-bold">Bank of America</p>
                  <p className="text-xs text-muted-foreground">Checking & Savings</p>
                </div>
              </div>
              <Lock size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </button>

            <button className="w-full flex items-center justify-between p-4 rounded-2xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                  <CreditCard size={20} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold">Other Financial Institution</p>
                  <p className="text-xs text-muted-foreground">Search from 10,000+ banks</p>
                </div>
              </div>
              <Lock size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
          </div>

          <p className="text-[10px] text-center text-muted-foreground mt-6 px-4">
            By connecting your account, you agree to our <span className="underline cursor-pointer">Terms of Service</span> and <span className="underline cursor-pointer">Privacy Policy</span>. We will never share your credentials.
          </p>
        </div>

        <div className="p-6 bg-accent/30 border-t border-border flex gap-3">
          <button onClick={onClose} className="flex-1 py-3 text-sm font-bold hover:bg-accent rounded-xl transition-colors">
            Cancel
          </button>
          <button className="flex-1 py-3 bg-primary text-primary-foreground text-sm font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectBankModal;
