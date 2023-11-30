
from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from data import views
from rest_framework import routers

router=routers.DefaultRouter()
router.register('posts',views.PostViewSets,basename='posts') 
router.register('user',views.UserViewSets,basename='user') 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include(router.urls))
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)