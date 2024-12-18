# Node_react_product

## Lancer le projet

### .env

exemple: `node/.env`

```
PORT=5000
MONGODB_URI=mongodb://localhost:27018
MONGODB_USERNAME=bonsartisans
MONGODB_PASSWORD=testtechnique
DATABASE_NAME=products
MONGODB_FULL_URI=mongodb://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@mongodb:27018/${DATABASE_NAME}
```

### Cloner le projet

```sh
git clone https://github.com/horotopia/node_react_product.git
```

### Lancer le Docker mongoDB

```sh
docker compose up
```

### Se déplacer dans le projet pour installer et lancer le serveur

```sh
cd node/
npm i
npm start
```

### Se déplacer dans le projet pour installer et lancer le client

```sh
cd ../react/
npm i
npm start
```

## Instructions

Vous devez réaliser avant dimanche 15h00 :

- Une API REST en Node.js/Express lié à une base de données (MongoDB https://mongodb.github.io/node-mongodb-native/3.2/ ) qui contient les produits (voir plus bas) et qui permettra de créer, récupérer, modifier ou supprimer ces données.

- Une application Web en ReactJS qui permettra de consulter ces produits, les modifier, en supprimer ou en créer de nouveaux, vous afficherez les produits dans une liste. Pour la modification et la suppression, nous vous laissons le choix de la view à implémenter (Page de modification/Popup, etc).

- Vous devrez utiliser Material UI (https://material-ui.com/) pour le design.

Bonus :

- WebSocket: (https://socket.io/) à implémenter entre le serveur et l'application afin de garder les produits à jour.
- Authentification JWT/Token,
- Implémenter Redux (https://redux.js.org/) dans l'application (pour charger les produits/gérer les actions)

Votre code devra respecter la norme du linter ESLint (https://eslint.org/ ) (vous pouvez aussi l'installer directement via VSCode).

Pour nous remettre l'exercice, nous vous demandons un lien github public que nous pourrons cloner, contenant le projet complet.

Si vous avez la moindre question sur les features demandées, n'hésitez pas à nous écrire.

Merci de nous confirmer la bonne réception de ce message.

Bonne chance 🍀
➡️ Les produits de la base de données :
[
{ "_id" : 1, "name" : "AC1 Phone1", "type" : "phone", "price" : 200.05, "rating" : 3.8,"warranty_years" : 1, "available" : true },
{ "_id" : 2, "name" : "AC2 Phone2", "type" : "phone", "price" : 147.21, "rating" : 1,"warranty_years" : 3, "available" : false },
{ "_id" : 3, "name" : "AC3 Phone3", "type" : "phone", "price" : 150, "rating" : 2,"warranty_years" : 1, "available" : true },
{ "_id" : 4, "name" : "AC4 Phone4", "type" : "phone", "price" : 50.20, "rating" : 3,"warranty_years" : 2, "available" : true }
]
