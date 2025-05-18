import Mod from "@/mod/domain/models/mod";

export default class ModAPI {
  async getModsFiles(): Promise<Mod[]> {
    const url = "https://api.github.com/repos/briancaldera/cw-mods/contents";
    const data = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }).then((response) => response.json());

    return data.map((element: any): Mod => new Mod(element["name"]));
  }
}
