"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

type ContactProps = {
  contact: {
    phone: string;
    email: string;
    address: string;
  };
};

type FormValues = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

// Initial form values
const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

// Validation schema
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

// Submit handler
const onSubmit = (
  values: FormValues,
  { resetForm }: { resetForm: () => void }
) => {
  console.log("Form data", values);
  alert("Form submitted successfully!");
  resetForm();
};

// Form fields configuration
const formFields = [
  { label: "Name", name: "name", type: "text", placeholder: "Your name" },
  { label: "Email", name: "email", type: "email", placeholder: "Your email" },
  {
    label: "Phone Number",
    name: "phone",
    type: "text",
    placeholder: "Your phone number",
  },
  { label: "Subject", name: "subject", type: "text", placeholder: "Subject" },
  {
    label: "Message",
    name: "message",
    type: "textarea",
    placeholder: "Write your message...",
  },
];

const Contact = ({ contact }: ContactProps) => {
  return (
    <div className="text-white w-full pt-10 min-h-screen bg-[#0f0715] relative overflow-hidden">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto gap-20">
        <hr className="mb-2 border-gray-600" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-white">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold uppercase">Let's Connect</h2>
            <p className="text-gray-400 font-semibold">
              Say Hello at {contact.email}
            </p>
            <p className="text-gray-400 font-semibold">{contact.phone}</p>
            <p className="text-gray-400 font-semibold">{contact.address}</p>
            <p className="text-gray-400">For more info, Here's my resume</p>
            <div className="flex gap-4 text-yellow-400 text-2xl">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form className="flex flex-col gap-4">
                {formFields.map(({ label, name, type, placeholder }) => (
                  <div key={name} className="flex flex-col">
                    <label htmlFor={name} className="mb-1 font-semibold">
                      {label}
                    </label>
                    {type === "textarea" ? (
                      <Field
                        as="textarea"
                        id={name}
                        name={name}
                        rows={4}
                        placeholder={placeholder}
                        className="w-full p-2 rounded bg-gray-200 text-black"
                      />
                    ) : (
                      <Field
                        type={type}
                        id={name}
                        name={name}
                        placeholder={placeholder}
                        className="w-full p-2 rounded bg-gray-200 text-black"
                      />
                    )}
                    <ErrorMessage
                      name={name}
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                ))}
                <button
                  type="submit"
                  className="w-32 bg-blue-700 hover:bg-blue-900 transition-colors duration-200 text-white font-semibold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
