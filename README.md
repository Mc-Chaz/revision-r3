# Revison R3

Site statique de quiz et de revision autour de la culture militaire et personnelle.

## Lancer en local

Ouvrir `index.html` dans un navigateur. Pour tester comme sur un hebergeur web, utiliser un serveur statique local, par exemple avec VS Code Live Server.

## Publier sur Internet

Le dossier peut etre deploye tel quel sur un hebergeur statique :

- GitHub Pages : deposer les fichiers dans un depot, puis activer Pages dans les reglages.
- Netlify : glisser-deposer le dossier sur l'espace de deploiement.
- Vercel : importer le dossier comme projet statique.

Les chemins sont relatifs, donc le site fonctionne aussi bien a la racine d'un domaine que dans un sous-dossier.

## Dependances externes

- Leaflet est charge depuis `unpkg.com`.
- Les frontieres sont chargees depuis GitHub Raw.
- Les drapeaux sont charges depuis Flagcdn.

Une connexion Internet est necessaire pour la carte et les drapeaux.
