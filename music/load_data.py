import json

import django
import sys,os

sys.path.append('/home/ritu/Desktop/tapfame/itune_music')
os.environ['DJANGO_SETTINGS_MODULE']='itune_music.settings'

django.setup()

json_file_path_name='/home/ritu/Desktop/tapfame/data.json'


from models import Music,Language,Genre

with open(json_file_path_name) as data_file:
    data_list=json.loads(data_file)
    print data_list

#     iterating over the data and save record into Database
    for data in data_list:
        music=Music()



