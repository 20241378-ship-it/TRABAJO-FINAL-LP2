import os
import pandas as pd
import matplotlib.pyplot as plt

os.chdir(os.path.dirname(os.path.abspath(__file__)))

print("Carpeta actual:", os.getcwd())
print(os.listdir())

df_meneame = pd.read_csv("reporte_meneame_limpio.csv")
df_reddit = pd.read_csv("reporte_reddit_limpio.csv")

alertas_meneame = pd.read_csv("noticias_falsas.csv")
alertas_reddit = pd.read_csv("alertas_reddit_falsas.csv")

print(df_meneame.head())
print(df_reddit.head())

# ============================
# TABLA RESUMEN
# ============================

resumen = pd.DataFrame({
    "Fuente": ["Menéame", "Reddit"],
    "Publicaciones": [len(df_meneame), len(df_reddit)],
    "Alertas": [len(alertas_meneame), len(alertas_reddit)]
})

resumen["Porcentaje de alertas"] = (
    resumen["Alertas"] / resumen["Publicaciones"] * 100
).round(2)

print(resumen)

import matplotlib.pyplot as plt

# Crear tabla resumen
resumen = pd.DataFrame({
    "Fuente": ["Menéame", "Reddit"],
    "Publicaciones": [len(df_meneame), len(df_reddit)]
})

plt.figure(figsize=(6,4))

plt.bar(
    resumen["Fuente"],
    resumen["Publicaciones"]
)

plt.title("Cantidad de publicaciones extraídas")
plt.xlabel("Fuente")
plt.ylabel("Número de publicaciones")

plt.savefig("grafico_publicaciones.png", dpi=300)



## grafico 2

resumen = pd.DataFrame({
    "Fuente": ["Menéame", "Reddit"],
    "Alertas": [len(alertas_meneame), len(alertas_reddit)]
})

plt.figure(figsize=(6,4))

plt.bar(
    resumen["Fuente"],
    resumen["Alertas"]
)

plt.title("Cantidad de publicaciones sospechosas")
plt.xlabel("Fuente")
plt.ylabel("Número de alertas")

plt.savefig("grafico_alertas.png", dpi=300)



print("Alertas Menéame:", len(alertas_meneame))
print("Alertas Reddit:", len(alertas_reddit))



print("Llegué al gráfico 3")

import matplotlib.pyplot as plt

# Eliminar posibles valores nulos
votos = df_meneame["Votos"].dropna()

plt.figure(figsize=(8,5))

plt.hist(
    votos,
    bins=10,
    edgecolor="black"
)

plt.title("Distribución de votos en Menéame")
plt.xlabel("Número de votos")
plt.ylabel("Frecuencia")

plt.grid(axis="y", linestyle="--", alpha=0.5)

plt.tight_layout()

plt.savefig("histograma_votos_meneame.png", dpi=300)

plt.show()

print("Terminé el gráfico 3")

print(df_meneame.columns)
print(df_meneame.dtypes)


