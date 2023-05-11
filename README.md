# rails-api-react-frontend-challenge

This repo tracks a coding challenge I completed recently that involved setting up a Rails backend API that makes calls to the Marvel API and provides JSON responses for the `characters` endpoint with several params available. The React frontend is a very simple app setup to consume the backend API and display a list of characters. The challenge was timed at 90 minutes, and thus the intial commit reflects what was achieved within that time--though I will be adding to the project to brush up on my TypeScript, React, and Rails skills. 

## React Frontend

The frontend has been setup using Vite, as create-react-app is largely considered deprecated at this point. I decided to utilize Vites [TypeScript SWC plugin](https://github.com/vitejs/vite-plugin-react-swc) to setup the initial scaffolding, as I haven't previously used Vite and wanted to become familiar with its use. The inital commit is VERY simple--built to make API calls to the backend Rails app, and was put together under time constraints so consider that when reviewing.

## Rails API

Simple backend created for a code challenge that implements a rails backend server which makes calls to the the Marvel API and provides JSON data based on several params including `search_string`, `limit`, and `offset`. API Keys are secured using rails yml encryption capabilities in `config/credentials.yml.enc`.
