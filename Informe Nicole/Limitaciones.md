# Limitaciones del Sistema

Aunque el prototipo cumple con los objetivos planteados, presenta algunas limitaciones propias de un sistema de demostración.

## Dependencia de la estructura de las páginas web

El Web Scraping depende directamente de la estructura HTML de los sitios analizados. Si Menéame o Reddit modifican su diseño, el código deberá actualizarse para continuar funcionando correctamente.

## Clasificación basada en reglas

La detección de publicaciones sospechosas se realiza mediante reglas heurísticas, como la relación entre votos y clics o la búsqueda de palabras clave. Estos criterios permiten identificar posibles casos, pero no verifican automáticamente la veracidad del contenido.

## Cantidad limitada de datos

El prototipo procesa únicamente un número reducido de publicaciones, suficiente para demostrar el funcionamiento del sistema, pero insuficiente para realizar análisis a gran escala.

## Escalabilidad

Actualmente el sistema trabaja por lotes y no realiza monitoreo en tiempo real. Para una aplicación de producción sería necesario incorporar una base de datos y mecanismos de actualización automática.

## Posibles mejoras

Como trabajo futuro se propone:

* Incorporar modelos de aprendizaje automático para mejorar la clasificación.
* Utilizar APIs oficiales cuando estén disponibles.
* Implementar una interfaz web para visualizar los resultados.
* Almacenar la información en una base de datos como SQLite o PostgreSQL.
