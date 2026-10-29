---
title: "Del DBA al ingeniero de datos: el mismo oficio, otra escala"
description: "Por qué un buen administrador de bases de datos ya tiene medio camino recorrido en la ingeniería de datos moderna."
date: 2026-10-29
tags: ["ingenieria-de-datos", "carrera"]
---

Se habla de la ingeniería de datos como si fuera una disciplina nacida ayer.
Quien ha pasado años con bases de datos relacionales sabe que no es así:
cambian las herramientas y la escala, pero los problemas de fondo son los mismos.

## Lo que ya sabes (aunque tenga otro nombre)

| Mundo DBA / relacional                    | Ingeniería de datos moderna                                 |
| ----------------------------------------- | ----------------------------------------------------------- |
| Procedimientos almacenados y jobs nocturnos | Pipelines orquestados (Airflow, Dagster…)                 |
| Data warehouse con modelo estrella        | Lakehouse con capas bronze / silver / gold                  |
| Particionamiento de tablas                | Particionamiento de ficheros Parquet / Delta                |
| Integridad referencial y validaciones     | Tests de calidad de datos y contratos                       |
| Planes de ejecución                       | Planes de Spark y optimizadores de motores SQL distribuidos |

## SQL sigue siendo el idioma común

Prácticamente todas las plataformas de datos actuales hablan SQL. Las funciones
de ventana, las CTE y el razonamiento en conjuntos que un DBA domina son exactamente
lo que hace falta para transformar datos a escala.

```sql
-- Deduplicar registros quedándonos con la última versión de cada cliente
WITH ranked AS (
    SELECT *,
           ROW_NUMBER() OVER (PARTITION BY cliente_id
                              ORDER BY actualizado_en DESC) AS rn
    FROM   staging.clientes
)
SELECT *
FROM   ranked
WHERE  rn = 1;
```

## Lo que conviene aprender

- **Python** para orquestación, integraciones y pruebas.
- **Formatos columnares** (Parquet) y tablas abiertas (Delta, Iceberg).
- **Procesamiento distribuido**: cómo Spark o un motor MPP reparte el trabajo.
- **Prácticas de software**: control de versiones, CI/CD e infraestructura como código.

> La experiencia relacional no es un lastre en el mundo de los datos: es la ventaja competitiva.
