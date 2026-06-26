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

Las publicaciones cuyo ratio fue inferior al umbral definido por el prototipo fueron marcadas como **sospechosas**, con el propósito de generar alertas para una revisión posterior.

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

### 4.5 Exportación de Resultados

Finalmente, los resultados obtenidos fueron almacenados en archivos CSV.

Para cada fuente se generaron dos archivos:

* Un archivo con todas las publicaciones procesadas.
* Un archivo que contiene únicamente las publicaciones clasificadas como sospechosas.

Estos archivos permiten realizar análisis posteriores, generar gráficos y validar el funcionamiento del sistema.

### 4.6 Consideraciones sobre el método de clasificación
Los criterios implementados en el prototipo permiten identificar publicaciones con características potencialmente sensacionalistas o patrones de comportamiento inusuales. En el caso de Menéame, se utiliza la relación entre votos y clics como un indicador de interacción de los usuarios, mientras que en Reddit se analiza la presencia de palabras clave asociadas con contenido llamativo o potencialmente engañoso.

Es importante señalar que estos criterios no verifican de manera automática si una noticia es verdadera o falsa. Su finalidad es generar alertas sobre publicaciones que presentan determinadas características y que podrían requerir una revisión adicional por parte de un usuario o de un sistema de verificación especializado.
