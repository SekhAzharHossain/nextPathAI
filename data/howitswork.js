import { Lightbulb, SearchCheck, Brain, BadgeCheck } from "lucide-react";

export const howItWorks = [
  {
    title: "Create Your Profile",
    description:
      "Sign up and provide your career preferences, skills, and goals. Our AI uses this to tailor your experience.",
    icon: <BadgeCheck className="h-6 w-6 text-primary" />,
  },
  {
    title: "Get Personalized Guidance",
    description:
      "Receive a customized career roadmap, job matches, and learning paths aligned with your profile.",
    icon: <Lightbulb className="h-6 w-6 text-primary" />,
  },
  {
    title: "Practice with Smart Tools",
    description:
      "Use our AI-powered tools for resume building, interview preparation, and skills development.",
    icon: <Brain className="h-6 w-6 text-primary" />,
  },
  {
    title: "Apply & Track Progress",
    description:
      "Apply directly to jobs, monitor your growth, and adjust your goals with real-time feedback.",
    icon: <SearchCheck className="h-6 w-6 text-primary" />,
  },
];
