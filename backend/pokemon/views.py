from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from .serialzers import PokemonSerializer
from .models import Pokemon



class PokemonView(APIView):

    def get(self, request, pk=None):
        if pk:  
            data = Pokemon.objects.get(pk=pk)
            serializer = PokemonSerializer(data)
        else:
            data = Pokemon.objects.all()
            serializer = PokemonSerializer(data, many=True)
        return Response({"result": serializer.data})

    def post(self, request):
        wine = request.data
        serializer = PokemonSerializer(data=wine)
        if serializer.is_valid(raise_exception=True):
            Pokemon_saved = serializer.save()
        return Response({"result": f"{Pokemon_saved.pokemon_name} saved"})

    def put(self, request, pk):
        saved_pokemon = get_object_or_404(Pokemon.objects.all(), pk=pk)
        data = request.data
        serializer = PokemonSerializer(instance=saved_pokemon, data=data, partial=True)
        if serializer.is_valid(raise_exception=True):
            saved_pokemon = serializer.save()
        return Response({"result": f"{saved_pokemon.pokemon_name} updated"})

    def delete(self, request, pk):
        pokemon = get_object_or_404(Pokemon.objects.all(), pk=pk)
        pokemon.delete()
        return Response({"result": f"Pokemon id {pk} deleted"},status=204)
