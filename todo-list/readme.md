## JavaScript Project on Todo List

Introduction: TODO List sont les listes que nous utilisons généralement pour maintenir nos tâches quotidiennes ou la liste de tout ce que nous avons à faire, avec les tâches les plus importantes en haut de la liste et les tâches les moins importantes en bas. Il est utile dans la planification de nos horaires quotidiens. Nous pouvons ajouter plus de tâches à tout moment et supprimer une tâche qui est terminée. Les quatre tâches principales que nous pouvons effectuer dans une liste TODO sont:

- Ajouter des taches
- Modifier des taches
- Voir des taches
- Supprimer des taches

### les étapes

- Step 1: Initialiser les "listener" d'évènement sur le "click" et le "submit" SEULEMENT quand la "window" est "loaded"
- Step 2: Créer les 2 fonctions "addItem" et "removeItem" utilisés par nos EventListener
- Step 3: Utiliser "onkeyup" attribut sur le champ 'input id="item"' pour activer le boutton "Submit" (disabled)

### Résultat final

![clock](234.gif)

### helpers

- [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event)
- [eventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

```
let myButton = document.querySelector("#my-button");
myButton.addEventListener("click", myButtonClickHandler)
function myButtonClickHandler(eventObj){
  // We can prevent any other default  actions on that button like this:
  eventObj.preventDefault();

  // in the event object, Event.target is the thing that actually got clicked
  let clickedEl = eventObj.target;

  if (clickedEl.value == 'Shoes'){
    console.info("Hey! You clicked SHOES! Nice!");
  }
}

```
