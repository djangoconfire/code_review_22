from __future__ import unicode_literals

from django.db import models

class Music(models.Model):
    app_url         = models.URLField()
    app_name        = models.CharField(max_length=200)
    genre           = models.CharField(max_length=200)
    languages       = models.CharField(max_length=100)
    currency        = models.CharField(max_length=40)
    description     = models.TextField()
    advisories      = models.CharField(max_length=200)

    def __unicode__(self):
        return self.app_name
