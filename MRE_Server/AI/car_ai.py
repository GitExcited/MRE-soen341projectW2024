
#! THE MODEL WORKS WITH:
    # Chervolet Silverado 2004
    # Dodge Grand Caravan 2005
    # Ford Explorer 2002
    # Honda Civic 2002
    # Nissan altima 2005
    # Toyota Camry 2002
    # Volkswagen Jetta 2006
    # Jeep grand Cherockee 2004
# pip install fastcore
# pip install fastai
# pip install fastdownload
from fastcore.all import *
from fastai.vision.all import *


# ? This redirects the path so that the model works. If you have a linux system you don't need this!
import pathlib
temp = pathlib.PosixPath
pathlib.PosixPath = pathlib.WindowsPath
# ? This accesses the image link as a command-line argument
import sys
input_data = sys.argv[1]
# ? This allows us to download the image link given to access the image
from PIL import Image
import requests
from io import BytesIO

import os
#print(os.getcwd())

# URL of the image. In this example its a 2002 Honda civic
URL = input_data

# Download the image
response = requests.get(URL)
img = Image.open(BytesIO(response.content))
# Resize the image
img = img.resize((192, 192))  # Replace width and height with the size expected by your model

# Convert the image to RGB
if img.mode != 'RGB':
    img = img.convert('RGB')


learn = load_learner('AI/car_ai_8_cars_100_epoch.pkl')
object,_,probs = learn.predict(PILImage.create(img))
print(f"{object}")
sys.stdout.flush()


# ! run this code to put the path back to normal afte running the model: 
pathlib.PosixPath = temp

#! This is how the car AI model was trained. It is not necessary to run this code again unless you want to retrain the model.

# # ? No data? No problem! We can use DuckDuckGo to search for images of cars
# def search_images(term, max_images=200):
#     result = DDGS().images(
#         keywords =term,
#         color = "color",
#         type_image = "photo",
#         max_results=max_images,
#     )
#     return L(result).itemgot('image')

# urls = search_images('Ford Fusion', max_images=1)
# urls[0]

# dest = 'ford_fusion_test.jpg'
# download_url(urls[0], dest, show_progress=False)

# im = Image.open(dest)
# im.to_thumb(256,256)

# import json

# # Your JSON data
# json_data = '''
# {
#   "Ford": ["Fusion", "Focus", "Taurus", "Escape", "Explorer", "Expedition", "F-150", "F-250", "Ranger", "Bronco", "Maverick"],
#   "Honda": ["Civic", "Accord", "City", "CR-V", "Pilot", "HR-V", "Ridgeline"],
#   "Toyota": ["Camry", "Corolla", "Avalon", "RAV4", "Highlander", "4Runner", "Tacoma", "Tundra"],
#   "Tesla": ["Model 3", "Model S", "Model Y", "Model X", "Cybertruck"],
#   "Chevrolet": ["Malibu", "Cruze", "Impala", "Equinox", "Traverse", "Tahoe", "Silverado", "Colorado"],
#   "Nissan": ["Altima", "Sentra", "Maxima", "Rogue", "Pathfinder", "Armada", "Frontier", "Titan"],
#   "BMW": ["3 Series", "5 Series", "7 Series"],
#   "Mercedes-Benz": ["C-Class", "E-Class", "S-Class"],
#   "Audi": ["A3", "A4", "A6"],
#   "Hyundai": ["Elantra", "Sonata", "Genesis", "Tucson", "Santa Fe", "Palisade"],
#   "Kia": ["Optima", "Forte", "Cadenza", "Sportage", "Sorento", "Telluride"],
#   "Volkswagen": ["Jetta", "Passat", "Arteon"],
#   "Subaru": ["Impreza", "Legacy", "WRX", "Forester", "Outback", "Ascent"],
#   "Mazda": ["Mazda3", "Mazda6", "Mazda2", "CX-5", "CX-9"],
#   "Lexus": ["IS", "ES", "LS"],
#   "Jeep": ["Wrangler", "Grand Cherokee", "Cherokee", "Gladiator"],
#   "GMC": ["Terrain", "Acadia", "Yukon", "Sierra"],
#   "Buick": ["Encore", "Enclave"],
#   "Ram": ["1500", "2500", "3500"]
# }
# '''

# try:
#     # Parse JSON data
#     data = json.loads(json_data)

#     # Create an array to store make and model combinations
#     make_model_combinations = []
#     # Create an array to store only the car makes
#     car_makes = []

#     # Iterate over each make and its models
#     for make, models in data.items():
#         # Concatenate make with each model and append to the list
#         make_model_combinations.extend([f"{make} {model}" for model in models])
#         # Append make to the list of car makes
#         car_makes.append(make)

#     # Print the result
#     print(make_model_combinations)
#     print(car_makes)
# except json.JSONDecodeError as e:
#     print("Error decoding JSON data:", e)
#     print("JSON data:", json_data)


# # ! THIS CODE DOWNLOADS ALL THE IMAGES. DON'T RUN UNLESS YOU PLAN TO DOWNLOAD ALL THE IMAGES !
# searches = car_makes
# path = Path('car_makes')
# from time import sleep

# for o in searches:
#     dest = (path/o)
#     dest.mkdir(exist_ok=True, parents=True)
#     download_images(dest, urls=search_images(f'{o} exterior new',10))# Search for 400 pictures of each make of car
# #     sleep(10)  # Pause between searches to avoid over-loading server
#     resize_images(path/o, max_size=400, dest=path/o)

# # Verify if some of the images failed
# failed = verify_images(get_image_files(path))
# failed.map(Path.unlink)
# len(failed)

# dls = DataBlock(
#     blocks=(ImageBlock, CategoryBlock), 
#     get_items=get_image_files, 
#     splitter=RandomSplitter(valid_pct=0.2, seed=42),
#     get_y=parent_label,
#     item_tfms=[Resize(192, method='squish')]
# ).dataloaders(path, bs=32)

# dls.show_batch(max_n=6)

# # ? Actual training
# learn = vision_learner(dls, resnet18, metrics=error_rate)
# learn.fine_tune(20)
# # Predicting 
# object,_,probs = learn.predict(PILImage.create('car_example.jpg'))
# print(f"This is a: {object}.")

# learn.export('car_ai.pkl') # Save the model to use another time
