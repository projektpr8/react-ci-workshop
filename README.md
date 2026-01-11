# React CI/CD Workshop – paczka plików

Ten folder zawiera gotowe pliki, które wklejasz do świeżo wygenerowanej aplikacji React (Vite), aby uruchomić CI (testy + build) oraz deployment na GitHub Pages.

## Co tu jest
- `.github/workflows/ci.yml` – testy + build na push/PR
- `.github/workflows/deploy.yml` – deployment na GitHub Pages po push do `main`
- `vite.config.js` – konfiguracja Vitest + `base` pod GitHub Pages
- `src/test/setup.js` – konfiguracja matcherów
- `src/App.test.jsx` – przykładowe testy

## Jak użyć (skrót)
1. Stwórz projekt Vite React i zainstaluj zależności do testów (Vitest + Testing Library).
2. Skopiuj pliki z tej paczki do repo.
3. Zmień `base` w `vite.config.js` na nazwę repo.
4. Zrób commit/push.
