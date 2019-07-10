# ATB-Datathon
This repo consists of my first datathon project. 

My team was tasked to use public data to improve Canadian agriculture. We figured that we should focus on solving Canada's most pertinent issue with agriculture: crop diseases. In Alberta alone, crop diseases amount to millions in dollars of lost productivity. There needs to be a solution.

We decided to create a React app that allows farmers to report diseases, which will be used by a spatial probability model to predict the disease spread. This will help farmers mitigate and prevent potential agricultural disasters and also ensure food security. 

There were 3 major components to this project:
* Image detection model: I created a Keras CNN model using Kaggle's GPU and the PlantVillage dataset hosted on Kaggle. This would help farmers instantly recognize crop diseases
* Spatial probability model: my teammate used GIS software to construct a simulated disease outbreak and the resulting predicted disease spread
* React web app: I created a very simple app that displays disease outbreaks using Google Maps API. 

## Running the project
1. Clone this repository to your local directory
2. `cd localDirectory` and then `cd app/`
3. `npm install` to install all necessary Node dependencies
4. `npm start` to run the project on your localhost

## Future improvements
* Build ability in React app to get location coordinates of farmer and display pin of outbreak
* Incorporate model in app using Tensorflow.JS
* Incorporate spatial probability model
* Incoporate time-series data, weather data and natural language processing for better disease identification and spread prediction.
