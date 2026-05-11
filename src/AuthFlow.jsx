import React, { useState } from 'react';
import { 
  Sparkles, Bot, Zap, BarChart3, Mail, Lock, 
  User, Building2, Eye, EyeOff, ShieldCheck 
} from 'lucide-react';
import robotImage from './robot_illustration.png';

const AuthFlow = ({ role = "student" }) => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isCompany = role === "company";

  const handleAuth = (e) => {
    e.preventDefault();
    alert(isSignIn ? "Logged in successfully!" : "Account created successfully!");
  };

  return (
    <div className="h-screen bg-[#F3F4F6] flex items-center justify-center p-2 md:p-4 font-sans overflow-hidden">
      <div className="w-full max-w-5xl max-h-[95vh] bg-white rounded-[2rem] shadow-2xl overflow-y-auto md:overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Pane - Branding & Info (Wider Section) */}
        <div className="md:w-[55%] lg:w-[60%] bg-[#F8F9FE] p-6 md:p-8 lg:p-10 flex flex-col relative justify-center">
          
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6 mt-6 md:mt-8">
            <Sparkles className="w-7 h-7 text-indigo-600" />
            <span className="text-2xl font-bold text-slate-800">IntervAi</span>
          </div>

          <div className="max-w-md mx-auto md:mx-0">
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 leading-tight mb-2">
              AI-Powered Interviews,<br/>
              <span className="text-indigo-600">Smarter Careers.</span>
            </h1>
            <p className="text-sm text-slate-600 mb-6">
              Practice. Improve. Succeed.<br/>All with the power of AI.
            </p>

            {/* 3D Illustration */}
            <div className="relative mb-6 flex justify-center hidden md:flex">
              <img 
                src={robotImage} 
                alt="AI Robot Illustration" 
                className="w-full max-w-[200px] lg:max-w-[240px] rounded-2xl drop-shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-2 rounded-lg shrink-0 mt-1">
                  <Bot className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">AI Mock Interviews</h3>
                  <p className="text-sm text-slate-500">Realistic interviews tailored to your role</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-2 rounded-lg shrink-0 mt-1">
                  <Zap className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Instant AI Feedback</h3>
                  <p className="text-sm text-slate-500">Get actionable feedback instantly</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-2 rounded-lg shrink-0 mt-1">
                  <BarChart3 className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Track & Improve</h3>
                  <p className="text-sm text-slate-500">Monitor progress and level up</p>
                </div>
              </div>
            </div>

            {/* Footer Trust/Testimonial Badge */}
            <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 hidden md:block">
              {isCompany ? (
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-50 p-1.5 rounded-full">
                    <ShieldCheck className="w-5 h-5 text-indigo-600" />
                  </div>
                  <p className="text-xs font-medium text-slate-700">
                    Trusted by 10,000+ companies to hire top talent efficiently.
                  </p>
                </div>
              ) : (
                <div className="flex items-start gap-2">
                  <div className="text-indigo-300 text-xl leading-none">"</div>
                  <div>
                    <p className="text-xs text-slate-600 italic mb-1">
                      IntervAi helped me gain the confidence and skills to crack my dream role.
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-indigo-200 rounded-full flex items-center justify-center text-[10px] font-bold text-indigo-700">P</div>
                      <span className="text-[10px] font-semibold text-slate-900">— Priya S., Product Manager</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
          
          <p className="text-[10px] text-slate-400 mt-4 text-center md:text-left">
            By continuing, you agree to our <a href="#" className="text-indigo-600 hover:underline">Terms of Service</a> and <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>.
          </p>
        </div>

        {/* Right Pane - Form (Narrower Section) */}
        <div className="md:w-[45%] lg:w-[40%] p-6 md:p-8 lg:p-10 flex flex-col justify-center bg-white relative">
          
          <div className="w-full max-w-sm mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-1">
                {isSignIn 
                  ? (isCompany ? "Company Login 👋" : "Welcome back! 👋")
                  : (isCompany ? "Create company account 🚀" : "Create your account 🚀")
                }
              </h2>
              <p className="text-slate-500 text-sm">
                {isSignIn 
                  ? (isCompany ? "Access your employer dashboard" : "Login to continue your interview journey")
                  : (isCompany ? "Start hiring smarter today" : "Start your AI interview journey today")
                }
              </p>
            </div>

            <form onSubmit={handleAuth} className="space-y-4">
              
              {!isSignIn && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{isCompany ? "Company name" : "Full name"}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      {isCompany ? <Building2 className="h-4 w-4 text-slate-400" /> : <User className="h-4 w-4 text-slate-400" />}
                    </div>
                    <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
                      placeholder={isCompany ? "Enter company name" : "Enter your full name"}
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{isCompany && !isSignIn ? "Work email" : "Email address"}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 text-slate-400" />
                  </div>
                  <input
                    type="email"
                    className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-xs font-medium text-slate-700">Password</label>
                  {isSignIn && (
                    <a href="#" className="text-[10px] font-medium text-indigo-600 hover:text-indigo-800">Forgot password?</a>
                  )}
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-3.5 w-3.5 text-slate-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="block w-full pl-9 pr-9 py-2 border border-slate-200 rounded-lg text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
                    placeholder={isSignIn ? "Enter your password" : "Create a password"}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-slate-400 hover:text-slate-600 focus:outline-none">
                      {showPassword ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                </div>
                {!isSignIn && (
                  <p className="text-[10px] text-slate-400 mt-1 leading-tight">Min. 8 characters with a mix of letters, numbers & symbols</p>
                )}
              </div>

              {!isSignIn && (
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Confirm password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-3.5 w-3.5 text-slate-400" />
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      className="block w-full pl-9 pr-9 py-2 border border-slate-200 rounded-lg text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
                      placeholder="Confirm your password"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="text-slate-400 hover:text-slate-600 focus:outline-none">
                        {showConfirmPassword ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {!isSignIn && (
                <div className="flex items-start mt-3 mb-2">
                  <div className="flex items-center h-4">
                    <input id="terms" type="checkbox" className="w-3.5 h-3.5 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500" />
                  </div>
                  <div className="ml-2 text-[10px] leading-tight">
                    <label htmlFor="terms" className="text-slate-500">
                      I agree to the <a href="#" className="text-indigo-600 hover:underline">Terms of Service</a> and <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>
                    </label>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-[#6366f1] hover:bg-indigo-600 text-white font-medium py-2 rounded-lg transition-colors shadow-lg shadow-indigo-200 mt-3 text-sm"
              >
                {isSignIn ? "Login" : "Sign up"}
              </button>
            </form>

            <div className="mt-5">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex justify-center text-[10px]">
                  <span className="px-2 bg-white text-slate-400">or</span>
                </div>
              </div>

              <div className="mt-4 space-y-2.5">
                <button className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 py-2 px-4 rounded-lg font-medium hover:bg-slate-50 transition-colors text-xs">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Continue with Google
                </button>
                <button className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 py-2 px-4 rounded-lg font-medium hover:bg-slate-50 transition-colors text-xs">
                  <svg className="w-3.5 h-3.5 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Continue with LinkedIn
                </button>
              </div>

              <p className="text-center text-slate-500 mt-6 text-xs">
                {isSignIn ? "Don't have an account? " : "Already have an account? "}
                <button type="button" onClick={() => setIsSignIn(!isSignIn)} className="font-medium text-indigo-600 hover:text-indigo-800">
                  {isSignIn ? "Sign up" : "Login"}
                </button>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthFlow;
