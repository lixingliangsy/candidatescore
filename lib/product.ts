export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "CandidateScore",
  slug: "candidatescore",
  tagline: "Score any candidate against your job description.",
  description: "Paste a resume and the job description to get a structured fit scorecard: strengths, gaps, and the evidence behind each call.",
  toolTitle: "Score a candidate",
  resultLabel: "Your scorecard",
  ctaLabel: "Score candidate",
  features: [
  "Fit score (1-10)",
  "Strengths vs JD",
  "Gap flags",
  "Evidence per call"
],
  inputs: [
  {
    "key": "jd",
    "label": "Job description",
    "type": "textarea",
    "placeholder": "Paste the JD text here"
  },
  {
    "key": "resume",
    "label": "Candidate resume / CV",
    "type": "textarea",
    "placeholder": "Paste the resume text here"
  },
  {
    "key": "weights",
    "label": "Emphasis",
    "type": "select",
    "options": [
      "Skills",
      "Experience",
      "Both"
    ]
  }
] as InputField[],
  systemPrompt: "You are a fair, evidence-based recruiter. Given a job description and a candidate resume, produce a fit scorecard: an overall fit score 1-10, 3-4 strengths mapped to JD requirements, 2-3 gaps, and a one-line piece of evidence for each call drawn from the resume text. Be objective; do not infer protected attributes. In demo mode, return a realistic sample scorecard following this structure.",
  pricing: [
  {
    "tier": "Free",
    "price": "$0",
    "desc": "5 scores/mo"
  },
  {
    "tier": "Pro",
    "price": "$19/mo",
    "desc": "Unlimited, save history"
  }
],
  mock: (inputs: Record<string, string>): string => {
  const jd = (inputs['jd'] || '').trim()
  const cv = (inputs['resume'] || '').trim()
  const w = inputs['weights'] || 'Both'
  if (!cv) return 'Paste a resume to score the candidate.'
  let out = 'FIT SCORECARD (emphasis: ' + w + ')\n\n'
  out += 'OVERALL FIT: 8 / 10\n\n'
  out += 'STRENGTHS\n'
  out += '- Meets the core requirement set in the JD (evidence: listed 5 yrs in the field).\n'
  out += '- Shows ownership on delivered projects (evidence: led a migration end to end).\n'
  out += '- Communicates clearly in writing (evidence: concise, structured resume).\n\n'
  out += 'GAPS\n'
  out += '- Lighter on one JD nice-to-have (evidence: no mention of that tool).\n'
  out += '- No explicit evidence of the scale we need (evidence: team size not stated).\n\n'
  out += '\n--- (Mock demo. Paste the JD + resume for an evidence-based score.)'
  return out
}
}
