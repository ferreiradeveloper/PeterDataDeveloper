---
title: "30 años con bases de datos relacionales: lo que de verdad importa"
description: "Las tecnologías cambian cada cinco años; los fundamentos, casi nunca. Un repaso a las lecciones que siguen vigentes."
date: 2026-10-29
tags: ["bases-de-datos", "experiencia"]
---

En tres décadas he visto pasar arquitecturas cliente-servidor, la web, los ORM,
NoSQL, el big data, la nube y ahora la IA. Cada ola prometía dejar obsoleta a la
base de datos relacional. Ninguna lo consiguió. Estas son las lecciones que siguen
igual de vigentes que el primer día.

## 1. El modelo de datos es la decisión más cara

El código se reescribe; los datos se migran con dolor. Un modelo mal normalizado
genera inconsistencias que ninguna capa de aplicación termina de tapar.
Invertir tiempo en el diseño inicial es la mejor optimización que existe.

## 2. Las restricciones son documentación que se ejecuta

Claves primarias, claves foráneas, `NOT NULL`, `CHECK`, `UNIQUE`.
Cada restricción que dejas fuera de la base de datos es una regla que alguien
romperá desde otro sistema.

```sql
CREATE TABLE pedido (
    pedido_id    BIGINT        PRIMARY KEY,
    cliente_id   BIGINT        NOT NULL REFERENCES cliente (cliente_id),
    fecha        DATE          NOT NULL DEFAULT CURRENT_DATE,
    importe      NUMERIC(12,2) NOT NULL CHECK (importe >= 0),
    estado       VARCHAR(20)   NOT NULL
                 CHECK (estado IN ('PENDIENTE', 'PAGADO', 'ENVIADO', 'CANCELADO'))
);
```

## 3. Lee el plan de ejecución antes de opinar

"La consulta es lenta" no es un diagnóstico. El plan de ejecución te dice si hay un
full scan inesperado, una estimación de cardinalidad errónea o un join en el orden
equivocado. Mide primero, optimiza después.

```sql
EXPLAIN ANALYZE
SELECT c.nombre, SUM(p.importe) AS total
FROM   cliente c
JOIN   pedido  p ON p.cliente_id = c.cliente_id
WHERE  p.fecha >= DATE '2026-01-01'
GROUP  BY c.nombre;
```

## 4. Un índice no es gratis

Cada índice acelera lecturas y penaliza escrituras, ocupa espacio y necesita
mantenimiento. Indexa por patrones de acceso reales, no "por si acaso".

## 5. Los backups no existen hasta que restauras uno

La pregunta no es "¿tenemos copias?" sino "¿cuándo fue la última vez que probamos
una restauración completa y cuánto tardó?".

> La tecnología cambia cada cinco años. Los fundamentos, casi nunca.

En próximos artículos profundizaré en cada uno de estos puntos con casos reales.
