# CentrixSupport - Mental Health Support Chatbot

CentrixSupport is an AI-powered chatbot designed to provide mental health support and resources to individuals experiencing stress or anxiety. The chatbot offers empathetic responses, coping mechanisms, and links to professional help, assisting users who may need further guidance.

## Problem Statement

The chatbot is built to fulfill the following objectives:
- **Provide empathetic responses** to help users feel understood and supported.
- **Guide users with coping mechanisms** to manage stress and anxiety.
- **Link users to professional help** for additional assistance, ensuring timely and accurate support.

## Project Overview

- **Frontend**: Developed in React to provide a responsive and interactive interface.
- **Backend**: Built with Flask to handle user requests, process inputs, and return AI-based responses.
- **Model**: Utilizes the Gqor Large Language Model (LLM) to process and generate contextually relevant answers to user queries.
  
## Key Features

- **Empathetic Responses**: The chatbot delivers responses that are supportive and compassionate.
- **Coping Mechanisms**: Offers specific techniques and practices to manage stress and anxiety.
- **Professional Resources**: Provides links and suggestions for professional mental health support.

## File Structure

- **src/** - Contains the React frontend files.
- **app.py** - Flask backend for managing requests between the frontend and Gqor LLM model.
- **models/** - Directory for machine learning model files.
- **static/** - Static files like CSS, JavaScript, and images.
- **templates/** - HTML templates used by Flask.

## Getting Started

### Prerequisites

- Node.js
- Python 3
- Flask and other required Python libraries (install via `requirements.txt`)
- React dependencies (install via `package.json`)

### Installation

1. **Clone the repository**:
   ```bash
   https://github.com/AbhinavKaintura/CentrixSupport.git
   cd centrixsupport
2.  **Backend Setup**:
      cd src

3.     
        python app.py
        
4.  
        npm install

        
5.  
        npm start
       
