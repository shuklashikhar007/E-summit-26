"use client";
import React, { FunctionComponent } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { data } from "../lib/data";

const FormSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z
    .string()
    .email({ message: "Invalid email address." })
    .min(1, { message: "Email is required." }),
  phone: z
    .string()
    .min(10, { message: "Invalid phone number." })
    .min(1, { message: "Phone number is required." }),
  message: z.string().max(500),
  role: z.enum(["Founder", "Investor", "Student", "Sponsor", "Speaker"]),
});

const Contact: FunctionComponent = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      role: "Founder",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      data.push(values);
      console.log(data);
      alert("Submitted successfully.");
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div
      className="
        sm:mx-24 py-12 
        bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#1a1a1a]
        text-yellow-400
      "
    >
      {/* Header */}
      <div>
        <h1
          className="
            text-5xl sm:text-6xl flex justify-center font-extrabold
            text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500
            drop-shadow-[0_0_10px_rgba(255,215,0,0.4)]
            sm:py-6
          "
        >
          Contact Us
        </h1>
      </div>

      {/* Contact info */}
      <div className="grid grid-cols-2 sm:flex sm:justify-around mt-8">
        <div>
          <p className="flex justify-center font-semibold text-2xl text-yellow-400 mb-2">
            Email
          </p>
          <Link href="mailto:ecell@iitbhu.ac.in">
            <p className="flex justify-center text-gray-300 hover:text-yellow-300 cursor-pointer transition">
              ecell@iitbhu.ac.in
            </p>
          </Link>
        </div>

        <div>
          <p className="flex justify-center font-semibold text-2xl text-yellow-400 mb-2">
            Phone
          </p>
          <Link href={"tel:+919120787959"}>
            <p className="flex justify-center text-gray-300 hover:text-yellow-300 cursor-pointer transition">
              +91 9120787959
            </p>
          </Link>
        </div>

        {/* Socials */}
        <div className="col-span-2 mt-6">
          <p className="flex justify-center font-semibold text-2xl text-yellow-400 mb-2">
            Social
          </p>
          <div className="flex justify-center gap-6">
            <Link
              href="https://twitter.com/ecelliitbhu"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-125 transition ease-in-out"
            >
              <FaTwitter className="text-blue-400 text-2xl hover:text-yellow-300 cursor-pointer transition ease-in-out" />
            </Link>
            <Link
              href="https://www.instagram.com/ecelliitbhu/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-125 transition ease-in-out"
            >
              <FaInstagram className="text-pink-500 text-2xl hover:text-yellow-300 cursor-pointer transition ease-in-out" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/ecelliitbhu/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-125 transition ease-in-out"
            >
              <FaLinkedin className="text-blue-500 text-2xl hover:text-yellow-300 cursor-pointer transition ease-in-out" />
            </Link>
            <Link
              href="https://www.youtube.com/c/ecelliitbhu"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-125 transition ease-in-out"
            >
              <FaYoutube className="text-red-600 text-2xl hover:text-yellow-300 cursor-pointer transition ease-in-out" />
            </Link>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex justify-center mt-12">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="
              w-2/3 space-y-6 bg-[#111111]/60 p-8 rounded-2xl 
              border border-yellow-500/20 shadow-lg shadow-yellow-500/10
            "
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="bg-transparent border border-yellow-500/30 text-yellow-200 placeholder:text-gray-500 focus:border-yellow-400"
                      placeholder="Enter your name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400 text-sm" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="bg-transparent border border-yellow-500/30 text-yellow-200 placeholder:text-gray-500 focus:border-yellow-400"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400 text-sm" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="bg-transparent border border-yellow-500/30 text-yellow-200 placeholder:text-gray-500 focus:border-yellow-400"
                      placeholder="Enter your phone number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400 text-sm" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className="bg-transparent border border-yellow-500/30 text-yellow-200 placeholder:text-gray-500 focus:border-yellow-400"
                      placeholder="Enter your message"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400 text-sm" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select {...field}>
                      <SelectTrigger className="w-[180px] border border-yellow-500/30 bg-transparent text-yellow-300">
                        <SelectValue placeholder="Role" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#222222] text-yellow-300 border border-yellow-600/20">
                        <SelectItem value="Founder">Founder</SelectItem>
                        <SelectItem value="Investor">Investor</SelectItem>
                        <SelectItem value="Sponsor">Sponsor</SelectItem>
                        <SelectItem value="Speaker">Speaker</SelectItem>
                        <SelectItem value="Student">Student</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              className="
                w-full bg-yellow-500 text-black font-bold hover:bg-yellow-400
                transition-all duration-300 rounded-lg
              "
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>

      {/* Address */}
      <div className="text-center mx-24 my-10">
        <p className="font-semibold text-2xl text-yellow-400">Address</p>
        <p className="text-gray-300 mt-2">
          Indian Institute of Technology (Banaras Hindu University), Varanasi,
          India, PIN: 221005
        </p>
      </div>
    </div>
  );
};

export default Contact;
