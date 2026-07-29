import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "salesforce-harness",
    title: "Self-Evolving Salesforce Harness",
    description:
      "An AI-powered sales intelligence platform that integrates Salesforce CRM with backend services to automate workflows and support intelligent user interactions.",

    highlights: [
      "Developed backend features for an AI-powered sales intelligence platform.",
      "Implemented REST APIs to support application functionality and integrations.",
      "Contributed to chatbot memory management and workflow orchestration.",
      "Engineered scalable backend components for enterprise CRM workflows.",
    ],

    technologies: [
      "Python",
      "FastAPI",
      "React",
      "PostgreSQL",
      "Temporal",
      "Docker",
      "AWS",
      "Git",
      "Neo4j",
    ],

    github: "",
    demo: "",
    featured: true,
  },

  {
    id: "trello-backend",
    title: "Trello Backend API",
    description:
      "A Trello-inspired backend application supporting authentication, boards, sections, tickets, invitations, and role-based access control.",

    highlights: [
      "Built secure REST APIs for project and task management.",
      "Designed relational database models using SQLAlchemy ORM.",
      "Implemented authentication and role-based authorization.",
      "Containerized and deployed backend services on AWS.",
    ],

    technologies: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Git",
    ],

    github: "",
    demo: "",
  },

  {
    id: "smart-log-analyzer",
    title: "Smart Log Analyzer",
    description:
      "A web application that analyzes application logs and generates structured summaries to simplify debugging and monitoring.",

    highlights: [
      "Processed application logs to identify errors and traffic patterns.",
      "Built REST APIs for log analysis and history management.",
      "Generated categorized reports with structured JSON responses.",
      "Designed an interactive dashboard for visualizing log insights.",
    ],

    technologies: [
      "Python",
      "FastAPI",
      "React",
      "Chart.js",
      "MySQL",
    ],

    github: "",
    demo: "",
  },

  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description:
      "A console-based expense management application for tracking expenses, budgeting, and financial records using object-oriented programming.",

    highlights: [
      "Implemented expense tracking and budget management features.",
      "Applied object-oriented programming principles for modular design.",
      "Managed financial records using a structured approach.",
      "Designed a simple and user-friendly command-line interface.",
    ],

    technologies: [
      "Python",
      "OOP",
      "MySQL",
    ],

    github: "",
    demo: "",
  },
];