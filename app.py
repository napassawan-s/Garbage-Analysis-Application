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
model = tf.keras.models.load_model('model/model.hdf5')

def model_predict(img_path,model):

    img = image.load_img(img_path,target_size=(64,64))
    #Preprocessing the image
    x=image.img_to_array(img)
    x=np.expand_dims(x,axis=0)
    result = model.predict(x)

    prediction = ''

    if result[0][0] == 0:
       prediction = 'Glass'
    elif result[0][0] == 1:
      prediction = 'Metal'
    elif result[0][0] == 2:
      prediction = 'Paper'
    else:
      prediction = 'Plastic'
    return prediction

@app.route('/',methods=['GET'])
def index():
    # Main page
    return ''

@app.route("/send", methods=["POST"], strict_slashes=False)
def add_articles():
    return request

@app.route('/predict', methods=['GET','POST'])
def upload():
    if request.method == 'POST':
        # Get each pic from recieved JSON
        f = request.files['file']

        #save the file ./uploads (?)
        basepath = os.path.dirname(__file__)
        file_path = os.path.join(basepath,'uploads',secure_filename(f.filename))
        f.save(file_path)

        # have to loop each photo then store class, image (base64,uri), original height, original width as JSON in array format =>
        # { uniqueId: 'Glass',
        # title: 'Glass',
        # pic: [{width: 200, height: 300, uri:"", base64: }]
        # }
        # make prediction
        preds = model_predict(file_path,model)

        return preds
    return None

if __name__ == '__main__':

    #app.run(port=5002, debug=True)
    
    #app.run(host="192.168.29.186", port=800, debug=False)

    app.run(port=5000)

