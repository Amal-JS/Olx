
from django.contrib import admin
from django.urls import include, path
from data import views
from rest_framework import routers

router=routers.DefaultRouter()
router.register('tasks',views.PostViewSets,basename='tasks') 
router.register('user',views.UserViewSets,basename='user') 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include(router.urls))
]