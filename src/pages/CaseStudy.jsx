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

      <div className="px-4 sm:px-6 md:px-12 lg:px-20 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 sm:mb-20"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              LMS Website – Engineering Case Study
            </h1>

            <p className="text-gray-400 max-w-4xl mx-auto text-sm sm:text-base leading-7">
              This Learning Management System (LMS) is a full-stack web platform
              designed to deliver intelligent course discovery, secure payment
              processing, and scalable backend architecture. The system integrates
              AI-powered recommendations, backend validation, and modular design.
            </p>
          </motion.div>

          {/* Architecture Section */}
          <section className="mb-20 sm:mb-24">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-400 mb-10">
              System Architecture & Data Flow
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {architecture.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-900 border border-gray-800 p-5 sm:p-6 rounded-xl hover:border-indigo-500 transition-all duration-300 relative"
                >
                  <div className="mb-4">{item.icon}</div>

                  <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-xs sm:text-sm leading-6">
                    {item.desc}
                  </p>

                  {/* Desktop Arrow */}
                  {index !== architecture.length - 1 && (
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="hidden lg:block absolute top-1/2 -right-6 text-indigo-400 text-xl"
                    >
                      →
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>

          {/* Database Section */}
          <section className="mb-20 sm:mb-24">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-400 mb-10">
              Database Schema Design
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {dbSchema.map((table, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="bg-gray-900 border border-gray-800 p-5 sm:p-6 rounded-xl hover:border-green-400 transition-all duration-300"
                >
                  <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">
                    {table.title}
                  </h3>

                  <ul className="space-y-2">
                    {table.fields.map((field, i) => (
                      <li
                        key={i}
                        className="text-gray-400 text-xs sm:text-sm bg-gray-800 px-3 py-1 rounded"
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
          <section className="mb-20 sm:mb-24">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-400 mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-indigo-400" />
              Security & Payment Integrity
            </h2>

            <p className="text-gray-400 text-sm sm:text-base leading-7 mb-4">
              Payment validation is handled entirely on the backend.
              Order creation occurs server-side and signature verification
              ensures transaction authenticity.
            </p>

            <p className="text-gray-400 text-sm sm:text-base leading-7">
              Only verified transactions update enrollment status,
              eliminating fraud attempts.
            </p>
          </section>

          {/* Performance Section */}
          <section className="mb-20 sm:mb-24">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-400 mb-6 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-indigo-400" />
              Performance & Scalability Strategy
            </h2>

            <p className="text-gray-400 text-sm sm:text-base leading-7 mb-4">
              Backend follows modular MVC architecture. MongoDB indexing
              improves frequently queried fields performance.
            </p>

            <p className="text-gray-400 text-sm sm:text-base leading-7">
              Frontend leverages lazy loading and optimized state management.
              Deployment-ready for Vercel and cloud environments.
            </p>
          </section>

          {/* Future Section */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-400 mb-6">
              Future Enhancements
            </h2>

            <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
              <li>✔ Progress Tracking Dashboard</li>
              <li>✔ Quiz & Certification System</li>
              <li>✔ Admin Revenue Analytics Panel</li>
              <li>✔ Real-time Notifications</li>
              <li>✔ Role-Based Access Control (RBAC)</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};

export default CaseStudy;