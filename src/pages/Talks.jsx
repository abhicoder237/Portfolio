import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Talks = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { width, height, left, top } =
      e.currentTarget.getBoundingClientRect();

    const x = (e.clientY - top - height / 2) / 20;
    const y = (e.clientX - left - width / 2) / 20;

    setRotate({ x: -x, y: y });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const userName = form.user_name.value;
    const userEmail = form.user_email.value;
    const projectType = form.project_type.value;
    const message = form.message.value;

    const aiReply = `
Hi ${userName},

Thank you for reaching out regarding your ${projectType} project.

Based on your message:
"${message}"

I’d love to explore how we can build this into a scalable solution.
I’ll respond within 24 hours.

Best regards,
Abhishek
`;

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          user_name: userName,
          user_email: userEmail,
          project_type: projectType,
          message: message,
        },
        "YOUR_PUBLIC_KEY"
      );

      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_AUTO_REPLY_TEMPLATE_ID",
        {
          user_name: userName,
          user_email: userEmail,
          message: aiReply,
        },
        "YOUR_PUBLIC_KEY"
      );

      setSuccess(true);
      form.reset();
    } catch (error) {
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-300 px-6 md:px-20 pt-32 pb-20 flex items-center justify-center">

      <motion.div
        className="w-full max-w-3xl perspective-[1200px]"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.form
          onSubmit={sendEmail}
          animate={{
            rotateX: rotate.x,
            rotateY: rotate.y,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
          className="bg-gray-900/80 backdrop-blur-xl p-10 rounded-2xl border border-gray-800 shadow-2xl transform-gpu"
        >
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            Let’s Talk
          </h1>

          <div className="space-y-6">

            <motion.input
              whileHover={{ scale: 1.02 }}
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full bg-gray-800 p-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />

            <motion.input
              whileHover={{ scale: 1.02 }}
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full bg-gray-800 p-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />

            <motion.select
              whileHover={{ scale: 1.02 }}
              name="project_type"
              required
              className="w-full bg-gray-800 p-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            >
              <option value="">Select Project Type</option>
              <option>Web Application</option>
              <option>SaaS Platform</option>
              <option>AI Integration</option>
              <option>LMS Development</option>
            </motion.select>

            <motion.textarea
              whileHover={{ scale: 1.02 }}
              name="message"
              rows="5"
              placeholder="Tell me about your project..."
              required
              className="w-full bg-gray-800 p-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl text-sm transition shadow-lg"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {success && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400 text-sm text-center"
              >
                ✅ Message sent successfully! Check your email for confirmation.
              </motion.p>
            )}

          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Talks;