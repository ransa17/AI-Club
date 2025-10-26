"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import {
  membersData,
  projectsData,
  eventsData,
  Member,
  Project,
  Event,
} from "./clubdata";

export default function AdminPage() {
  const [members, setMembers] = useState<Member[]>(membersData);
  const [projects, setProjects] = useState<Project[]>(projectsData);
  const [events, setEvents] = useState<Event[]>(eventsData);

  const [newMember, setNewMember] = useState<Member>({ name: "", role: "" });
  const [newProject, setNewProject] = useState<Project>({ title: "", description: "" });
  const [newEvent, setNewEvent] = useState<Event>({
    title: "",
    date: "",
    location: "",
  });

  const addMember = () => {
    if (!newMember.name.trim() || !newMember.role.trim()) return;
    const updated = [...members, newMember];
    setMembers(updated);
    Object.assign(membersData, updated);
    setNewMember({ name: "", role: "" });
  };

  const addProject = () => {
    if (!newProject.title.trim() || !newProject.description.trim()) return;
    const updated = [...projects, newProject];
    setProjects(updated);
    Object.assign(projectsData, updated);
    setNewProject({ title: "", description: "" });
  };

  const addEvent = () => {
    if (!newEvent.title.trim()) return;
    const updated = [...events, newEvent];
    setEvents(updated);
    Object.assign(eventsData, updated);
    setNewEvent({ title: "", date: "", location: "" });
  };

  const removeMember = (index: number) => {
    const updated = members.filter((_, i) => i !== index);
    setMembers(updated);
    Object.assign(membersData, updated);
  };

  const removeProject = (index: number) => {
    const updated = projects.filter((_, i) => i !== index);
    setProjects(updated);
    Object.assign(projectsData, updated);
  };

  const removeEvent = (index: number) => {
    const updated = events.filter((_, i) => i !== index);
    setEvents(updated);
    Object.assign(eventsData, updated);
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto py-16 px-6 space-y-12 mt-15">
        <h1 className="text-4xl font-bold text-center mb-8">
          AI Verse <span className="text-indigo-600 dark:text-indigo-400">Admin Panel</span>
        </h1>

        {/* Members Section */}
        <Card className="bg-white dark:bg-zinc-900">
          <CardHeader>
            <CardTitle>Manage Members</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                placeholder="Name"
                value={newMember.name}
                onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
              />
              <Input
                placeholder="Role"
                value={newMember.role}
                onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
              />
              <Button onClick={addMember}>Add</Button>
            </div>
            <ul className="space-y-2">
              {members.map((member, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-800 pb-2"
                >
                  <div>
                    <span className="font-medium">{member.name}</span>
                    <p className="text-sm text-zinc-500">{member.role}</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => removeMember(index)}>
                    Remove
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Projects Section */}
        <Card className="bg-white dark:bg-zinc-900">
          <CardHeader>
            <CardTitle>Manage Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                placeholder="Project title"
                value={newProject.title}
                onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
              />
              <Input
                placeholder="Description"
                value={newProject.description}
                onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              />
              <Button onClick={addProject}>Add</Button>
            </div>
            <ul className="space-y-2">
              {projects.map((project, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-800 pb-2"
                >
                  <div>
                    <span className="font-medium">{project.title}</span>
                    <p className="text-sm text-zinc-500">{project.description}</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => removeProject(index)}>
                    Remove
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Events Section */}
        <Card className="bg-white dark:bg-zinc-900">
          <CardHeader>
            <CardTitle>Manage Events</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid sm:grid-cols-4 gap-2">
              <Input
                placeholder="Title"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              />
              <Input
                type="date"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
              />
              <Input
                placeholder="Location"
                value={newEvent.location}
                onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
              />
              <Button onClick={addEvent}>Add</Button>
            </div>
            <ul className="space-y-2">
              {events.map((event, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-800 pb-2"
                >
                  <div>
                    <span className="font-medium">{event.title}</span>
                    <p className="text-sm text-zinc-500">
                      {event.date} • {event.location}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => removeEvent(index)}>
                    Remove
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
