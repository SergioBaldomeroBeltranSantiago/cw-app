import { useQuery } from "@tanstack/react-query";

export default function useMods() {
  const { data } = useQuery({
    queryKey: ["mods"],
    queryFn: async () => {
      return await fetch("/data/modFile.json").then((res) => res.json());
    },
  });

  return data ?? [];
}
