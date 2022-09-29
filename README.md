# CM_14_03082022
Projet 14 - Faites passer une librairie jQuery vers React
- Société financière WealthHealth

### Details du projet
Ancienne application qui utilise jQuery côté front end ce qui entraîne des bugs et augmentation des plaintes en interne. Convertir HRnet en React, les gros problèmes pour les utilisateurs sont les sélecteurs de date, les fenêtres modales, les menus déroulants et les tableaux (plugins jQuery très lents), il faut donc créer nos propres composants React (meilleures performances et stabilité). 

### Objectif
- Nouvelle versions des pages "Create Employee" et "Employee List"
- Ajouter un système de gestion d'état (aujourdh'hui on utilise un stockage local)
- S'assurer que tout est cohérent au niveau du style (quelque chose de plus moderne)
- Conversions des plugins jQuery en React (date, modal, menu déroulants, tables de données)
- Tests audits de perfomance LightHouse

### Ressource
- [Repo HRnet actuel](https://github.com/OpenClassrooms-Student-Center/P12_Front-end)
- [Issue sur les sélecteurs de date](https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues/1)
- [Issue sur les tableaux](https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues/2)
- [Issues de fenêtres modales](https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues/3)
- [Issue sur menus déroulants](https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues/4)

Voici la liste des plugins jQuery actuellement utilisés qui doivent être convertis : 
- [Plugin de sélection de date](https://github.com/xdan/datetimepicker)
- [Plugin de fenêtre modale - jQuery.modal.js](https://github.com/kylefox/jquery-modal)
- [Menus déroulants](https://github.com/jquery/jquery-ui/blob/master/ui/widgets/selectmenu.js)
- [Plugin pour les tables de données](https://github.com/DataTables/DataTables)


[LightHouse](https://developers.google.com/web/tools/lighthouse/)

### Contraintes techniques
- 0% de Jquery, 100% de React
- Code Robuste / Lisible
- Version moderne (ES6 ou supérieure) de JavaScript
- Perfomances améliorées

### Livrable
- Un lien du repo GitHub contenant le code source du plugin Jquery converti en ReactJS
- Un lien vers la bibilothèque React convertie publiée sur npm dans le README
- Un second repo Github contenant le code source de l'application HRnet converti en React
- Un rapport de perfomance LightHouse de HRnet fonctionnant avant et après conversion de la biblothèque au format JSON.

### Plugin de Modal

- [Plugin de Modal - Github](https://github.com/SNM07/CM_14_03082022-modal)
- [Plugin de Modal - npm](https://www.npmjs.com/package/modal-snm07-p14)