// Función para limpiar parámetros vacíos
export const cleanParams = (params) => {
  return Object.fromEntries(
    Object.entries(params).filter(
      ([_, value]) => value !== "" && value !== null && value !== undefined,
    ),
  );
};
