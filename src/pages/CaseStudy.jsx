import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  Server,
  Globe,
  CreditCard,
  Shield,
  Rocket,
} from "lucide-react";

const CaseStudy = () => {
  const architecture = [
    {
      title: "Frontend (React + Tailwind)",
      desc: "Built with React for dynamic rendering and Tailwind CSS for responsive UI design. Implements protected routes, dynamic course rendering, AI search interface, and Razorpay checkout integration.",
      icon: <Globe className="w-6 h-6 text-indigo-400" />,
    },
    {
      title: "Backend (Node.js + Express)",
      desc: "RESTful API architecture handling authentication, AI requests, course management, enrollment validation, and Razorpay signature verification.",
      icon: <Server className="w-6 h-6 text-green-400" />,
    },
    {
      title: "Database (MongoDB)",
      desc: "NoSQL schema storing users, courses, payments, and enrollments. Optimized using indexing and reference relations for scalable performance.",
      icon: <Database className="w-6 h-6 text-yellow-400" />,
    },
    {
      title: "Payment Gateway (Razorpay)",
      desc: "Secure backend-driven order creation with HMAC SHA256 signature validation to prevent payment spoofing.",
      icon: <CreditCard className="w-6 h-6 text-pink-400" />,
    },
  ];

  const dbSchema = [
    {
      title: "Users Collection",
      fields: [
        "name: String",
        "email: String (unique)",
        "password: Hashed",
        "role: student/admin",
        "enrolledCourses: [ObjectId]",
      ],
    },
    {
      title: "Courses Collection",
      fields: [
        "title: String",
        "description: String",
        "price: Number",
        "modules: Array",
        "createdAt: Date",
      ],
    },
    {
      title: "Payments Collection",
      fields: [
        "userId: ObjectId",
        "courseId: ObjectId",
        "orderId: String",
        "paymentId: String",
        "status: success/failed",
      ],
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-300">

      <div className="px-6 md:px-20 pt-32 pb-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            LMS Website – Engineering Case Study
          </h1>
          <p className="text-gray-400 max-w-4xl mx-auto text-sm md:text-base leading-7">
            This Learning Management System (LMS) is a full-stack web platform
            designed to deliver intelligent course discovery, secure payment
            processing, and scalable backend architecture. The system integrates
            AI-powered course recommendations, robust backend validation,
            and a modular design that supports future expansion such as quizzes,
            certifications, and analytics dashboards.
          </p>
        </motion.div>

        {/* Project Overview */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-6">
            Project Overview
          </h2>
          <p className="text-gray-400 text-sm leading-7 mb-4">
            The objective of this LMS was to create a production-ready learning
            platform where users can search, enroll, and securely purchase courses.
            Unlike static course listing websites, this system integrates AI (Gemini)
            to provide dynamic course recommendations based on user queries.
          </p>
          <p className="text-gray-400 text-sm leading-7">
            The platform follows a clean separation of concerns: the frontend
            handles UI and state management, the backend manages business logic
            and validation, and MongoDB stores structured data for scalability.
          </p>
        </section>

        {/* Architecture Section */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-10">
            System Architecture & Data Flow
          </h2>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {architecture.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 border border-gray-800 p-6 rounded-xl cursor-pointer hover:border-indigo-500 transition-all duration-300 relative"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-white font-semibold mb-2 text-sm">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs leading-6">
                  {item.desc}
                </p>

                {index !== architecture.length - 1 && (
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="hidden md:block absolute top-1/2 -right-6 text-indigo-400 text-xl"
                  >
                    →
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Database Schema */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-10">
            Database Schema Design
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {dbSchema.map((table, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-900 border border-gray-800 p-6 rounded-xl cursor-pointer hover:border-green-400 transition-all duration-300"
              >
                <h3 className="text-white font-semibold mb-4 text-sm">
                  {table.title}
                </h3>
                <ul className="space-y-2">
                  {table.fields.map((field, i) => (
                    <li
                      key={i}
                      className="text-gray-400 text-xs bg-gray-800 px-3 py-1 rounded"
                    >
                      {field}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Security Section */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-6 flex items-center gap-2">
            <Shield className="w-5 h-5 text-indigo-400" />
            Security & Payment Integrity
          </h2>
          <p className="text-gray-400 text-sm leading-7 mb-4">
            Payment validation is handled entirely on the backend. Razorpay
            order creation occurs server-side, preventing manipulation from
            the client. After payment completion, the backend verifies the
            signature using HMAC SHA256 hashing.
          </p>
          <p className="text-gray-400 text-sm leading-7">
            Only verified transactions update the enrollment status in the
            database. This ensures secure course access and eliminates fraud
            attempts.
          </p>
        </section>

        {/* Performance & Scalability */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-6 flex items-center gap-2">
            <Rocket className="w-5 h-5 text-indigo-400" />
            Performance & Scalability Strategy
          </h2>
          <p className="text-gray-400 text-sm leading-7 mb-4">
            The backend follows a modular MVC pattern, making it easy to
            extend features such as quizzes and analytics without affecting
            core functionality. Frequently queried fields are indexed in MongoDB
            for optimized performance.
          </p>
          <p className="text-gray-400 text-sm leading-7">
            The frontend leverages lazy loading, conditional rendering,
            and optimized state updates. The system is deployment-ready
            for Vercel (frontend) and Render or AWS EC2 (backend).
          </p>
        </section>

        {/* Future Roadmap */}
        <section>
          <h2 className="text-2xl font-semibold text-indigo-400 mb-6">
            Future Enhancements
          </h2>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>✔ Progress Tracking Dashboard</li>
            <li>✔ Quiz & Certification System</li>
            <li>✔ Admin Revenue Analytics Panel</li>
            <li>✔ Real-time Notifications</li>
            <li>✔ Role-Based Access Control (RBAC)</li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default CaseStudy;