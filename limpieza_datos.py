import pandas as pd
import numpy as np

# Paso 1: Cargar el archivo con los datos
try:
    df = pd.read_csv('datos_sucios.csv')
    print("Datos originales:")
    print(df)

    # Paso 2: Limpiar los datos
    # 2.1 Convertir la columna 'descripcion_producto' a mayúsculas
    df['descripcion_producto'] = df['descripcion_producto'].str.capitalize()

    # 2.2 Reemplazar valores faltantes en 'peso_kg'
    df['peso_kg'] = df['peso_kg'].fillna(df['peso_kg'].mean())

    # Paso 3: Corregir errores de ortografía
    mapeo_correccion = {
        'Smarphone': 'Smartphone',
        'tablet': 'Tablet',
        'audifonos': 'Audifonos'
    }
    df['descripcion_producto'] = df['descripcion_producto'].replace(mapeo_correccion)

    print("\n" + "Datos limpios y validados:")
    print(df)

except FileNotFoundError:
    print("Error: El archivo 'datos_sucios.csv' no se encontró.")
except Exception as e:
    print(f"Ocurrió un error inesperado: {e}")
