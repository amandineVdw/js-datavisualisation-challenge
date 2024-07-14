# Projet de Visualisation de Données en JavaScript

Ce projet vise à enrichir un article existant sur un site web en intégrant trois types de visualisations de données à l'aide de JavaScript, en utilisant plusieurs bibliothèques et une API externe.

## Objectifs

L'objectif principal de ce projet est d'améliorer l'expérience utilisateur en rendant les données plus visuelles et interactives grâce à l'intégration des bibliothèques et de l'API suivantes :

- **Bibliothèques :**

  - Chart.js pour créer des graphiques dynamiques et statiques interactifs.
  - CanvasJS pour la création de graphiques dynamiques avancés.
  - jQuery pour simplifier la manipulation du DOM et les requêtes AJAX.

- **API :**
  - Utilisation d'une API externe pour récupérer des données en temps réel via AJAX.

En plus d'ajouter un graphique interactif au-dessus du tableau de données existant dans l'article, nous allons également récupérer des données en temps réel à partir d'une source distante. Cela se fait en utilisant des requêtes AJAX avec fetch() pour obtenir les données, qui sont au format JSON. Ces données sont ensuite utilisées pour afficher un graphique dynamique qui se met à jour automatiquement.

<br>
L'objectif principal est de manipuler des données (tableaux) et de les intégrer dans des graphiques selon les trois types suivants :

## Types de Graphiques Intégrés

1. **Graphique dynamique et interactif** : Visualisation se mettant à jour en temps réel chaque seconde, ajoutant de nouvelles données tout en conservant les données initiales. Comprend des tooltips affichant des informations supplémentaires au survol de la souris.
   <br>  
   ![](https://github.com/amandineVdw/js-datavisualisation-challenge/raw/main/readmeGif1.gif)

2. **Graphique statique et interactif** : Visualisation figée permettant le filtrage des données via un menu déroulant pour sélectionner l'année. Le graphique se met à jour avec les données correspondantes et inclut des tooltips.
   <br>  
   ![](https://github.com/amandineVdw/js-datavisualisation-challenge/raw/main/readmeGif2.gif)

3. **Graphique statique et dynamique** : Visualisation figée avec des tooltips affichant des informations supplémentaires au survol de la souris.
   <br>  
   ![](https://github.com/amandineVdw/js-datavisualisation-challenge/raw/main/readmeGif3.gif)

## Détails Techniques

- **Manipulation du DOM** : Utilisation de sélecteurs pour cibler les emplacements appropriés où insérer les graphiques.
- **Requêtes AJAX** : Utilisation de la fonction FETCH et de jQuery pour récupérer des données JSON depuis l'API externe.
- **Intégration des bibliothèques** : Utilisation des options et méthodes fournies par chaque bibliothèque pour créer et personnaliser les graphiques selon les besoins du projet.
- **Utilisation de JSON** : Utilisation de JSON pour le transfert de données structurées entre le serveur et le client.

## Comment Utiliser

1. Clonez ce repository sur votre machine locale :
   ```bash
   git clone https://github.com/amandineVdw/js-datavisualisation-challenge.git
   ```
2. Ouvrez le fichier `index.html` dans votre navigateur.
3. Explorez le graphique interactif ajouté au tableau de données:
   - Observez le graphique en temps réel sous le titre principal de l'article.

---

Vous pouvez également [visiter la page du projet](https://amandinevdw.github.io/js-datavisualisation-challenge/) hébergée sur GitHub Pages pour voir les visualisations de données en action.

## MIT License

Copyright (c) 2024 amandineVdw

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Ressources Additionnelles

Pour plus d'informations sur l'utilisation de chaque bibliothèque ou de l'API, consultez leurs documentations officielles respectives.

- [Chart.js](https://www.chartjs.org/docs/latest/)
- [Canvas.js](https://canvasjs.com/docs/charts/basics-of-creating-html5-chart/)
- [jQuery API](https://api.jquery.com/)
- [Ajax ｜ jQuery API](https://api.jquery.com/category/ajax/)
- [JSON](https://www.jsondoc.org/)

---

Ce projet a été réalisé dans le cadre d'un défi personnel visant à améliorer mes compétences en JavaScript, en particulier dans le domaine de la visualisation de données interactives. J'ai apprécié travailler sur ce projet et je suis ouvert à toute suggestion ou commentaire pour l'améliorer davantage.

---

![](https://github.com/amandineVdw/js-datavisualisation-challenge/raw/main/readmeGif4.gif)
