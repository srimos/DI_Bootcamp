from django.urls import include,path
from . import views

urlpatterns=[
    path('', views.index, name='index'),
    path('test', views.test, name='test'),
    # path('articles/<int:year>/', views.year_archive),
    path('articles/<str:season>/<int:month>/', views.month_archive),
]