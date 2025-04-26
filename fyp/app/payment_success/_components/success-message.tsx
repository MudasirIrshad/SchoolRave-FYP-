"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function PaymentSuccessMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-screen text-center px-4"
    >
      <CheckCircle size={64} className="text-green-600 mb-4 animate-pulse" />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl font-bold text-green-700 mb-2"
      >
        Payment Successful!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-lg text-green-800"
      >
        Thank you for subscribing. We're finalizing your account setup.
      </motion.p>

      <motion.p
        animate={{ opacity: [0, 2, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-base font-semibold text-green-700 mt-4"
      >
        Redirecting to your dashboard...
      </motion.p>
    </motion.div>
  );
}
