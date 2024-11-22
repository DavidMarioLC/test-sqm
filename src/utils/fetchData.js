import { notFound } from "next/navigation";
import qs from "qs";
export async function fetchData(
  path,
  params = {},
  options = {},
  mapFn = (data) => data,
) {
  const BASE_URL = process.env.SQM_API_URL;
  const queryStringified = qs.stringify(params);
  const url = `${BASE_URL}${path}?${queryStringified}`;

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      notFound();
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    // Aplicar la función de mapeo a los datos recibidos
    return mapFn(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    notFound();
  }
}
