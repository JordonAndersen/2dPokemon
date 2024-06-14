from rest_framework import serializers
from .models import Pokemon

class PokemonSerializer(serializers.Serializer):
    pokemon_name = serializers.CharField(max_length=120)
    type = serializers.CharField()
    hp = serializers.CharField()
    id = serializers.IntegerField(read_only=True)

    def create(self, validated_data):
        return Pokemon.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        instance.pokemon_name = validated_data.get('pokemon_name', instance.pokemon_name)
        instance.type = validated_data.get('type', instance.type)
        instance.hp = validated_data.get('hp', instance.hp)
        instance.id = validated_data.get('id', instance.id)
        instance.save()
        return instance
