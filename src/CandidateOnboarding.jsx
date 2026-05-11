import React from 'react';
import { Upload, Brain, Sparkles } from 'lucide-react';

const CandidateOnboarding = () => {
  return (
    <div className="min-h-screen w-full bg-[#0B0F19] text-white flex flex-col items-center justify-center p-6 font-sans">
      <div className="w-full max-w-2xl bg-[#1a1f36] rounded-3xl p-8 md:p-12 shadow-2xl">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Upload your resume</h2>
          <p className="text-slate-400">We'll use AI to match you with the right roles</p>
        </div>

        {/* Upload Area */}
        <div className="border-2 border-dashed border-slate-600 rounded-2xl p-10 flex flex-col items-center justify-center bg-[#1E253A]/30 hover:bg-[#1E253A]/50 transition-colors cursor-pointer mb-8 group">
          <div className="bg-slate-700/50 p-4 rounded-full mb-4 group-hover:scale-105 transition-transform">
            <Upload className="w-8 h-8 text-slate-300" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Click to upload or drag and drop</h3>
          <p className="text-slate-500 text-sm">PDF, DOC, or DOCX (max. 10MB)</p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-[#242b47] rounded-xl p-5 flex flex-col">
            <Brain className="w-6 h-6 text-indigo-400 mb-4" />
            <h4 className="text-lg font-semibold mb-1">AI Analysis</h4>
            <p className="text-slate-400 text-sm">Extract skills instantly</p>
          </div>
          
          <div className="bg-[#242b47] rounded-xl p-5 flex flex-col">
            <Sparkles className="w-6 h-6 text-blue-400 mb-4" />
            <h4 className="text-lg font-semibold mb-1">Smart Matching</h4>
            <p className="text-slate-400 text-sm">Find perfect roles</p>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full bg-[#475569] hover:bg-[#334155] text-white py-4 rounded-xl font-semibold transition-colors shadow-lg">
          Continue
        </button>

      </div>
    </div>
  );
};

export default CandidateOnboarding;
