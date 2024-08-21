import Footer from "../components/Footer"; // Importe le composant Footer depuis le fichier Footer.js
import Header from "../components/Header"; // Importe le composant Header depuis le fichier Header.js
import Hero from "../components/Hero"; // Importe le composant Hero depuis le fichier Hero.js
import SearchBar from "../components/SearchBar"; // Importe le composant SearchBar depuis le fichier SearchBar.js

// Définit une interface Props pour spécifier le type de props attendu par le composant
// L'interface Props définit la structure des objets, y compris les props passées aux composants React.
// Ici, nous définissons une interface nommée Props. Elle a une propriété appelée "children", qui est censée être de type React.ReactNode.
// React.ReactNode est un type qui représente n'importe quelle expression JSX valide, telle que des éléments JSX, des chaînes de caractères ou des fragments.
interface Props {
  children: React.ReactNode; // La prop children permet au composant de rendre ses composants enfants ou éléments
}

// Définit le composant Layout avec la prop children
const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Crée une structure de mise en page en colonne avec une hauteur minimale de l'écran */}
      <Header /> {/* Affiche le composant Header */}
      <Hero /> {/* Affiche le composant Hero */}
      <div className="container mx-auto"> {/* Crée un conteneur centré horizontalement */}
        <SearchBar /> {/* Affiche le composant SearchBar */}
      </div>
      <div className="container mx-auto py-10 flex-1">{children}</div> {/* Affiche le contenu passé au composant Layout */}
      <Footer /> {/* Affiche le composant Footer */}
    </div>
  );
};

export default Layout; // Exporte le composant Layout pour une utilisation dans d'autres fichiers

