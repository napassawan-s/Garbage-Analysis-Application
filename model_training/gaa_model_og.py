# -*- coding: utf-8 -*-
"""GAA-Model-OG.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1GPPRos2f6G2U1yacdCKYltVOBDwUcfBR
"""

#from google.colab import drive
#drive.mount('/content/drive')

import pandas as pd
import numpy as np
import logging
import tensorflow as tf
import warnings
import glob
import tqdm
import os

from tqdm import tqdm 
from IPython import display 
import matplotlib.pyplot as plt
import seaborn as sns
from seaborn import heatmap

from sklearn.model_selection import train_test_split
from sklearn.metrics import confusion_matrix, classification_report

from skimage.io import imread, imshow
from skimage.transform import resize

from keras.models import Sequential, load_model
from keras.layers import Conv2D, Lambda, MaxPooling2D, Dense, Dropout, Flatten # convolution layers & core layers

from tensorflow.keras.layers import BatchNormalization
from keras.preprocessing.image import ImageDataGenerator
from keras.utils.np_utils import to_categorical

from tensorflow import keras
from tensorflow.keras.applications.vgg16 import VGG16
from tensorflow.keras.preprocessing import image_dataset_from_directory
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from tensorflow.keras.callbacks import EarlyStopping, ModelCheckpoint, History

import os
  
base_dir = '.\\AfterConvert'
train_dir = os.path.join(base_dir, 'train')
test_dir = os.path.join(base_dir, 'test')
#valid_dir = os.path.join(base_dir, 'valid')

train_g = glob.glob(os.path.join(train_dir, 'Glass', '*.jpg'))+glob.glob(os.path.join(train_dir, 'Glass', '*.HEIC'))+glob.glob(os.path.join(train_dir, 'Glass', '*.heic'))+glob.glob(os.path.join(train_dir, 'Glass', '*.JPG'))
train_m = glob.glob(os.path.join(train_dir, 'Metal', '*.jpg'))+glob.glob(os.path.join(train_dir, 'Metal', '*.HEIC'))+glob.glob(os.path.join(train_dir, 'Metal', '*.heic'))+glob.glob(os.path.join(train_dir, 'Metal', '*.JPG'))
train_pa = glob.glob(os.path.join(train_dir, 'Paper', '*.jpg'))+glob.glob(os.path.join(train_dir, 'Paper', '*.HEIC'))+glob.glob(os.path.join(train_dir, 'Paper', '*.heic'))+glob.glob(os.path.join(train_dir, 'Paper', '*.JPG'))
train_pl = glob.glob(os.path.join(train_dir, 'Plastic', '*.jpg'))+glob.glob(os.path.join(train_dir, 'Plastic', '*.HEIC'))+glob.glob(os.path.join(train_dir, 'Plastic', '*.heic'))+glob.glob(os.path.join(train_dir, 'Plastic', '*.JPG'))

a = len(train_pa)
b = len(train_pl)
c = len(train_g)
d = len(train_m)

print("Number of training samples: {}".format(a+b+c+d))

test_g = glob.glob(os.path.join(test_dir, 'Glass', '*.jpg'))+glob.glob(os.path.join(test_dir, 'Glass', '*.HEIC'))+glob.glob(os.path.join(test_dir, 'Glass', '*.heic'))+glob.glob(os.path.join(test_dir, 'Glass', '*.JPG'))
test_m = glob.glob(os.path.join(test_dir, 'Metal', '*.jpg'))+glob.glob(os.path.join(test_dir, 'Metal', '*.HEIC'))+glob.glob(os.path.join(test_dir, 'Metal', '*.heic'))+glob.glob(os.path.join(test_dir, 'Metal', '*.JPG'))
test_pa = glob.glob(os.path.join(test_dir, 'Paper', '*.jpg'))+glob.glob(os.path.join(test_dir, 'Paper', '*.HEIC'))+glob.glob(os.path.join(test_dir, 'Paper', '*.heic'))+glob.glob(os.path.join(test_dir, 'Paper', '*.JPG'))
test_pl = glob.glob(os.path.join(test_dir, 'Plastic', '*.jpg'))+glob.glob(os.path.join(test_dir, 'Plastic', '*.HEIC'))+glob.glob(os.path.join(test_dir, 'Plastic', '*.heic'))+glob.glob(os.path.join(test_dir, 'Plastic', '*.JPG'))

a = len(test_pa)
b = len(test_pl)
c = len(test_g)
d = len(test_m)

print(test_g)
print("Number of testing samples: {}".format(a+b+c+d))

train_datagen = ImageDataGenerator(rescale = 1.0 / 255.0,
                                   zoom_range = 0.4,
                                   rotation_range = 10,
                                   horizontal_flip = True,
                                   vertical_flip = True,
                                   validation_split = 0.2)

valid_datagen = ImageDataGenerator(rescale = 1.0 / 255.0,
                                   validation_split = 0.2)

test_datagen  = ImageDataGenerator(rescale = 1.0 / 255.0)

train_ds  = train_datagen.flow_from_directory(directory = train_dir,
                                                   target_size = (224, 224),
                                                   class_mode = 'categorical',
                                                   batch_size = 32, 
                                                   subset = 'training')

valid_ds = valid_datagen.flow_from_directory(directory = train_dir,
                                                  target_size = (224, 224),
                                                  class_mode = 'categorical',
                                                  batch_size = 32, 
                                                  subset = 'validation')

test_ds = test_datagen.flow_from_directory(directory = test_dir,
                                                  target_size = (224, 224),
                                                  class_mode = 'categorical',
                                                  batch_size = 32,
                                                  shuffle=False)

print(train_ds.class_indices)
print(test_ds.class_indices)

fig, ax = plt.subplots(nrows = 2, ncols = 5, figsize = (12,6))
#plt.subplots_adjust(hspace=0.55)

"""""
for i in range(2):
    for j in range(5):
        rand1 = np.random.randint(len(train_ds))
        rand2 = np.random.randint(32)
        ax[i,j].imshow(train_ds[rand1][0][rand2])
        ax[i,j].axis('off')
        label = train_ds[rand1][1][rand2]
        # print(label[0])
        if label[0] == 1:
            ax[i,j].set_title('Glass')
        elif label[1] == 1:
            ax[i,j].set_title('Metal')
        elif label[2] == 1:
            ax[i,j].set_title('Paper')
        elif label[3] == 1:
            ax[i,j].set_title('Plastic')


plt.tight_layout
plt.show()
"""

filepath = './model_og_sgd.hdf5'

earlystopping = EarlyStopping(monitor = 'val_auc', 
                              mode = 'max' , 
                              patience = 50,
                              verbose = 1)

checkpoint = ModelCheckpoint(filepath, 
                                monitor = 'val_auc', 
                                mode='max', 
                                save_best_only=True, 
                                verbose = 1)


callback_list = [earlystopping, checkpoint]

base_model = VGG16(input_shape=(224,224,3), 
                   include_top=False,
                   weights="imagenet")

for layer in base_model.layers:
    layer.trainable=False 

base_model.summary()

# Defining Layers
model=Sequential()
model.add(base_model) 
model.add(Dropout(0.2))
model.add(Flatten())

# Add dense layers
model.add(BatchNormalization())
model.add(Dense(5000,activation="relu",kernel_initializer='he_uniform'))
model.add(BatchNormalization())
model.add(Dropout(0.2))
model.add(Dense(1000,activation="relu",kernel_initializer='he_uniform'))
model.add(BatchNormalization())
model.add(Dropout(0.2))
model.add(Dense(500,activation="relu",kernel_initializer='he_uniform'))
model.add(Dropout(0.2))
model.add(Dense(4,activation="softmax"))

model.summary()

"""Model Trianing"""

opt = tf.keras.optimizers.SGD(learning_rate=0.01)
model.compile(loss="categorical_crossentropy", optimizer=opt, metrics=[tf.keras.metrics.AUC(name = 'auc')])
model_history = model.fit(train_ds, epochs=300, validation_data=valid_ds, callbacks = callback_list, verbose = 1)

history = model_history

# Save as DataFrame:     
history_df = pd.DataFrame(history.history) 
history_df
history_df.to_csv('model/model_history.csv', index=False)

# Plot the model accuracy

plt.figure(figsize=(12,7))
plt.plot(model_history.history['auc'], color='deeppink', linewidth=4)
plt.plot(model_history.history['val_auc'], color='dodgerblue', linewidth=4)
plt.title('Model Accuracy', fontsize=14, fontweight='bold')
plt.ylabel('Accuracy', fontsize=14, fontweight='bold')
plt.xlabel('Epoch', fontsize=14, fontweight='bold')
plt.legend(['Train', 'Validation'], loc='upper left', bbox_to_anchor=(1,1), fontsize=14)
plt.show()

plt.figure(figsize=(12,7))
plt.plot(model_history.history['loss'], color='deeppink', linewidth=4)
plt.plot(model_history.history['val_loss'], color='dodgerblue', linewidth=4)
plt.title('Model Loss', fontsize=14, fontweight='bold')
plt.ylabel('Loss', fontsize=14, fontweight='bold')
plt.xlabel('Epoch', fontsize=14, fontweight='bold')
plt.legend(['Train', 'Validation'], loc='upper left', bbox_to_anchor=(1,1), fontsize=14)
plt.show()

model.evaluate(test_ds)