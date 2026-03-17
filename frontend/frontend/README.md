# CampusFlow

CampusFlow is a smart task reminder system that converts user tasks into automated reminders using workflow automation.

## Live Demo

Frontend: https://campusflow-aa5j.vercel.app/ 
Backend: https://campusflow-hm4a.onrender.com

## Features

- Create tasks using natural language
- Automatically generate reminders
- Creates events in Google Calendar
- Automation using n8n workflows

## Tech Stack

Frontend: React  
Backend: Node.js + Express  
Automation: n8n  
Hosting: Vercel (Frontend), Render (Backend)

## Architecture

User Input → Frontend → Backend → n8n Webhook → Google Calendar Event