export const links = {
  email: "mailto:c.ludo1995@gmail.com",
  linkedin: "https://www.linkedin.com/in/ludovico-cuoghi/",
  github: "https://github.com/ludovicocuoghi",
  kaggle: "https://www.kaggle.com/ludovicocuoghi",
} as const;

export const experience = [
  {
    period: "2026 — Now",
    role: "Data Scientist II",
    company: "QuantumBlack, AI by McKinsey",
    location: "Tokyo, Japan",
    summary: "Data science and AI projects for clients.",
  },
  {
    period: "2023 — 2026",
    role: "Data Scientist",
    company: "FLYWHEEL Inc.",
    location: "Tokyo, Japan",
    summary:
      "Recommendation systems, retrieval-augmented generation, and data pipelines.",
  },
  {
    period: "2022 — 2023",
    role: "Data Scientist",
    company: "Rakuten Mobile",
    location: "Tokyo, Japan",
    summary: "Customer churn modeling and analysis of telecommunications data.",
  },
] as const;

export const featuredProjects = [
  {
    number: "01",
    category: "Language models · Retrieval",
    title: "RAG with reranking",
    description:
      "A document question-answering project using Qdrant for retrieval and a reranking model to select relevant context.",
    stack: ["Python", "Qdrant", "LangChain", "Streamlit"],
    url: "https://github.com/ludovicocuoghi/rag_reranker_project",
    linkText: "Explore the repository",
  },
  {
    number: "02",
    category: "Data science · Kaggle",
    title: "Kaggle notebooks",
    description:
      "Notebooks covering time-series forecasting, natural language processing, data analysis, and machine learning.",
    stack: ["Python", "PyTorch", "XGBoost", "NLP"],
    url: "https://www.kaggle.com/ludovicocuoghi/code",
    linkText: "Browse Kaggle notebooks",
  },
  {
    number: "03",
    category: "Game development · C++",
    title: "Rome Interstellar Paradox",
    description:
      "A single-player 2D action game built with C++ and SFML. The game follows an alien Roman soldier through different eras.",
    stack: ["C++", "SFML", "Game systems"],
    url: "https://github.com/ludovicocuoghi/roman_paradox",
    linkText: "See the game project",
  },
] as const;

export const moreProjects = [
  {
    title: "COVID-19 forecasting in Italy",
    type: "Time series · Kaggle",
    url: "https://www.kaggle.com/code/ludovicocuoghi/covid19-italy-analysis-and-forecasting",
  },
  {
    title: "Twitter sentiment with BERT & RoBERTa",
    type: "NLP · Kaggle",
    url: "https://www.kaggle.com/code/ludovicocuoghi/twitter-sentiment-analysis-with-bert-roberta",
  },
  {
    title: "PySpark, SQL & salary prediction",
    type: "Data engineering · Kaggle",
    url: "https://www.kaggle.com/code/ludovicocuoghi/pyspark-sql-queries-and-machine-learning",
  },
] as const;
