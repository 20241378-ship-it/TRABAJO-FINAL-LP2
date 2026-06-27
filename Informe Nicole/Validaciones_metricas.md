# Validación y Métricas del Prototipo

## Objetivo de la validación

La validación tuvo como finalidad comprobar que el prototipo fuera capaz de extraer información de distintas fuentes web, procesarla correctamente y clasificar publicaciones potencialmente sensacionalistas mediante criterios previamente definidos.

## Métricas utilizadas

Para evaluar el funcionamiento del prototipo se consideraron las siguientes métricas:

* Número total de publicaciones extraídas por fuente.
* Número de publicaciones clasificadas como sospechosas.
* Porcentaje de publicaciones sospechosas respecto al total.
* Correcta generación de los archivos CSV.
* Correcta visualización de los resultados mediante gráficos estadísticos.

## Resultados obtenidos

Durante la ejecución del sistema se obtuvieron los siguientes resultados:

| Fuente  | Publicaciones | Alertas |
| ------- | ------------: | ------: |
| Menéame |            50 |       2 |
| Reddit  |            25 |       1 |

El porcentaje de publicaciones clasificadas como sospechosas fue aproximadamente del 4 % en ambas fuentes.

## Validación funcional

Se verificó que el sistema:

* Extrajera correctamente la información desde Menéame y Reddit.
* Procesara los datos utilizando pandas.
* Calculase las métricas definidas para cada fuente.
* Generase correctamente los archivos CSV de salida.
* Produjera gráficos que facilitaran la interpretación de los resultados.
