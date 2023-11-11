module.exports = [
  {
    quizId: "1",
    quizTitle: "Math Quiz",
    quizDescription: "This quiz will test your knowledge of basic math concepts.",
    quizType: "MCQ",
    quizWindow: {
      startTime: new Date("2023-11-10T12:00:00.000Z"),
      endTime: new Date("2023-11-10T13:00:00.000Z"),
    },
    timedQuiz: true,
    timedSections: [],
    autosaveProgress: true,
    shareable: false,
    presetAnswers: [],
    resultShowcase: "after-finishing",
    resultVisibility: "students",
    scoring: {
      pointsPerQuestion: 1,
      penaltyPerIncorrectAnswer: 0.25,
    },
    leaderboard: {
      enabled: true,
      sortingCriteria: "score",
    },
  },
  {
    quizId: "2",
    quizTitle: "Science Quiz",
    quizDescription: "This quiz will test your knowledge of basic science concepts.",
    quizType: "T/F",
    quizWindow: {},
    timedQuiz: false,
    timedSections: [],
    autosaveProgress: false,
    shareable: true,
    presetAnswers: [],
    resultShowcase: "real-time",
    resultVisibility: "all",
    scoring: {
      pointsPerQuestion: 2,
      penaltyPerIncorrectAnswer: 0.5,
    },
    leaderboard: {
      enabled: false,
    },
  },
  {
    quizId: "3",
    quizTitle: "Civics Quiz",
    quizDescription: "This quiz will test your knowledge of basic history concepts.",
    quizType: "Long Answer",
    quizWindow: {},
    timedQuiz: false,
    timedSections: [],
    autosaveProgress: true,
    shareable: false,
    presetAnswers: [],
    resultShowcase: "after-finishing",
    resultVisibility: "admin",
    scoring: {
      pointsPerQuestion: 5,
      penaltyPerIncorrectAnswer: 0,
    },
    leaderboard: {
      enabled: false,
    },
  },
];
