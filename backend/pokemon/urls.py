from django.urls import path
from . import views

urlpatterns = [
    path('', views.PokemonView.as_view()),
    path('<int:pk>', views.PokemonView.as_view())
]
