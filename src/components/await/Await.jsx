export async function Await({ promise, children }) {
  let data = await promise;

  return children(data);
}
