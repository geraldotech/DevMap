name = input('Enter a value: ')

print("Numerico: ",name.isnumeric())


# old
print("Value digitado: {}".format(name))
print("Alpha: {}".format(name).isalpha())

#adiciona 50 iguais =
print(f'{"":=^50}')

# new
print(f'Valor digitado {name.isalpha()}')
print(f"isCapitalize: {name.istitle()}")
