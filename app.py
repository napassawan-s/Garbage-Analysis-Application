from __future__ import division, print_function
import sys
import os
import glob
import re
from urllib import response
import numpy as np
import json
import base64
from PIL import Image
from flask import Flask, request

# tensorflow
import tensorflow as tf
from keras.preprocessing import image
from tensorflow.keras.preprocessing.image import img_to_array
from skimage.io import imread, imshow


# Flask utils
app = Flask(__name__)
model = tf.keras.models.load_model('model/model_og_sgd.hdf5')

def model_predict(imgBase64,model):

    decoded = base64.b64decode(imgBase64)
    image = tf.io.decode_image(decoded, channels=3)
    image = tf.image.resize(image, method="bilinear", size=(224,224))

    input_array = np.array(image) 
    input_array[0][0]
 
    pred = np.expand_dims(input_array, axis=0)
    results = model.predict(pred)
    prediction = 0
    for result in enumerate(results): 
      print(result[1])
      max=np.amax(result[1])

    for x in enumerate(result[1]):
      print(x)
      if np.allclose(x[1],max):
        prediction = x[0]

    if prediction == 0:
       prediction = 'Glass'
    elif prediction == 1:
      prediction = 'Metal'
    elif prediction == 2:
      prediction = 'Paper'
    else:
      prediction = 'Plastic'

    print('prediction ', prediction)
    return prediction
   

@app.route('/',methods=['GET'])
def index():
    # Main page
    return 'Hello'

@app.route('/predict', methods=['GET','POST'])
def upload():
    if request.method == 'POST':
      response = [{ 'uniqueId': 'Glass', 'title': 'Glass','pic': [] }, { 'uniqueId': 'Metal', 'title': 'Metal','pic': [] }, { 'uniqueId': 'Paper', 'title': 'Paper','pic': [] }, { 'uniqueId': 'Plastic', 'title': 'Plastic','pic': [] }]
      request_data = request.get_json()
      for items in request_data:
          preds = model_predict(items['base64'],model)
          for i in response:
            if i['title'] == preds:
              i['pic'].append({'width': items['width'], 'height': items['height'], 'uri': items['uri'] })
        
        # have to loop each photo then store class, image (base64,uri), original height, original width as JSON in array format =>
        # { uniqueId: 'Glass',
        # title: 'Glass',
        # pic: [{width: 200, height: 300, uri:"", base64: }]
        # }
        # make prediction
        

      return json.dumps(response)
    return None

if __name__ == '__main__':
    
    app.run(host="172.20.10.8", debug=False)
    #app.run()

