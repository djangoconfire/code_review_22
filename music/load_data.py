import json

import django
import sys,os

sys.path.append('/home/ritu/Desktop/tapfame/itune_music/')
os.environ['DJANGO_SETTINGS_MODULE']='itune_music.settings'

django.setup()



from music.models import Music
from urllib2 import urlopen
import json
from utils import * 

url = 'https://itunes.apple.com/lookup?id=284910350'
response = urlopen(url)
json_obj = json.load(response)

print json_obj

print '##########################'
print 'debugging'

for i in json_obj['results']:
	music=Music()
	if i['screenshotUrls']:
		app_url=[]
		for url in i['screenshotUrls']:
			app_url.append(strip_unicode(url))
		music.app_url=app_url
	else:
		pass

	print i['trackName']	
	if i['trackName']:
		music.app_name=i['trackName']
	else:
		pass	



	if i['genres']:
		genres=[]
		for genre in i['genres']:
			genres.append(strip_unicode(genre))
		music.genre=genres
	else:
		pass		

	if i['languageCodesISO2A']:
		languages=[]
		for language_code in i['languageCodesISO2A']:
			languages.append(strip_unicode(language_code))
		music.languages=languages
	else:
		pass


	if i['description']:
		music.description=i['description']
	else:
		pass
	
	if i['advisories']:
		advisories=[]
		for item in i['advisories']:
			advisories.append(strip_unicode(item))
		music.advisories=advisories
	else:
		pass		

	
	music.save()	


