# Arquitectura de la Solución

## 3. Arquitectura de la Solución

La arquitectura del sistema se diseñó siguiendo un flujo lineal de procesamiento de datos. El objetivo es extraer publicaciones desde dos fuentes de información (Menéame y Reddit), procesarlas mediante técnicas de limpieza y análisis de datos, identificar publicaciones potencialmente sensacionalistas o sospechosas y exportar los resultados para su posterior análisis.

### 3.1 Pipeline: De la Extracción a la Salida

El sistema sigue un pipeline compuesto por cuatro etapas principales:

| Etapa | Nombre                    | Descripción                                                                                                                                                                                                                                                                                                                                   |
| ----- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | Extracción (Web Scraping) | Se utilizan las librerías `requests` y `BeautifulSoup` para acceder a las páginas de Menéame y Reddit, descargar el contenido HTML y extraer la información relevante de cada publicación, como el título, enlace, votos y clics (cuando están disponibles).                                                                                  |
| 2     | Limpieza y Normalización  | Los datos extraídos se procesan mediante `pandas`, convirtiendo los valores numéricos almacenados como texto, eliminando caracteres innecesarios y gestionando valores faltantes para obtener un conjunto de datos uniforme.                                                                                                                  |
| 3     | Análisis y Clasificación  | Se calculan indicadores de posible contenido sensacionalista. En Menéame se emplea el ratio entre votos y clics, mientras que en Reddit se identifica la presencia de palabras clave relacionadas con posibles noticias falsas o contenido llamativo. Las publicaciones que cumplen los criterios establecidos son marcadas como sospechosas. |
| 4     | Exportación de Resultados | Finalmente, los resultados se almacenan en archivos CSV. Para cada fuente se genera un archivo con todas las publicaciones procesadas y otro que contiene únicamente las publicaciones clasificadas como sospechosas.                                                                                                                         |

### 3.2 Almacenamiento de Datos

Se eligió el formato CSV para almacenar la información debido a su simplicidad, portabilidad y compatibilidad con herramientas como Microsoft Excel, Google Sheets y Python (pandas). Este formato resulta suficiente para el volumen de datos manejado en el prototipo y facilita el análisis posterior.

Los archivos generados son:

* `reporte_meneame_limpio.csv`
* `noticias_falsas.csv`
* `reporte_reddit_limpio.csv`
* `alertas_reddit_falsas.csv`

En una versión futura del sistema, estos datos podrían almacenarse en una base de datos como SQLite o PostgreSQL para mejorar el rendimiento de consultas y conservar un historial de ejecuciones.

### 3.3 Modo de Operación

El sistema funciona por lotes (batch). Cada ejecución procesa un conjunto determinado de páginas web, realiza el análisis correspondiente y genera los archivos de salida. En el prototipo la ejecución es manual desde Jupyter Notebook, mientras que una implementación futura podría automatizar el proceso mediante tareas programadas.

### 3.4 Integración de Datos

Actualmente, Menéame y Reddit son procesados mediante scripts independientes. Sin embargo, ambos conjuntos de datos pueden integrarse utilizando `pandas`, incorporando una columna denominada **Fuente**, que permita identificar el origen de cada registro y realizar análisis comparativos entre ambas plataformas.

### 3.5 Interfaz de Resultados

Los resultados del sistema se muestran en la consola durante la ejecución del programa, indicando el número de publicaciones procesadas, las alertas detectadas y un resumen de los casos sospechosos. Además, los archivos CSV exportados constituyen una salida permanente que puede utilizarse para análisis estadísticos, generación de gráficos o elaboración de informes.

Arquitectura general del sistema para la detección de publicaciones potencialmente sensacionalistas mediante técnicas de Web Scraping y procesamiento de datos con pandas.

<img width="347" height="480" alt="image" src="https://github.com/user-attachments/assets/bf4bb5e3-04b5-40b9-945b-3215806f356e" />
