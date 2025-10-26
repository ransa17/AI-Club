"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Navbar from '@/app/components/NavBar';
// FIX: Navbar and Footer components are now defined locally in this file
// import Navbar from "./components/NavBar";
// import Footer from "./components/Footer";
import { Users, Code, TrendingUp, CheckCircle, UserCheck, Loader2, Award, Menu, AlertTriangle } from "lucide-react";
import { membersData } from './membersData';
// --- START: Locally Defined Components to resolve errors ---


const Footer = () => (
    <footer className="bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 mt-auto">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                &copy; {new Date().getFullYear()} AI Verse Community. Built with <a href="#" className="text-indigo-600 hover:underline">passion</a> and <a href="#" className="text-indigo-600 hover:underline">code</a>.
            </p>
        </div>
    </footer>
);

// --- END: Locally Defined Components ---


// Mock Data for Community Members
const verifyMembersData = (id:string) => {
    let retObj = {"id": "",
    "name": "",
    "role": "",
    "email": "",roll_no:"",verified:false};

    membersData.forEach(member => {
        if (member.id === id) {
            console.log("Member found:", member);
            
            retObj.id = member.id;
            retObj.name = member.name;
            retObj.role = member.role;
            retObj.email = member.email || "";
            retObj.roll_no = member.roll_no || "";
            retObj.verified = true;
        }   
})
    return retObj;
};



export default function CommunityPage() {
  const [isVerified, setIsVerified] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState(<> </>);
  const [isLoading, setIsLoading] = useState(false);

  // Mock Verification Logic
  const handleVerification = () => {
    if (isLoading || verificationCode.trim() === '') return;

    setIsLoading(true);
    setFeedbackMessage(<></>);

    // Simulate an API call delay
    setTimeout(() => {
      // Mock successful verification for a specific code
      const member = verifyMembersData(verificationCode);
      console.log("Verification result:", member);
      if (member.verified == true) {
        setIsVerified(true);
        setFeedbackMessage((
             <div className="max-w-sm mx-auto mt-6 p-4 bg-green-50 border border-green-300 rounded-xl shadow">
      <div className="flex items-center mb-2 text-green-700">
        <CheckCircle className="w-5 h-5 mr-2" />
        <h2 className="font-semibold text-lg">Verified Member</h2>
      </div>
      <p className="font-medium">{member.name}</p>
      <p className="text-sm text-gray-600">{member.role}</p>
      {member.email && <p className="text-sm mt-1">📧 {member.email}</p>}
      {member.roll_no && <p className="text-sm">🎓 {member.roll_no}</p>}
      <p className="text-xs text-gray-500 mt-1">ID: {member.id}</p>
    </div>
        ));
      } else {
        setFeedbackMessage(<Card className="max-w-sm mx-auto mt-6 border-red-300 bg-red-50 text-red-700">
      <CardHeader className="flex items-center space-x-2">
        <AlertTriangle className="w-5 h-5 text-red-600" />
        <CardTitle className="text-lg font-semibold">Member Not Found</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        <p>
          We couldn’t verify your membership with the provided ID. Please check
          your verification code or contact the club administrator for help.
        </p>
        <div className="pt-2 text-gray-700">
          <p>
            📧 <span className="font-medium">Email:</span>{" "}
            <a
              href="mailto:support@aiverseclub.org"
              className="underline text-red-700 hover:text-red-800"
            >
              support@aiverseclub.org
            </a>
          </p>
          <p>
            💬 <span className="font-medium">Discord:</span> @AIverseClub
          </p>
        </div>
      </CardContent>
    </Card>);
      }
      setIsLoading(false);
    }, 1500);
  };

  // Component for displaying a community member card
  const MemberCard = ({ member }:{ member:any }) => (
    <Card 
        className="group hover:shadow-lg dark:hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1"
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-bold">{member.name}</CardTitle>
        {member.verified ? (
          <CheckCircle className="h-5 w-5 text-green-500" />
        ) : (
          <UserCheck className="h-5 w-5 text-zinc-400" />
        )}
      </CardHeader>
      <CardContent>
        <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-1">{member.role}</div>
        <CardDescription className="text-xs">
          Projects Contributed: **{member.projects}**
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Badge variant={member.projects > 1 ? "default" : "secondary"} className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {member.projects > 1 ? "Active Contributor" : "Exploring"}
        </Badge>
      </CardFooter>
    </Card>
  );


  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50">
      <Navbar />

      {/* Header Section */}
      <header className="py-24 px-6 text-center bg-gradient-to-b from-indigo-100 to-zinc-50 dark:from-zinc-900 dark:to-black">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">
          <span className="text-indigo-600 dark:text-indigo-400">Our</span> Community Hub
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-zinc-700 dark:text-zinc-300">
          The collaborative space for all AI Verse members. Connect, contribute, and verify your membership status.
        </p>
      </header>

      <main className="flex-grow">
        
        {/* Verification and Exclusive Access Section */}
        <section id="verification" className="max-w-4xl mx-auto py-20 px-6">
          <h2 className="text-4xl font-bold text-center mb-10">
            Member Verification <UserCheck className="inline-block w-8 h-8 ml-2 text-indigo-500" />
          </h2>

          <Card className="p-6 md:p-10 shadow-xl dark:bg-zinc-900">
            <CardTitle className="mb-2">Access Exclusive Resources</CardTitle>
            <CardDescription className="mb-6">
                Enter your unique verification code (provided upon official sign-up) to unlock access to our private GitHub, research papers, and contributor channels.
            </CardDescription>

            {!isVerified ? (
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="text"
                  placeholder="Enter Unique Code (e.g., AC-xxxxxxxxx)"
                  className="flex-grow"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  disabled={isLoading}
                />
                <Button 
                  onClick={handleVerification} 
                  disabled={isLoading}
                  className="w-full sm:w-auto"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    "Verify Membership"
                  )}
                </Button>
              </div>
            ) : (
                <div className="flex items-center space-x-3 bg-green-100 dark:bg-green-900/50 p-4 rounded-lg animate-in fade-in duration-1000">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-300 flex-shrink-0" />
                    <p className="font-semibold text-green-800 dark:text-green-200">
                        Access Granted!
                    </p>
                </div>
            )}
            
            {feedbackMessage && (
                <p className={`mt-4 text-sm font-medium ${isVerified ? 'text-green-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
                    {feedbackMessage}
                </p>
            )}

            {/* Verified Content Area (Mutation/Animation Example) */}
            {isVerified && (
                <Card className="mt-8 border-indigo-500 dark:border-indigo-400 bg-indigo-50 dark:bg-zinc-800 animate-in slide-in-from-top-10 duration-500">
                    <CardHeader>
                        <CardTitle className="flex items-center text-indigo-700 dark:text-indigo-300">
                            <Award className="h-5 w-5 mr-2"/> Exclusive Downloads
                        </CardTitle>
                        <CardDescription>
                            Thank you for verifying! Here are your links to the private documentation hub.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3">
                        <Button variant="outline" asChild>
                            <a href="#" target="_blank">Private Research Repository</a>
                        </Button>
                        <Button variant="outline" asChild>
                            <a href="#" target="_blank">Contributor Channel Invite</a>
                        </Button>
                    </CardContent>
                </Card>
            )}
          </Card>
        </section>

        ---

        {/* Community Goals Section */}
        <section id="goals" className="bg-zinc-100 dark:bg-zinc-900 max-w-full py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-4">
                    Our Shared Vision
                </h2>
                <p className="text-center max-w-3xl mx-auto text-lg text-zinc-600 dark:text-zinc-400 mb-10">
                    We're driven by learning and practical application.
                </p>
                
                <Card className="p-6 border-2 border-indigo-400 dark:border-indigo-700 bg-white dark:bg-zinc-800 shadow-xl">
                    <div className="flex flex-wrap md:flex-nowrap gap-6 items-center">
                        <Award className="w-10 h-10 text-indigo-600 dark:text-indigo-400 flex-shrink-0 animate-pulse" />
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Focus on Documented Experience</h3>
                            <p className="text-lg font-medium text-zinc-700 dark:text-zinc-300">
                                **Crucially, because we are an independent community, every piece of external experience and self-driven, well-documented project counts double towards your reputation and advancement within AI Verse.**
                            </p>
                        </div>
                    </div>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    <GoalCard icon={Code} title="Skill Sharpening" description="Host weekly coding sprints and workshops focused on modern ML frameworks." />
                    <GoalCard icon={TrendingUp} title="Real-World Impact" description="Develop and deploy AI solutions for non-profits and community challenges." />
                    <GoalCard icon={Users} title="Knowledge Sharing" description="Maintain a comprehensive, open-source knowledge base for all members." />
                </div>
            </div>
        </section>

        ---

        {/* Member Wall Section
        <section id="members" className="max-w-6xl mx-auto py-20 px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Meet Our Top Contributors
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {mockMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
          <p className="text-center mt-12 text-zinc-600 dark:text-zinc-400">
              Want to see your name here? Start a documented project today!
          </p>
        </section> */}
      </main>

      <Footer />
    </div>
  );
}
interface CardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

// Simple Goal Card for the Goals Section
const GoalCard = ({ icon: Icon, title, description}:CardProps) => (
    <Card className="text-center hover:shadow-xl transition duration-300">
        <CardHeader>
            <div className="mx-auto bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full w-fit">
                <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            </div>
        </CardHeader>
        <CardContent>
            <CardTitle className="mb-2">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardContent>
    </Card>
);
