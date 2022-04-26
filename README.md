# Ejercicio React-Native

## Ejercicio
### ![ejercicio](https://user-images.githubusercontent.com/40866483/165337107-43df84f2-b165-4b57-9e0f-7de0f515902b.jpg)


* Los valores con bordes (Monto Total y Plazo) son inputs de numeros.
* Los textos Obtené Crédito y Ver detalle de cuotas son botones.
* La font utilizada es Montserrat (agregarla al html).

### Implementación
1. Maquetar el diseño provisto creando los componentes que crea necesarios.
2. Implementar la siguiente funcionalidad:
    1. Se Utilizo la libreria [@react-native-community/slider](https://github.com/callstack/react-native-slider) para dar funcionalidad a los sliders y [react-native-currency-input](https://github.com/CaioQuirinoMedeiros/react-native-currency-input) para el formateo de los numeros.
    2. Al mover los sliders se deberan actualizar los valores de Monto Total y Plazo al valor actual del slider.
    3. Los inputs de Monto Total y Plazo fijo deberán ser editables por el usuario y modificarl el valor del slider.
    3. Deberá actualizarse el valor de Cuota fija por mes siendo este valor el Monto total seleccionado, dividido el Plazo seleccionado.

## Codigo provisto

### Estructura de archivos

````
build/
src/
|- index.js _______________________________ # entrada de la aplicación
|- App.js _________________________________ # Componente principal
````

### Instalación

1. Descargar el codigo de Github con la opción de descarga o hacer un fork del repositorio (a gusto). 
2. `yarn` o `npm install` para instalar paquetes npm 
3. `yarn start` o `npm run android` para inicializar server de desarrollo
