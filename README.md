# Projet de Visualisation de Données en JavaScript

Ce projet consiste à enrichir un article existant sur un site web en intégrant deux types de visualisations interactives de données à l'aide de JavaScript.

<br>

1. **Données dynamiques**
   ![](https://github.com/amandineVdw/js-datavisualisation-challenge/raw/test1/readmeGif.gif)

<br>

2.  **Données statiques**
    - graph.1
      ![](https://github.com/amandineVdw/js-datavisualisation-challenge/raw/test1/readmePic1.png)
    - graph.1
      ![](https://github.com/amandineVdw/js-datavisualisation-challenge/raw/test1/readmePic2.png)

## Objectifs

L'objectif principal de ce projet est d'améliorer l'expérience utilisateur en rendant les données plus visuelles et interactives. Pour cela, nous allons :

- Ajouter des graphiques interactifs au-dessus de chaque table de données existante dans l'article.
- Récupérer des données en temps réel à partir d'une source distante via AJAX et afficher un graphique dynamique qui se met à jour automatiquement.

## Fonctionnalités

1. **Visualisations de Données Intégrées :**

   - Utilisation de JavaScript pour manipuler le DOM et insérer des graphiques interactifs basés sur les données des tables existantes dans l'article.

2. **Visualisation de Données Distante en Temps Réel :**
   - Utilisation d'une requête AJAX pour récupérer périodiquement des données à partir d'une URL distante.
   - Intégration d'un graphique dynamique qui se met à jour toutes les secondes avec les données reçues.

## Bibliothèque Utilisée

Pour simplifier le développement des graphiques interactifs, nous avons choisi d'utiliser **chart.js**, une bibliothèque JavaScript populaire et bien documentée.

## Détails Techniques

- **Manipulation du DOM :** Utilisation de sélecteurs pour cibler les emplacements appropriés où insérer les graphiques.
- **Requêtes AJAX :** Utilisation de la fonction FETCH pour récupérer des données JSON depuis l'URL spécifiée.
- **Intégration de chart.js :** Utilisation des options et méthodes de chart.js pour créer et personnaliser les graphiques selon les besoins du projet.
- **Gestion de la Séparation des Préoccupations :** Assurer que le contenu est accessible et informatif même lorsque JavaScript est désactivé.

## Comment Utiliser

1. Clonez ce repository sur votre machine locale.
2. Ouvrez le fichier `index.html` dans votre navigateur.
3. Explorez les graphiques interactifs ajoutés aux tables de données et observez le graphique en temps réel sous le titre principal de l'article.

## Ressources Additionnelles

Pour plus d'informations sur l'utilisation de chart.js, consultez la [documentation officielle de chart.js](https://www.chartjs.org/docs/latest/).

---

Ce projet a été réalisé dans le cadre d'un défi personnel visant à améliorer mes compétences en JavaScript, en particulier dans le domaine de la visualisation de données interactives. J'ai apprécié travailler sur ce projet et je suis ouvert à toute suggestion ou commentaire pour l'améliorer davantage.
