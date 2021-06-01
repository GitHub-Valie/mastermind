# Projet Mastermind

Le but de ce projet est de réaliser un jeu de mastermind avec HTML, CSS et JS.

## Détails

- Page d'accueil avec les liens de navigation vers les différentes pages du site
- Page "règles" dans laquelle on rappelle les règles du jeu du mastermind
- Page de paramétrage afin de pouvoir choisir:
    - Le nombre d'essais *(12)*
    - Le nombre de positions possibles *(4)* 
    - Le nombre de couleurs *(6)*
    - Le timer *(On/Off)*
    - Le mode de jeu:
        - Default: 12 essais, 4 positions et 6 couleurs
        - Facile: 20, 2, 3
        - Mayhem: 5, 5, 8
- Page de score avec l'alias, la difficulté et le score des 10 meilleurs joueurs
- Page de jeu

## Détail de la page de jeu

Pour l'instant, la page correspond au mode "Par défaut"

### Générer une solution aléatoire

La solution correspond à une suite de 4 couleurs choisies parmi les 6 couleurs possibles

Les couleurs sont associées à un nombre: *Rouge 0, Bleu 1, Vert 2, jaune 3, Marron 4, Orange 5*

**Pseudo-code**

```
POUR i ALLANT DE 1 A 4
	Générer une couleur aléatoire et l'affecter au tableau solution
FIN POUR
```

## Outils

- [Coolors pour composer une palette de couleurs](https://coolors.co/1a0035-00001e-9affbc-ff005a)
- [Google Fonts pour les polices](https://fonts.google.com/)