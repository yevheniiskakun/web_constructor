from django.conf.urls import url, include
from django.urls import path
from . import views

app_name = 'pages'

urlpatterns = [
	# main view
	path('', views.index, name='home'),

]