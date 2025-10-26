"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
    Menu,
    Shield, // Added for Policy Page
    Scale,  // Added for Policy Page
    BookText, // Added for Policy Page
    Gavel     // Added for Policy Page
} from "lucide-react";
import Navbar from '@/app/components/NavBar';



const Footer = () => (
    <footer className="bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 mt-auto">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                &copy; {new Date().getFullYear()} AI Verse Community. Built with <a href="#" className="text-indigo-600 hover:underline">passion</a> and <a href="#" className="text-indigo-600 hover:underline">code</a>.
            </p>
        </div>
    </footer>
);

// --- END: Navigation Components ---


// --- START: Mock Data ---

// Community mock data removed
// --- END: Mock Data ---


// --- START: Community Page ---

// CommunityPage component removed

// --- END: Community Page ---


// --- START: Policy Page ---

const PolicyPage = () => (
    <>
        {/* Header Section */}
        <header className="py-24 px-6 text-center bg-gradient-to-b from-indigo-100 to-zinc-50 dark:from-zinc-900 dark:to-black">
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">
                <span className="text-indigo-600 dark:text-indigo-400">Community</span> Policies
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-zinc-700 dark:text-zinc-300">
                Our guidelines for a respectful, collaborative, and ethical environment.
            </p>
        </header>

        {/* Main Policy Content */}
        <main className="flex-grow max-w-5xl mx-auto py-20 px-6 space-y-12">
            
            {/* Code of Conduct Section */}
            <PolicySection
                icon={Shield}
                title="Code of Conduct"
                description="Our foundational rules for interaction."
            >
                <ul className="list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
                    <li><strong>Be Respectful:</strong> Treat all members with respect. Harassment, discrimination, and exclusionary behavior are not tolerated.</li>
                    <li><strong>Collaborate Openly:</strong> We thrive on teamwork. Share knowledge, offer constructive feedback, and be open to it.</li>
                    <li><strong>Assume Good Faith:</strong> Approach disagreements with the assumption that all parties want the best for the community.</li>
                    <li><strong>Stay On-Topic:</strong> Keep discussions in appropriate channels and relevant to the community's goals.</li>
                </ul>
            </PolicySection>

            {/* IP Policy Section */}
            <PolicySection
                icon={BookText}
                title="Project & Intellectual Property"
                description="Guidelines for projects developed within AI Verse."
            >
                <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    We encourage open-source contributions. All code, documentation, and assets produced in official community projects are by default licensed under:
                </p>
                <div className="flex flex-wrap gap-4">
                    <Badge variant="secondary" className="text-base py-1 px-3">MIT License</Badge>
                    <Badge variant="secondary" className="text-base py-1 px-3">Apache 2.0</Badge>
                </div>
                <p className="text-zinc-700 dark:text-zinc-300 mt-4">
                    Individual, "self-driven" projects (as mentioned on our homepage) remain the property of the creator, but we strongly encourage clear documentation and open-sourcing to build your community reputation.
                </p>
            </PolicySection>

            {/* Ethics Policy Section */}
            <PolicySection
                icon={Scale}
                title="Data & AI Ethics"
                description="Our commitment to responsible AI."
            >
                 <ul className="list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
                    <li><strong>Privacy First:</strong> Do not use, share, or store personally identifiable information (PII) in community projects without explicit consent and proper security measures.</li>
                    <li><strong>Bias Awareness:</strong> Actively work to identify and mitigate bias in datasets and models. Document any potential biases found.</li>
                    <li><strong>Transparency:</strong> Be transparent about the limitations and potential risks of the AI models you create.</li>
                    <li><strong>No Malicious Use:</strong> Community resources may not be used to create systems intended for harm, deception, or violating human rights.</li>
                </ul>
            </PolicySection>
            
            {/* Enforcement Policy Section */}
            <PolicySection
                icon={Gavel}
                title="Enforcement"
                description="How we uphold our standards."
            >
                <p className="text-zinc-700 dark:text-zinc-300">
                    Members who violate these policies may face consequences, determined by a committee of community leads. Actions may include:
                </p>
                <ul className="list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-300 mt-4">
                    <li>A formal warning (private or public).</li>
                    <li>Temporary suspension from community platforms (Discord, GitHub).</li>
                    <li>Permanent removal from the AI Verse community.</li>
                </ul>
                <p className="text-zinc-700 dark:text-zinc-300 mt-4">
                    If you witness a violation, please report it to a community lead or via our (soon-to-be-added) anonymous feedback form.
                </p>
            </PolicySection>

        </main>
    </>
);

// --- END: Policy Page ---


// --- START: Main App Component (Router) ---

export default function App() {
    // State-based routing removed. App now renders PolicyPage directly.

    return (
        <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50">
            <Navbar />

            {/* Always render the PolicyPage */}
            <PolicyPage />

            <Footer />
        </div>
    );
}

// --- END: Main App Component ---


// --- START: Re-usable Helper Components ---

// MemberCard component removed

// GoalCard component removed

// Helper component for the policy page sections
const PolicySection: React.FC<{
    icon: React.ElementType;
    title: string;
    description: string;
    children: React.ReactNode;
}> = ({ icon: Icon, title, description, children }) => (
    <Card className="shadow-lg dark:bg-zinc-900 overflow-hidden">
        <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-lg w-fit mb-3 sm:mb-0">
                    <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                    <CardTitle className="text-2xl">{title}</CardTitle>
                    <CardDescription className="text-base">{description}</CardDescription>
                </div>
            </div>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
    </Card>
);

