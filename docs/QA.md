# SpeakFlow — QA

## 1. Objetivo

Verificar el funcionamiento, la estabilidad y la compatibilidad de SpeakFlow mediante pruebas funcionales, casos límite y pruebas de interfaz.

## 2. Entorno de pruebas

- Sistema operativo: Windows 11
- Navegador: Edge
- Versión del navegador: 158.0.4370.33
- Fecha de prueba: 22/11/26

## 3. Pruebas funcionales

| ID | Prueba | Resultado esperado | Resultado obtenido | Estado |
|---|---|---|---|---|
| QA-01 | Reproducir texto válido | Comienza la reproducción | Comienza | Completado |
| QA-02 | Reproducir texto vacío | No comienza la reproducción | No comienza | Completado |
| QA-03 | Pausar reproducción | El audio se pausa | Se pausa | Completado |
| QA-04 | Reanudar reproducción | Continúa la reproducción | Se reanuda | Completado |
| QA-05 | Detener reproducción | Se detiene completamente | Se detiene | Completado |
| QA-06 | Cambiar idioma |Se actualizan las voces disponibles | No se actualizan | Pendiente |
| QA-07 | Seleccionar otra voz | Se utiliza la voz seleccionada | Se utiliza | Completado |

## 4. Casos límite

| ID | Prueba | Resultado esperado | Resultado obtenido | Estado |
|---|---|---|---|---|
| QA-08 | Introducir espacios en blanco | No se reproduce | No se reproduce | Completado |
| QA-09 | Introducir texto muy largo | La aplicación gestiona el texto correctamente | Se gestiona correctamente | Completado |
| QA-10 | Cambiar idioma varias veces | Las voces corresponden al idioma | Corresponde | Completado |
| QA-11 | Recargar la página | Los controles se inicializan correctamente | Inician correctamente | Completado |
| QA-12 | Reproducir varias veces | No hay reproducciones inconsistentes | Todas se ejecutan igual bien | Completado |

## 5. Compatibilidad

| Navegador | Resultado | Observaciones |
|---|---|---|
| Chrome | Pendiente | Todo va bien|
| Edge | Pendiente | Todo va bien|
| Opera | Pendiente | Todo va bien|

## 6. Incidencias encontradas

Registrar aquí los errores detectados y sus causas.
Un error lo tuve con las pruebas muy largas, la causa principal era que algunas voces no respondian correctamente a las palabras alargadas o reproducir varios sonidos similares repetidamente
En investigacion de como adaptar el filtro de voces para que cambien las voces posibles junto al idioma seleccionado

## 7. Conclusión
La mayoria de cosas va bien solo hay pequeños errores con la api de las voces que hace que algunas voces al alargar las letras mucho empiezan a hacer sonidos raros pero esto pasa porque lo que investigue la  causa es que el speaking rate de la api hace que el algoritmo estire las ondas sonoras y genere un efecto raro

Los navegadores funcionan bien porque tienen base chronium 