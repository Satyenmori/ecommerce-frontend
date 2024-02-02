// A mock function to mimic making an async request for data
export function fetchCount() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8888");
    const data = response.json();
    resolve({ data });
  });
}
