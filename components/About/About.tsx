"use client";
import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  aboutHead,
  stats,
  capabilities,
  experience,
  connect,
} from "@/Data/About";

type AboutHeadType = {
  heading: string;
  intro: string;
  description: string;
  downloadButtonText: string;
};

type StatsType = {
  image: StaticImageData;
  number: string;
  title: string;
};

type CapabilitiesType = {
  heading: string;
  description: string;
  skills: string[];
};

type JobType = {
  role: string;
  company: string;
  duration: string;
  description: string;
};

type ExperienceType = {
  heading: string;
  jobs: JobType[];
};

type ConnectType = {
  heading: string;
  email: string;
  resume: string;
};

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const formFields = [
  { label: "Name", name: "name", type: "text", placeholder: "Your name" },
  { label: "Email", name: "email", type: "email", placeholder: "Your email" },
  {
    label: "Phone Number",
    name: "phone",
    type: "phone",
    placeholder: "Your Phone Number",
  },
  { label: "Subject", name: "subject", type: "text", placeholder: "Subject" },
  {
    label: "Message",
    name: "message",
    type: "textarea",
    placeholder: "Write your message...",
  },
];

const initialValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const onSubmit = (
  values: FormValues,
  { resetForm }: { resetForm: () => void }
) => {
  console.log("Form data", values);
  alert("Form submitted successfully!");
  resetForm();
};

const About = () => {
  const aboutHeadData: AboutHeadType = aboutHead;
  const statsData: StatsType[] = stats.stat;
  const capabilitiesData: CapabilitiesType = capabilities;
  const experienceData: ExperienceType = experience;
  const connectData: ConnectType = connect;

  return (
    <div className="text-white w-full pt-24 sm:pt-28 lg:pt-[25vh] min-h-screen bg-[#0f0715] relative overflow-hidden">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto gap-20">
        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="font-bold text-5xl text-white uppercase">
            {aboutHeadData.heading}
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold text-white">{aboutHeadData.intro}</p>
            <p className="font-semibold text-[#696969]">
              {aboutHeadData.description}
            </p>
            <div className="flex items-center text-white gap-8">
              <button className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-md md:text-lg transition-all duration-200 rounded-lg bg-blue-700 hover:bg-blue-900 flex items-center space-x-2">
                {aboutHeadData.downloadButtonText}
              </button>
              <div className="flex gap-6">
                <FaLinkedin className="text-2xl sm:text-3xl md:text-4xl" />
                <FaGithub className="text-2xl sm:text-3xl md:text-4xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col border border-gray-500 p-8 rounded-2xl"
            >
              <div className="flex flex-col gap-2 items-center">
                <Image
                  className="w-24"
                  src={stat.image}
                  alt={stat.title}
                  width={64}
                  height={64}
                />
                <p className="font-bold text-xl">{stat.number}+</p>
                <p className="text-md font-bold text-gray-400">{stat.title}</p>
              </div>
            </div>
          ))}
        </div>
        <hr className="my-4 border-gray-600" />

        {/* Capabilities Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="font-bold text-4xl uppercase">
              {capabilitiesData.heading}
            </p>
          </div>
          <div className="grid grid-col-1 gap-6">
            <p className="font-semibold text-[#696969]">
              {capabilitiesData.description}
            </p>
            <div className="flex flex-wrap gap-4">
              {capabilitiesData.skills.map((skill, index) => (
                <p
                  key={index}
                  className="text-sm border border-gray-400 rounded-3xl p-1 px-4 uppercase"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-600" />
        {/* Experience Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="font-bold text-4xl uppercase">
              {experienceData.heading}
            </p>
          </div>
          <div className="grid grid-col-1 gap-6">
            {experienceData.jobs.map((job, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <p className="text-xl font-semibold">{job.role}</p>
                  <p className="text-[#696969]">{job.duration}</p>
                </div>
                <p className="text-md text-[#FFFF33]">{job.company}</p>
                <p className="font-semibold text-[#696969]">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-4 border-gray-600" />
        {/* Connect Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            <p className="font-bold text-4xl uppercase">
              {connectData.heading}
            </p>
            <p className="font-semibold text-[#696969]">
              Say Hello at {connectData.email}
            </p>
            <p className="font-semibold text-[#696969]">{connectData.resume}</p>
            <div className="flex gap-6">
              <FaGithub className="text-xl sm:text-3xl md:text-4xl" />
              <FaLinkedin className="text-xl sm:text-3xl md:text-4xl" />
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
                  <div key={name}>
                    <label htmlFor={name} className="block mb-1">
                      {label}
                    </label>
                    {type === "textarea" ? (
                      <Field
                        as="textarea"
                        id={name}
                        name={name}
                        rows={4}
                        className="w-full p-2 rounded text-black bg-[#C0C0C0]"
                        placeholder={placeholder}
                      />
                    ) : (
                      <Field
                        type={type}
                        id={name}
                        name={name}
                        className="w-full p-2 rounded text-black bg-[#C0C0C0]"
                        placeholder={placeholder}
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
                  className="bg-blue-700 hover:bg-blue-900 transition-colors duration-200 text-white font-semibold py-2 px-4 rounded w-24"
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

export default About;
