const ListItem = require("@mui/material/ListItem");
const ListItemText = require("@mui/material/ListItemText");
const { useEffect, useState } = require("react");
const { getAllProducts } = require("./api/api");

function App() {
  const [items, setItems] = useState([]);
  const [secondary, setSecondary] = useState(false);

  // Appel des produits via useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getAllProducts(); // Appel de la fonction pour récupérer les produits
        setItems(products); // Mise à jour de l'état avec les données récupérées
        console.log(products); // Vérification des données récupérées
      } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {/* Affichage des produits */}
      {items.map((item) => (
        <ListItem key={item.id}>
          {" "}
          {/* Ajout d'une clé unique */}
          <ListItemText
            primary={item.name}
            secondary={secondary ? item.description : null}
          />
        </ListItem>
      ))}
    </div>
  );
}

module.exports = { App };
