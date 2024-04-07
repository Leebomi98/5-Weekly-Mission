const API_URL = "https://bootcamp-api.codeit.kr";

export async function getProfile() {
  const response = await fetch(`${API_URL}/api/sample/user`);
  return await response.json();
}

export async function getFolder() {
  const response = await fetch(`${API_URL}/api/sample/folder`);
  const responseJson = await response.json();
  return responseJson.folder;
}
