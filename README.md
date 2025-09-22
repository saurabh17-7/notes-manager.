# Personal Notes Manager

A simple web-based application to manage your personal notes, built with **Node.js**, **Express**, and **Docker**, deployed via **Jenkins** on **AWS EC2**.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Docker Deployment](#docker-deployment)
- [Jenkins CI/CD](#jenkins-cicd)
- [Usage](#usage)
- [License](#license)

---

## Features
- Add, edit, and delete notes
- Organized note listing
- Simple and clean user interface
- Runs in Docker for easy deployment
- Can be deployed and rebuilt automatically via Jenkins

---

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Containerization:** Docker
- **CI/CD:** Jenkins
- **Hosting:** AWS EC2

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/saurabh17-7/notes-manager.git
cd notes-manager

Install dependencies:
npm install

Docker Deployment->
1)Build the Docker image:
sudo docker build -t notes-manager .
2)Run the Docker container:
sudo docker run -d --name notes-manager-app -p 8000:8000 notes-manager
3)Access the app in your browser::
http://13.233.90.100:8000
4)Stop or remove the container:
sudo docker stop notes-manager-app
sudo docker rm notes-manager-app
5)Restart container after EC2 reboot:
sudo docker start notes-manager-app

Jenkins CI/CD

Jenkins is used to automate the Docker build and deployment.

Jenkins Pipeline Steps:

Checkout code from GitHub.

Build Docker image: docker build -t notes-manager .

Stop existing container: docker stop notes-manager-app

Remove old container: docker rm notes-manager-app

Run new container: docker run -d --name notes-manager-app -p 8000:8000 notes-manager

Usage

Navigate to the web app in your browser.

Add, edit, and delete notes in real time.

All changes are stored locally in your Docker container.

License

This project is open-source and free to use.

Deployed on: AWS EC2 with Docker and Jenkins
Author: Saurabh Pawar
