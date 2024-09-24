"use client";

import { useState, useEffect } from "react";
import { Spin, message } from "antd"; // Import Ant Design components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

// Contact info array
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "(+84) 914 048 099",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "mhuynk1005@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    value: "Khue My Ward, Ngu Hanh Son District, Da Nang City, Viet Nam",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // State for loading
  const [canSendMessage, setCanSendMessage] = useState(true); // State to track sending ability
  const [remainingTime, setRemainingTime] = useState(0); // State for countdown timer

  // Effect to check if the user can send a message on component mount
  useEffect(() => {
    const lastMessageSent = localStorage.getItem("lastMessageSent");
    if (lastMessageSent) {
      const timeElapsed = Date.now() - parseInt(lastMessageSent);
      // If less than 2 minutes (120000 ms), set canSendMessage to false
      if (timeElapsed < 2 * 60 * 1000) {
        setCanSendMessage(false);
        const remainingTime = 2 * 60 * 1000 - timeElapsed;
        setRemainingTime(remainingTime);

        // Timer to update remaining time every second
        const timer = setInterval(() => {
          setRemainingTime((prevTime) => {
            if (prevTime <= 1000) {
              clearInterval(timer);
              setCanSendMessage(true);
              localStorage.removeItem("lastMessageSent"); // Clear the timestamp after enabling
              return 0; // Reset remaining time
            }
            return prevTime - 1000; // Decrement remaining time by 1 second
          });
        }, 1000);

        // Clean up the timer on component unmount
        return () => clearInterval(timer);
      }
    }
  }, []);

  // Handle form change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!canSendMessage) {
      message.warning(
        "You should wait for 2 minutes before sending another message."
      ); // Show warning message
      return; // Stop submission
    }

    setLoading(true); // Start loading

    // Validation: Check if all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      setLoading(false); // Stop loading
      message.warning("Please fill in all fields."); // Show warning message
      return; // Stop submission
    }

    // Log the form data to the console
    console.log("Form data being sent:", formData);

    // Send email via EmailJS
    emailjs
      .send(
        "service_5bxijzi", // Your EmailJS service ID
        "template_h79ei1j", // Your EmailJS template ID
        formData, // The data being sent
        "KafcRLly_FhfP5GHu" // Your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          message.success("Message sent successfully!"); // Display success toast
          setCanSendMessage(false); // Disable sending for 2 minutes
          localStorage.setItem("lastMessageSent", Date.now()); // Store the current time in localStorage
          setRemainingTime(2 * 60 * 1000); // Set remaining time to 2 minutes

          // Timer to count down remaining time
          const timer = setInterval(() => {
            setRemainingTime((prevTime) => {
              if (prevTime <= 1000) {
                clearInterval(timer);
                setCanSendMessage(true);
                localStorage.removeItem("lastMessageSent"); // Clear the timestamp after enabling
                return 0; // Reset remaining time
              }
              return prevTime - 1000; // Decrement remaining time by 1 second
            });
          }, 1000);

          // Clean up the timer on component unmount
          return () => clearInterval(timer);
        },
        (error) => {
          console.log(error.text);
          message.error("Failed to send message. Please try again."); // Display error toast
        }
      )
      .finally(() => {
        setLoading(false); // Stop loading regardless of success or error
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      });
  };

  // Function to format remaining time in mm:ss
  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`; // Format as mm:ss
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="relative py-6"
    >
      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Spin size="large" />
        </div>
      )}

      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Interested in collaborating? Whether it&apos;s freelance work or
                a new project, feel free to reach out via the form below or
                directly by email.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    type="email"
                    required
                  />
                </div>
              </div>

              {/* textarea */}
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="h-[200px]"
                placeholder="Type your message here ..."
                required
              />

              {/* Timer Display */}
              {!canSendMessage && (
                <div className="text-red-500">
                  You can send another message in: {formatTime(remainingTime)}
                </div>
              )}

              {/* button */}
              <Button
                type="submit"
                size="md"
                className="max-w-40 px-6 py-3"
                disabled={!canSendMessage}
              >
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.value}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
