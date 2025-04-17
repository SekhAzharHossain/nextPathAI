import { FileText ,PenBox, Mic, LayoutDashboard, MessagesSquare, Bot} from "lucide-react";

export const features = [
    {
      title: "AI-Powered Resume Builder",
      description: "Create tailored resumes with AI suggestions to highlight your strengths and match job descriptions.",
      icon: <FileText className="w-10 h-10 mb-4 text-primary"/>, // e.g., from lucide-react
    },
    {
      title: "Cover Letter Generator",
      description: "Generate personalized and professional cover letters that make an impact.",
      icon: <PenBox className="w-10 h-10 mb-4 text-primary"/>,
      
    },
    {
      title: "Mock Interview Practice",
      description: "Prepare for interviews with realistic AI-driven mock sessions and performance feedback.",
      icon: <Mic className="w-10 h-10 mb-4 text-primary"/>, // or "GraduationCap"
    },
    {
      title: "Career Insights Dashboard",
      description: "Track your growth, explore opportunities, and get actionable insights tailored to your career goals.",
      icon: <LayoutDashboard className="w-10 h-10 mb-4 text-primary"/>,
    },
    {
      title: "AI Career Assistant",
      description: "Ask anything career-related and get instant, intelligent advice powered by Gemini AI.",
      icon: <MessagesSquare className="w-10 h-10 mb-4 text-primary"/>, // or "MessagesSquare"
    },
  ];
  