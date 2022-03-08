from __future__ import division, print_function
import sys
import os
import glob
import re
import numpy as np

# tensorflow
import tensorflow as tf
from keras.preprocessing import image

# Flask utils
from flask import Flask, redirect, url_for, request, render_template
from werkzeug.utils import secure_filename

app = Flask(__name__)
model = tf.keras.models.load_model('model/waste.h5')

def model_predict(img_path,model):

    img = image.load_img(img_path,target_size=(64,64))
    #Preprocessing the image
    x=image.img_to_array(img)
    x=np.expand_dims(x,axis=0)
    result = model.predict(x)

    prediction = ''

    if result[0][0] == 1:
       prediction = 'recyclable waste'
    else:
      prediction = 'organic waste'

    return prediction

@app.route('/',methods=['GET'])
def index():
    # Main page
    return "Hello World"

@app.route('/predict', methods=['GET','POST'])
def upload():
    if request.method == 'POST':
        # Get the file from post request
        f = request.files['file']

        #save the file ./uploads
        basepath = os.path.dirname(__file__)
        file_path = os.path.join(basepath,'uploads',secure_filename(f.filename))
        f.save(file_path)

        # make prediction
        preds = model_predict(file_path,model)

        return preds
    return None

if __name__ == '__main__':

    #app.run(port=5002, debug=True)
    
    #app.run(host="192.168.29.186", port=800, debug=False)

    app.run()

