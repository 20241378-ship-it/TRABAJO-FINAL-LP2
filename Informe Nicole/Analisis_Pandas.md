# Análisis y Procesamiento de Datos con pandas

## 4. Análisis y Procesamiento de Datos con pandas

Una vez extraídos los datos mediante Web Scraping, se utilizó la biblioteca **pandas** para organizar, limpiar y analizar la información obtenida desde Menéame y Reddit. Este proceso permitió transformar los datos extraídos en un formato estructurado y listo para su análisis.

### 4.1 Creación de los DataFrames

Los datos obtenidos durante el scraping fueron almacenados inicialmente en listas de diccionarios. Posteriormente, estas listas se convirtieron en **DataFrames**, facilitando la manipulación de la información y la aplicación de operaciones estadísticas.

### 4.2 Limpieza y Normalización

Durante esta etapa se realizaron las siguientes tareas:

* Conversión de los campos de votos y clics desde texto a valores numéricos.
* Eliminación de caracteres no numéricos presentes en los datos extraídos.
* Gestión de valores faltantes o no disponibles.
* Estandarización de las columnas para facilitar el análisis.

Estas transformaciones garantizan que los datos puedan utilizarse correctamente en los cálculos posteriores.

### 4.3 Análisis de Menéame

Para las publicaciones obtenidas desde Menéame se calculó el **Ratio de Validación**, definido como la relación entre el número de votos y el número de clics.

Este indicador busca identificar publicaciones que reciben muchas visitas pero pocos votos positivos, lo que podría representar un comportamiento atípico dentro de la plataforma.

Las publicaciones cuyo ratio fue inferior al umbral definido por el prototipo fueron marcadas como sospechosas, con el propósito de generar alertas para una revisión posterior.

**Figura 1. Cantidad de publicaciones extraídas por fuente.**

<img width="623" height="417" alt="image" src="https://github.com/user-attachments/assets/d5c67143-7034-4ef4-a3cf-07ac989ce604" />

Este gráfico muestra el número de publicaciones obtenidas durante el proceso de Web Scraping. Se extrajeron **50 publicaciones de Menéame** y **25 publicaciones de Reddit**, cantidad suficiente para evaluar el funcionamiento del prototipo y aplicar los criterios de detección definidos.

**Figura 2. Distribución de votos en Menéame.**

<img width="666" height="414" alt="image" src="https://github.com/user-attachments/assets/39856ef0-81fa-486b-9f36-32444c23a3c9" />

La distribución de votos evidencia que la mayoría de las publicaciones presenta una cantidad moderada de votos, mientras que un número reducido concentra valores más elevados. Esta información permitió calcular el Ratio de Validación y analizar el comportamiento de las publicaciones con menor respaldo por parte de la comunidad.

### 4.4 Análisis de Reddit

En Reddit se aplicó un criterio basado en el contenido del título de cada publicación.

Se definió un conjunto de palabras clave frecuentemente asociadas con contenido sensacionalista o potencialmente engañoso, tales como:

* urgente
* alerta
* fraude
* estafa
* viral
* increíble
* escándalo
* clickbait

Cada título fue analizado para identificar la presencia de estas palabras. Cuando una publicación contenía alguna de ellas, era marcada como sospechosa dentro del prototipo.

**Figura 3. Publicaciones clasificadas como sospechosas.**

<img width="624" height="413" alt="image" src="https://github.com/user-attachments/assets/32788409-9004-4d02-9d11-3e2d553a1059" />

El gráfico muestra la cantidad de publicaciones clasificadas como sospechosas en cada fuente de información. En el conjunto analizado se identificaron **2 publicaciones sospechosas en Menéame** y **1 publicación sospechosa en Reddit**, equivalentes aproximadamente al **4 %** del total de publicaciones evaluadas en cada plataforma. Estos resultados constituyen alertas preliminares y no representan una confirmación de que el contenido sea falso, sino publicaciones que requieren una revisión adicional.


### 4.5 Exportación de Resultados

Finalmente, los resultados obtenidos fueron almacenados en archivos CSV.

Para cada fuente se generaron dos archivos:

* Un archivo con todas las publicaciones procesadas.
* Un archivo que contiene únicamente las publicaciones clasificadas como sospechosas.

Estos archivos permiten realizar análisis posteriores, generar gráficos y validar el funcionamiento del sistema.

### 4.6 Consideraciones sobre el método de clasificación
Los criterios implementados en el prototipo permiten identificar publicaciones con características potencialmente sensacionalistas o patrones de comportamiento inusuales. En el caso de Menéame, se utiliza la relación entre votos y clics como un indicador de interacción de los usuarios, mientras que en Reddit se analiza la presencia de palabras clave asociadas con contenido llamativo o potencialmente engañoso.

Es importante señalar que estos criterios no verifican de manera automática si una noticia es verdadera o falsa. Su finalidad es generar alertas sobre publicaciones que presentan determinadas características y que podrían requerir una revisión adicional por parte de un usuario o de un sistema de verificación especializado.
