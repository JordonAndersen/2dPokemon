# exec(open("./setup_data.py").read())

from pokemon.models import Pokemon

Pokemon.objects.create(pokemon_name="charzard", hp=25, type='fire')
Pokemon.objects.create(pokemon_name="charzard", hp=25, type='fire')
Pokemon.objects.create(pokemon_name="charzard", hp=25, type='fire')